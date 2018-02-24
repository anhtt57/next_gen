<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::post('v1/login', 'API\V1\UserController@postLogin');
Route::post('v1/login-fb', 'API\V1\UserController@postLoginFb');
Route::post('v1/register', 'API\V1\UserController@register');
Route::post('v1/check-device', 'API\V1\UserController@checkDeviceId');
Route::post('v1/reset-password', 'API\V1\UserController@resetPassword');
Route::group(['prefix' => 'v1/version', 'namespace' => 'API\V1'], function(){
    Route::get('check', 'VersionController@check');
});

Route::group([
    'middleware' => 'jwt.auth',
    'prefix' => '/v1',
    'namespace' => 'API\V1'
], function () {
    Route::post('/logout', 'UserController@logout');
    Route::get('/user-profile', 'UserController@getProfile');
    Route::post('/unlink-facebook', 'UserController@unlinkFacebook');
    Route::post('/link-facebook', 'UserController@linkFacebook');

    //Product
    Route::get('products', 'ProductController@getListProduct');
    Route::get('product/{productId}', 'ProductController@getProductDetail');

    //Payment
    Route::post('payment-by-card', 'PaymentController@postPaymentByCard');
    Route::post('payment-in-app', 'PaymentController@postPaymentByInApp');
});


