<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddAppsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('apps', function (Blueprint $table) {
            $table->increments('id');
            $table->string('game_name', 255);
            $table->string('game_code', 255);
            $table->string('ga_id', 255)->nullable();
            $table->string('google_conversion_id', 255);
            $table->string('google_conversion_label', 255);
            $table->string('google_conversion_value', 255)->nullable();
            $table->string('service_id', 255)->nullable();
            $table->string('service_key', 255)->nullable();
            $table->string('ios_version', 5);
            $table->string('android_version', 5);
            $table->string('app_store_link', 255)->nullable();
            $table->string('google_store_link', 255)->nullable();
            $table->string('currency_fullname', 255);
            $table->string('currency_shortname', 255);
            $table->string('monthly_card_fullname', 255)->nullable();
            $table->string('monthly_card_shortname', 255)->nullable();
            $table->string('policy_name', 255)->nullable();
            $table->longText('policy_content')->nullable();
            $table->string('tutorial_name', 255)->nullable();
            $table->longText('tutorial_content')->nullable();
            $table->tinyInteger('status')->default(0);
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
        Schema::dropIfExists('apps');
    }
}
