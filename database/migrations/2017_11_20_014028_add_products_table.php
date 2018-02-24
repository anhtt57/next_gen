<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->string('bundleId', 255);
            $table->string('product_id_android');
            $table->string('product_id_ios');
            $table->string('product_name')->nullable();
            $table->string('unit_name');
            $table->decimal('usd_money', 15, 2)->nullable();
            $table->decimal('vnd_money', 15, 2)->nullable();
            $table->decimal('game_money', 15, 2)->nullable();
            $table->string('description', 255)->nullable();
            $table->unsignedInteger('sale_percent')->nullable();
            $table->string('sale_description', 255)->nullable();
            $table->string('image')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
