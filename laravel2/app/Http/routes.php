<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
//---------------------Authentification routes
Route::get('auth/login', 'Auth\AuthController@getLogin');
Route::post('auth/login', 'Auth\AuthController@postLogin');
Route::get('auth/logout', 'Auth\AuthController@getLogout');

//---------------------------Register routes
Route::get('auth/register', 'Auth\AuthController@getRegister');
Route::post('auth/register', 'Auth\AuthController@postRegister');

Route::controllers([
    'auth' => 'Auth\AuthController',
    'password' => 'Auth\PasswordController',
]);
Route::get("/", function(){
   return View::make("welcome");
});
Route::get("/login", function(){
   return View::make("auth/login");
});
Route::get("/register", function(){
   return View::make("auth/register");
});



Route::get("/home", function(){
   return redirect('/');
});
Route::get("/users", ['middleware' => 'auth', function(){
   return View::make("UsersList");
}]);
Route::get("/tariffs",['middleware' => 'auth', function(){
   return View::make("TariffsList");
}]);
Route::get('userList', 'BL_UsersController@showUsersList');
Route::post('userList/addUser', 'BL_UsersController@addUser');
Route::post('userList/editUser', 'BL_UsersController@editUser');
Route::get('ajaxTariffsList', 'BL_UsersController@ajaxTariffsList');

Route::get('tariffsList', 'BL_TariffsController@showTariffsList');
Route::post('tariffsList/addTariff', 'BL_TariffsController@addTariff');
