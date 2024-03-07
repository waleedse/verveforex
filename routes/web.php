<?php

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

Route::get('/adminpanel/{path?}', function () {return view('admin');})->where('path' , '.*');
Route::get('/admin-login', function () {return view('admin');});

Route::view('/{path?}', 'welcome');
Route::get('/{path?}', function () {return view('welcome');})->where('path' , '.*');
Route::get('{reactRoutes}', function () {
    return view('welcome');
});
