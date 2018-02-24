<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateAppsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('apps', function (Blueprint $table) {
            $table->dropColumn('ios_version');
            $table->dropColumn('android_version');
        });
        Schema::table('apps', function(Blueprint $table) {
            $table->string('ios_version', 10)->nullable();
            $table->string('android_version', 10)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('apps', function (Blueprint $table) {
            $table->dropColumn('ios_version');
            $table->dropColumn('android_version');
        });
        Schema::table('apps', function(Blueprint $table) {
            $table->string('ios_version', 10);
            $table->string('android_version', 10);
        });
    }
}
