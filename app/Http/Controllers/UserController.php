<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;


class UserController extends BaseController
{
    /**
     * Login user and return token
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();
            $token = $user->createToken('auth_token')->plainTextToken;
            $role = $user->getRoleNames()->first(); // Get the first role (assuming user has only one role)
            return response()->json(['status' => 200 , 'user' => $user , 'token' => $token, 'role' => $role]);
        }

        throw ValidationException::withMessages([
            'email' => ['The provided credentials are incorrect.'],
        ]);
    }
    /**
     * Login user and return token
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function Clientlogin(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();
            if($user->hasRole("client")){
                if(empty($user->email_verified_at)){
                    return response()->json(['status' => 402 , "message" => "Your email is not verified please verify it and try login again."]);
                }
                $token = $user->createToken('auth_token')->plainTextToken;
                $role = $user->getRoleNames()->first(); // Get the first role (assuming user has only one role)
                return response()->json(['status' => 200 , 'user' => $user , 'token' => $token, 'role' => $role]);
            }else{
                return response()->json(['status' => 401 , "message" => "Invalid credentials or you have not registered with verveforex"]);
            }
        }

        throw ValidationException::withMessages([
            'email' => ['The provided credentials are incorrect.'],
        ]);
    }

    /**
     * Check token validity and return user information
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function checkToken(Request $request)
    {
        $user = $request->user();

        if ($user) {
            $role = $user->getRoleNames()->first();
            return response()->json(['user' => $user, 'role' => $role]);
        }

        return response()->json(['message' => 'Unauthorized'], 401);
    }

    /**
     * Register a new user
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'firstName' => 'required|string',
            'lastName' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:6',
            'country' => 'required|string',
            'phone' => 'required|string',
        ]);

        if($validator->fails()){
            $response = ['status' => 422 , 'message' => $validator->errors()->first(),'errors' => $validator->errors()];
            return $response;
        }

        $user = User::create([
            'first_name' => $request->firstName,
            'last_name' => $request->lastName,
            'email' => $request->email,
            'country' => $request->country,
            'password' => Hash::make($request->password),
            'phone' => $request->phone,
        ]);

        $user->assignRole('client');
        $user->sendEmailVerificationNotification();
        // $token = $user->createToken('auth_token')->plainTextToken;
        return response()->json(['status' => 200 , "message" => "User Signed up successfully. please verify your email to login."], 201);
    }

    public function resendVerificationEmail($email) {
        $user = User::whereEmail($email)->first();
        if($user){
            $user->sendEmailVerificationNotification();
            return response()->json(['status' => 200 , "message" => "Verificaion email has been sent. Please verify and login"], 200);
        }else{
            return response()->json(['status' => 404 , "message" => "User not found"], 200);
        }
    }

    public function sendResetLinkEmail(Request $request)
    {
        $request->validate(['email' => 'required|email']);

        $status = Password::sendResetLink(
            $request->only('email')
        );

        // return $status;

        return $status === Password::RESET_LINK_SENT
            ? response()->json(['status' => 200, 'message' => 'Reset link sent to your email.'], 200)
            : response()->json(['status' => 500, 'message' => 'Unable to send reset link.'], 500);
    }

    public function reset(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:6',
        ]);

        if($validator->fails()){
            $response = ['status' => 422 , 'message' => $validator->errors()->first(),'errors' => $validator->errors()];
            return $response;
        }

        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user, $password) {
                $user->password = Hash::make($password);
                $user->save();
            }
        );

        return $status === Password::PASSWORD_RESET
            ? response()->json(['status' => 200, 'message' => 'Password reset successfully.'], 200)
            : response()->json(['status' => 500, 'message' => 'Unable to reset password. pLease retry again'], 500);
    }

    public function verifyEmail($id , $hash){
        $user = User::find($id);
        if($user && !$user->email_verified_at){
            $user->markEmailAsVerified();
            $user->status = 'active';
            $user->save();
            $response = ['status' => 200 , 'message' => "Email verified successfully"];
            return $response;
        }else{
            $response = ['status' => 422 , 'message' => "Invalid Link or Expired Link"];
            return $response;
        }
    }

    /**
     * Update user information
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request)
    {
        $user = Auth::user();

        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email,'.$user->id,
            'password' => 'nullable|string|min:6',
        ]);

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'password' => isset($request->password) ? Hash::make($request->password) : $user->password,
        ]);

        return response()->json(['message' => 'User updated successfully']);
    }


}
