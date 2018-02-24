<?php

namespace Tests\Feature\Product;


use Tests\TestCase;

class ProductControllerTest extends TestCase
{
    /*
     *  API /v1/products?page={page}
     */
    public function testGetProductsWithoutTokenFail() {
        $header = ['x-token' => ''];
        $res = $this->json('GET', 'api/v1/products', [], $header);
        $res->assertStatus(401);
    }

    public function testGetProductsOk()
    {
        $header = ['x-token' => $this->getToken()];
        $res = $this->json('GET', 'api/v1/products', [], $header);
        $res->assertStatus(200);
    }

    public function testGetProductsLoadMoreOk() {
        $header = ['x-token' => $this->getToken()];
        $res = $this->json('GET', 'api/v1/products?page=2', [], $header);
        $res->assertStatus(200);
        //Check items return 20
    }

    public function testGetProductsLoadMoreEndOk() {
        $header = ['x-token' => $this->getToken()];
        $res = $this->json('GET', 'api/v1/products?page=2000000', [], $header);
        $res->assertStatus(200);
        //Check no items
//        $res->assertJsonStructure(["status"=> 200, "message"=> "success", "data"=> []]);
    }

    /*
     *  API /v1/product/{productId}
     */
    public function testGetProductWithoutTokenFail() {
        $header = ['x-token' => ''];
        $res = $this->json('GET', 'api/v1/product/12', [], $header);
        $res->assertStatus(401);
    }

    public function testGetProductOk() {
        $header = ['x-token' => $this->getToken()];
        $res = $this->json('GET', 'api/v1/product/12', [], $header);
        $res->assertStatus(200);
        $res->assertJson(["message"=> "success"]);

    }

    public function testGetProductNotExits() {
        $header = ['x-token' => $this->getToken()];
        $res = $this->json('GET', 'api/v1/product/12121212', [], $header);
        $res->assertStatus(400);
        $res->assertExactJson(["status"=> 404,"message"=> "Product not found"]);
    }
}

?>