<?php
/**
 * Created by IntelliJ IDEA.
 * User: anhkuproduction
 * Date: 11/23/17
 * Time: 11:15 AM
 */

namespace App\Repositories\Product;

use Illuminate\Http\Request;

interface ProductRepositoryInterface
{
    public function getAllProductWithGameCode($game_code);
    public function getListProduct($appId);
    public function getAllProduct();
    public function getProductDetail($productId);

}