<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class bl_tariff extends Model
{

   protected $table = 'bl_tariffs';
   protected $fillable = ['traffic_limit_common', 'sesson_time_limit','tariff_name','shaper_limit_up','shaper_limit_down'];
   public function users()
     {
       return $this->hasMany('App\bl_user','tariff_type_ref');
     }
    //
}
