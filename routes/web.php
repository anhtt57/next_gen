<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();
Route::get('/test', 'CMS\HomeController@index');
Route::get('/', 'CMS\AppsController@index')->middleware('auth');
Route::group([
    'middleware' => 'auth',
    'prefix' => '/apps',
    'namespace' => 'CMS'
], function () {
    Route::get('/list', 'AppsController@index')->name('listApps');
    Route::get('/detail/{appId}', 'AppsController@getAppDetail')->name('getAppDetail');
    Route::get('/create-new-app', 'AppsController@getCreate')->name('getNewApp');
    Route::post('/create-new-app', 'AppsController@postCreate')->name('postNewApp');
    Route::get('/edit-app/{appId}', 'AppsController@getEditApp')->name('getEditApp');
    Route::post('/edit-app/{appId}', 'AppsController@postEditApp')->name('postEditApp');
    Route::delete('/delete-app/{appId}', 'AppsController@postDeleteApp')->name('postDeleteApp');
    Route::get('/app-attributes', 'AppsController@getAppsAttributes')->name('appsAttribute');
    Route::get('/whitelist-login/{appId}', 'AppsController@getWhiteListLogin')->name('whiteListLogin');
    Route::post('/whitelist-login-status/{appId}', 'AppsController@changeStatusWhiteListLogin')->name('changeWhiteListLogin');
    Route::post('/add-wlaccount', 'AppsController@addWhitelistAccount')->name('addWlAccount');
});


Route::group([
	// 'prefix' 	=> 'cms',
	'namespace' => 'CMS',
	 'middleware'=> 'auth'
], function(){
	Route::get('version/ajax-change-version-data', 'VersionController@ajaxChangeVersionData');
	Route::resource('version', 'VersionController');

    Route::resource('payment', 'PaymentController');

});
//Route::group(['prefix' => 'home', 'namespace' => 'CMS', 'middleware' => 'auth'], function(){
//    Route::get('/', ['as' => 'cms.home.index', 'uses' => 'HomeController@index']);
//});
/*
|--------------------------------------------------------------------------
| Products Routes
|--------------------------------------------------------------------------
|   Routes for product.
|   LongLV
|
*/

Route::group([
    'middleware' => 'auth',
    'prefix' => '/products',
    'namespace' => 'CMS'
], function () {
    Route::get('/list', 'ProductsController@index')->name('listProducts');
    Route::get('/detail/{productId}', 'ProductsController@getProductDetail')->name('getProductDetail');
    Route::get('/create-new-product', 'ProductsController@getCreate')->name('getNewProduct');
    Route::post('/create-new-product', 'ProductsController@postCreate')->name('postNewProduct');
    Route::get('/edit-product/{productId}', 'ProductsController@getProductEdit')->name('getEditProduct');
    Route::post('/edit-product/{productId}', 'ProductsController@postEditProduct')->name('postEditProduct');
    Route::delete('/delete-product/{productId}', 'ProductsController@postDeleteProduct')->name('postDeleteProduct');
});

/*
|--------------------------------------------------------------------------
| Fronent Payment Routes
|--------------------------------------------------------------------------
|
*/
Route::group([
    'prefix' => '/webpay',
    'namespace' => 'Frontend'
], function () {
    Route::get('/', 'PMHomeController@index')->name('PM_Home');
    Route::post('/', 'PMHomeController@postLogin')->name('PM_Login');
    Route::get('/card/{appId}', 'PMCardLoadedController@index')->name('PM_Cardloaded');
    Route::post('/card/{appId}/payment', 'PMCardLoadedController@paymentCard')->name('PM_CardPayment');
    Route::get('/user/{id}', 'PMUserInfoController@index')->name('PM_UserInfo');
    Route::get('/logout', 'PMHomeController@getLogout')->name('PM_Logout');
    Route::post('/update-userinfo', 'PMUserInfoController@updateUserInfo')->name('updateUserInfo');
});