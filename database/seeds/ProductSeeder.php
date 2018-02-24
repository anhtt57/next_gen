<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([
            'bundleId' => 'kni.dev',
            'product_id_android' => 'product_android',
            'product_id_ios' => 'product_ios',
            'product_name' => 'Product name '.str_random(20),
            'unit_name' => "KNB",
            'usd_money' => random_int(0, 5),
            'vnd_money' => random_int(20, 40),
            'game_money' => random_int(1000, 1000000),
            'description' => 'Description '.str_random(80),
            'sale_percent' => random_int(0, 100),
            'sale_description' => 'Sale description '.str_random(80),
            'image' => 'http://www.danhba24h.com/images/producvg/31/10050226_2013.jpg',
        ]);

        $this->call(ProductSeeder::class);
    }
}
