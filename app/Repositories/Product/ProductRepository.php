<?php
/**
 * Created by IntelliJ IDEA.
 * User: anhkuproduction
 * Date: 11/23/17
 * Time: 11:15 AM
 */

namespace App\Repositories\Product;

use App\Models\Product;
use App\Repositories\AbstractRepository;

class ProductRepository extends AbstractRepository implements ProductRepositoryInterface
{

    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return Product::class;
    }

    public function getListProduct($appId)
    {
        return Product::where('bundleId', $appId)->orderBy('usd_money')->paginate(Product::PER_PAGE);
    }

    public function getAllProductWithGameCode($game_code) {
        return Product::where('bundleId', $game_code)->orderBy('usd_money')->get();
    }

    public function getAllProduct()
    {
        return Product::orderBy('usd_money')->paginate(Product::PER_PAGE);
    }

    public function getProductDetail($productId)
    {
        return Product::find($productId);
    }

}