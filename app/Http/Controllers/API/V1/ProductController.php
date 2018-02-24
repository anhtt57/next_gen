<?php

namespace App\Http\Controllers\API\V1;

use App\Models\Product;
use App\Repositories\Product\ProductRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use PhpParser\Node\Expr\Array_;

class ProductController extends ApiController
{

    private $product;

    public function __construct(Response $response, Request $request, ProductRepositoryInterface $product)
    {
        parent::__construct($response, $request);
        $this->product = $product;
    }

    /**
     * get all items of this app
     * @return Response
     */
    public function getListProduct(Request $request)
    {
        $appId = $request->header('game-code');
        $listProduct = $this->product->getListProduct($appId);
        $products = $listProduct->items();
        return response([
            'status' => 200,
            'message' => 'success',
            'data' => !empty($products) ? $products : []
        ],200);
    }

    /**
     * get detail item
     * @return Response
     */
    public function getProductDetail($productId)
    {
        $productDetail = $this->product->find($productId);
        if ($productDetail) {
            return response([
                'status' => 200,
                'message' => 'success',
                'data' => $productDetail,
            ],200);
        } else {
            return response([
                'status' => 404,
                'message' => 'Product not found',
            ],200);
        }
    }
}
