<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdatePaymentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('payments', function (Blueprint $table) {
            $table->dropColumn('product_id');
        });
        Schema::table('payments', function(Blueprint $table) {
            $table->unsignedInteger('product_id')->nullable();
            $table->string('reqid_finviet')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('payments', function (Blueprint $table) {
            $table->dropColumn('product_id');
            $table->dropColumn('reqid_fidviet');
        });
        Schema::table('payments', function(Blueprint $table) {
            $table->unsignedInteger('product_id');
        });
    }
}
