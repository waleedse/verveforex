<?php

use App\Http\Controllers\AdminWebsiteController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use League\CommonMark\Extension\FrontMatter\FrontMatterParser;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/login', [UserController::class, 'login']);
Route::post('/register', [UserController::class, 'register']);
Route::middleware('auth:sanctum')->get('/check-auth', [UserController::class, 'checkToken']);

// Protected routes (require authentication)
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/update-profile', [UserController::class, 'update']);

    // Pomrotions
    Route::post('/add-promotion', [AdminWebsiteController::class  , 'add_promotion']);
    Route::post('/get-promotions', [AdminWebsiteController::class  , 'get_promotions']);
    Route::post('/update-promotion', [AdminWebsiteController::class , 'update_promotion']);
    Route::post('/get-promotion-by-id', [AdminWebsiteController::class , 'get_promotion_by_id']);
    Route::post('/get-all-promotions', [AdminWebsiteController::class , 'get_all_promotions']);
    Route::post('/delete-promotion', [AdminWebsiteController::class , 'delete_promotion']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
