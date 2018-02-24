<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class CMSProductTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testExample()
    {
        $this->assertTrue(true);
    }

    public function testGetProductCreate() {
        $response = $this->get(route('getNewProduct'));
        $response->assertStatus(200);
    }

    public function testGetProductList() {
        $response = $this->get(route('getNewProduct'));
        $response->assertStatus(200);
    }

    public function testProductCreate(){

//        $product = factory(\App\Models\Product::class)->make()->toArray();
//
//        $response = $this->call('POST', 'products/create-new-product', $product);
//        $response->assertStatus(200)
//            ->assertJson([
//                'status'    => 'ok',
//                'message'   => 'Create version successful'
//            ]);
    }
}
