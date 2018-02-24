<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePaymentLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payment_logs', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('payment_id');
            $table->string('receipt_id')->nullable();
            $table->longText('receipt_json')->nullable();
            $table->string('card_type')->nullable();
            $table->string('cardserial')->nullable();
            $table->string(('cardcode'))->nullable();
            $table->string('product_id_android')->nullable();
            $table->string('product_id_ios')->nullable();
            $table->string('product_name')->nullable();
            $table->string('unit_name');
            $table->string('card_amount');
            $table->decimal('usd_money', 15, 2)->nullable();
            $table->decimal('vnd_money', 15, 2)->nullable();
            $table->decimal('game_money', 15, 2)->nullable();
            $table->string('description', 255)->nullable();
            $table->unsignedInteger('sale_percent')->nullable();
            $table->string('sale_description', 255)->nullable();
            $table->timestamps();
            $table->foreign('payment_id')->references('id')->on('payments');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payment_logs');
    }
}
