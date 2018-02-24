<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class App extends Model
{
	protected $table = 'apps';

    const PER_PAGE = 20;
    protected $fillable = [
        'id', 'game_name', 'game_code', 'ga_id', 'google_conversion_id', 'google_conversion_label',
        'google_conversion_value', 'service_id', 'service_key', 'ios_version', 'android_version',
        'app_store_link', 'google_store_link', 'currency_fullname', 'currency_shortname', 'monthly_card_fullname',
        'monthly_card_shortname', 'policy_name', 'policy_content', 'tutorial_name', 'tutorial_content', 'status',
        'whitelist_login_on'
    ];

    public function versions(){
    	return $this->hasMany('App\Models\Version');
    }
}