<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdatePaymentLogTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('payment_logs', function (Blueprint $table) {
            $table->dropColumn('card_type');
            $table->dropColumn('card_amount');
        });
        Schema::table('payment_logs', function(Blueprint $table) {
            $table->string('cardtype')->nullable();
        });
        Schema::table('payments', function(Blueprint $table) {
            $table->string('transid_finviet')->nullable();
        });


        Schema::table('products', function(Blueprint $table) {
            $table->dropColumn('product_id_android');
            $table->dropColumn('product_id_ios');

        });
        Schema::table('products', function(Blueprint $table) {
            $table->string('product_id_android')->nullable();
            $table->string('product_id_ios')->nullable();
            $table->tinyInteger('product_type')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('payment_logs', function (Blueprint $table) {
            $table->dropColumn('cardtype');
        });
        Schema::table('payment_logs', function(Blueprint $table) {
            $table->string('card_type')->nullable();
            $table->string('card_amount');
        });
        Schema::table('payments', function(Blueprint $table) {
            $table->dropColumn('transid_finviet');
        });
        Schema::table('products', function(Blueprint $table) {
            $table->dropColumn('product_type');
            $table->dropColumn('product_id_android');
            $table->dropColumn('product_id_ios');
        });
        Schema::table('products', function(Blueprint $table) {
            $table->string('product_id_android');
            $table->string('product_id_ios');
        });
    }
}
