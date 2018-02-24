<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddVersionAppTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('versions_app', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('app_id');
            $table->string('game_version', 10);
            $table->tinyInteger('operating_system')->nullable();
            $table->tinyInteger('prevent_login')->default(0);
            $table->tinyInteger('prevent_in_app_purchase')->default(0);
            $table->tinyInteger('prevent_normal_purchase')->default(0);
            $table->tinyInteger('prevent_monthly_purchase')->default(0);
            $table->string('message', 255)->nullable();
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
        Schema::dropIfExists('versions_app');
    }
}
