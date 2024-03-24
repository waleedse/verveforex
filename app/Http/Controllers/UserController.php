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
