<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class bl_user extends Model
{
   protected $table = 'bl_users';
   protected $fillable = ['login', 'password', 'tariff_type_ref','status'];

    public function tariff()
       {
           return $this->belongsTo('App\bl_tariff','tariff_type_ref','id');
       }

    //
}
