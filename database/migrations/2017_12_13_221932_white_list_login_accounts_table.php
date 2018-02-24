<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class WhiteListLoginAccountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('whitelist_accounts', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id')->nullable();
            $table->string('ip')->nullable();
            $table->timestamps();
        });

        Schema::table('apps', function(Blueprint $table) {
            $table->tinyInteger('whitelist_login_on')->default(0);
            $table->string('whitelist_login_message', 255);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('whitelist_accounts');

        Schema::table('apps', function(Blueprint $table) {
            $table->dropColumn('whitelist_login_on');
            $table->dropColumn('whitelist_login_message');
        });

    }
}
