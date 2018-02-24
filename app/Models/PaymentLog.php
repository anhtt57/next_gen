<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PaymentLog extends Model
{
    protected $table = 'payment_logs';
    protected $fillable = [
        'payment_id', 'receipt_id', 'receipt_json', 'card_type', 'cardserial', 'cardcode', 'product_id_android', 'product_id_ios',
        'product_name', 'unit_name', 'card_amount', 'usd_money', 'vnd_money', 'game_money', 'description', 'sale_percent',
        'sale_description', 'cardtype'
    ];

    public function payment()
    {
        return $this->belongsTo('App\Models\Payment');
    }
}