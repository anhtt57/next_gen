<?php
/**
 * Created by IntelliJ IDEA.
 * User: anhkuproduction
 * Date: 11/22/17
 * Time: 11:20 PM
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Product extends Model
{
    /**
     * Table name.
     */
    protected $table = 'products';
    const PER_PAGE = 20;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'bundleId', 'product_id_android', 'product_id_ios', 'product_name', 'unit_name', 'usd_money',
        'vnd_money', 'game_money', 'description', 'sale_percent', 'sale_description', 'image', 'product_type'
    ];

}