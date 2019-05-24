<?php

namespace App\Http\Controllers;

use App\bl_user;
use App\bl_tariff;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;

use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Image;


class BL_TariffsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function showTariffsList()
    {
       $Tariffs =DB::table('bl_tariffs')->select(array('id','tariff_name','traffic_limit_common','shaper_limit_up','shaper_limit_down'))->get();
                return Response::json($Tariffs);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function addTariff()
    {
       $result = 0;
            /*if (!bl_tariff::where('tariff_name', '=', Input::get('tariff_name'))->exists()) {
               $id = DB::table('bl_tariffs')->insertGetId(
                        array('tariff_name' => Input::get('tariff_name'),'traffic_limit_common' => Input::get('traffic_limit_common'),'shaper_limit_up' => Input::get('shaper_limit_up'),'shaper_limit_down' => Input::get('shaper_limit_down'))
                    );
            }*/
           if (!bl_tariff::where('tariff_name', '=', Input::get('tariff_name'))->exists()) {
              $result = DB::statement('select create_tariff(?,?,?,?)',array(Input::get('traffic_limit_common'),Input::get('shaper_limit_up'),Input::get('shaper_limit_down'),''.Input::get('tariff_name').''));

           }
               return ($result) ? 1 : 0;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
