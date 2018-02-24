<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Version extends Model
{
	protected $table = 'versions_app';
    protected $fillable = [
        'app_id', 'game_version', 'bundle_id', 'operating_system', 'prevent_login', 'prevent_in_app_purchase', 'prevent_normal_purchase', 'prevent_monthly_purchase', 'message', 'created_at', 'updated_at'
    ];
    protected $system_list = array(
        1 => 'iOS', 
        2 => 'Android'
    );

    public function getSystemList(){
        return $this->system_list;
    }

    public function getSystemName(){
        return $this->system_list[$this->operating_system];
    }

    public function app(){
    	return $this->belongsTo('App\Models\App');
    }
}
