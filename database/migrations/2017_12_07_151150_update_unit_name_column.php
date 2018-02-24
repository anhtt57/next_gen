<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateUnitNameColumn extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('payment_logs', function(Blueprint $table) {
            $table->dropColumn('unit_name');
        });
        Schema::table('payment_logs', function(Blueprint $table) {
            $table->string('unit_name')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('payment_logs', function(Blueprint $table) {
            $table->dropColumn('unit_name');
        });
        Schema::table('payment_logs', function(Blueprint $table) {
            $table->string('unit_name');
        });
    }
}
