<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    protected $table = 'payments';
    protected $fillable = [
        'id', 'user_id', 'method_type', 'product_id', 'reqid_finviet', 'transid_finviet', 'ios_receipt_id', 'android_receipt_id'
    ];
    public function user(){
    	return $this->belongsTo('App\Models\User');
    }

    public function getMethodName(){
    	switch ($this->method_type) {
    		case 0:
    			return 'Thẻ cào';
    			break;
    		
    		default:
    			return 'In-app';
    			break;
    	}
    }

    public function getCardName(){
        switch (strtolower($this->log->cardtype)) {
            case 'vte':
                return 'Viettel';
                break;
            case 'vnp':
                return 'Vinaphone';
                break;
            case 'vcoin':
                return 'VCoin';
                break;
            case 'vtcpro':
                return 'VTC Pro';
                break;  
             case 'mbp':
                return 'Mobiphone';
                break;              
            default:
                return 'Vietnamobile';
                break;
        }
    }

    public function getProductName(){
        return $this->log->product_name != '' ? $this->log->product_name : 'Nạp tiền';             
    }

    public function log()
    {
        return $this->hasOne('App\Models\PaymentLog');
    }
}