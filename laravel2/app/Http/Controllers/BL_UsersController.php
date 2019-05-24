<?php

namespace App\Http\Controllers;

use App\bl_user;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;

use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Image;

class BL_UsersController extends Controller
{
    public function showUsersList()
    {
         $Users =DB::table('bl_users')->select(array('bl_users.id','login','password','bl_tariffs.tariff_name','status'))
                                      ->leftJoin('bl_tariffs','bl_users.tariff_type_ref','=','bl_tariffs.id')
                                      ->get();
         return Response::json($Users);

    }
    public function ajaxTariffsList(){
        $Tariffs =DB::table('bl_tariffs')->select(array('id','tariff_name'))->get();
        return Response::json($Tariffs);
    }
    public function addUser(){

     /*if (!bl_user::where('login', '=', Input::get('login'))->exists()) {
        $id = DB::table('bl_users')->insertGetId(
                 array('login' => Input::get('login'),'password' => Input::get('password'),'tariff_type_ref' => Input::get('tariff_name'), 'status' => 1)
             );
     }*/
	$result = 0;
     if (!bl_user::where('login', '=', Input::get('login'))->exists()) {

	 $result = DB::statement('select create_user(?,?,?)', array(''.Input::get('login').'',''.Input::get('password').'', Input::get('tariff_name')));

     }

        return ($result) ? 1 : 0;
    }
    public function editUser(){
      /*$result= DB::table('bl_users')->where('id', Input::get('id'))
                 ->update(['tariff_type_ref' => Input::get('tariff_name'),
'status'=> Input::get('status')]);
      */
	$result = 0;

	   $result = DB::statement('select change_user_status(?,?,?)',array((int)Input::get('id'),(int)Input::get('status'),(int)Input::get('tariff_name')));

        return ($result) ? 1 : 0;
    }


  }
