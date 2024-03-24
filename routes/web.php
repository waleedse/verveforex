<?php

use GuzzleHttp\Psr7\Request;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/email/verify', function () {
    return view('auth.verify-email');
})->middleware('auth')->name('verification.notice');

// Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
//     $request->fulfill();

//     return redirect('/home');
// })->middleware(['auth', 'signed'])->name('verification.verify');

Route::post('/email/verification-notification', function (Request $request) {
    // $request->user()->sendEmailVerificationNotification();

    return back()->with('message', 'Verification link sent!');
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');

Route::get('/adminpanel/{path?}', function () {return view('admin');})->where('path' , '.*');
Route::get('/admin-login', function () {return view('admin');});
Route::get('/login', function () {return view('client');});
Route::get('/signup', function () {return view('client');});
Route::get('/client/{path?}', function () {return view('admin');})->where('path' , '.*');
Route::get('/email/verify/{id}/{hash}', function () {return view('client');});

Route::view('/{path?}', 'welcome');
Route::get('/{path?}', function () {return view('welcome');})->where('path' , '.*');
Route::get('{reactRoutes}', function () {
    return view('welcome');
});
