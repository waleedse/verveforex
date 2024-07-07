<?php

use App\Http\Controllers\Admin\AdminWebsiteController;
use App\Http\Controllers\Admin\ClientController;
use App\Http\Controllers\Admin\NewsController;
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
Route::post('/client-login', [UserController::class, 'Clientlogin']);
Route::post('/resend-verification-email/{email}', [UserController::class, 'resendVerificationEmail']);
Route::post('/register', [UserController::class, 'register']);
Route::get('/verify-email/{id}/{hash}', [UserController::class, 'verifyEmail']);
Route::post('password/email', [UserController::class, 'sendResetLinkEmail']);
Route::post('/reset-password', [UserController::class, 'reset']);

Route::get('/get-countries', [AdminWebsiteController::class, 'get_countries']);
Route::get('/get-promotions', [AdminWebsiteController::class  , 'get_promotions']);
Route::get('/get-home-slider', [AdminWebsiteController::class, 'get_home_sliders']);
Route::get('get-news',[NewsController::class , 'get_posts']);
Route::get('get-news-by-slug/{slug}',[NewsController::class , 'get_post_by_slug']);
Route::get('get-feature-news',[NewsController::class , 'get_feature_posts']);
Route::get('/get-all-brokers/{status?}', [AdminWebsiteController::class , 'get_all_brokers']);

Route::middleware('auth:sanctum')->get('/check-auth/{role}', [UserController::class, 'checkToken']);

// Protected routes (require authentication)
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/update-profile', [UserController::class, 'update']);
    Route::get('/get-client-brokers', [ClientController::class , 'get_client_brokers']);
    Route::get('/get-client-broker-links/{id?}', [ClientController::class , 'get_client_broker_links']);
    Route::post('/update-client-broker-links', [ClientController::class , 'update_client_broker_link']);

    Route::get('/get-user/{id}', [UserController::class, 'getUserById']);
    // Pomrotions
    Route::post('/add-promotion', [AdminWebsiteController::class  , 'add_promotion']);
    Route::post('/update-promotion', [AdminWebsiteController::class , 'update_promotion']);
    Route::get('/get-promotion-by-id/{id}', [AdminWebsiteController::class , 'get_promotion_by_id']);
    Route::get('/get-all-promotions/{status?}', [AdminWebsiteController::class , 'get_all_promotions']);
    Route::delete('/delete-promotion/{id}', [AdminWebsiteController::class , 'delete_promotion']);

    Route::post('/add-note', [AdminWebsiteController::class , 'addNote']);
    Route::get('/get-notes/{client}', [AdminWebsiteController::class , 'getNotes']);

    // brokers
    Route::post('/add-broker', [AdminWebsiteController::class  , 'add_broker']);
    Route::post('/update-broker', [AdminWebsiteController::class , 'update_broker']);
    Route::get('/get-broker-by-id/{id}', [AdminWebsiteController::class , 'get_broker_by_id']);
    Route::delete('/delete-broker/{id}', [AdminWebsiteController::class , 'delete_broker']);
    Route::get('/get-ib-requests', [AdminWebsiteController::class , 'getIntroducingBrokerRequets']);
    Route::get('/approve-request/{id}', [AdminWebsiteController::class , 'ApproveIntroducingBroker']);
    Route::get('/decline-request/{id}', [AdminWebsiteController::class , 'DeclineIntroducingBroker']);

    Route::post('/add-slider', [AdminWebsiteController::class, 'add_slider']);
    Route::post('/update-slider', [AdminWebsiteController::class, 'update_slider']);
    Route::get('/get-all-sliders', [AdminWebsiteController::class, 'get_all_sliders']);
    Route::get('/get-slider-by-id/{id}', [AdminWebsiteController::class, 'get_slider_by_id']);
    Route::delete('/delete-slider/{id}', [AdminWebsiteController::class, 'delete_slider']);

    // Posts Controller
    Route::post('add-news',[NewsController::class , 'addnewpost']);
    Route::get('get-all-news',[NewsController::class , 'get_allposts']);
    Route::delete('delete-news/{id}',[NewsController::class , 'delete_post']);
    Route::get('get-news-by-id/{id}',[NewsController::class , 'get_post_by_id']);
    Route::post('update-news',[NewsController::class , 'update_post']);


    // Clients Controller
    Route::get('get-clients',[ClientController::class , 'getClients']);
    Route::post('create-ib',[ClientController::class , 'createIntroducingBroker']);
    Route::get('get-introducing-brokers',[ClientController::class , 'getIntroducingBrokers']);
    Route::get('get-ib-with-refferals/{id}',[ClientController::class , 'getIbWithRefferals']);

});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
