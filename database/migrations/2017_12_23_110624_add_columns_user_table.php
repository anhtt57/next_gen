<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddColumnsUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function(Blueprint $table) {
            $table->string('full_name')->nullable();
            $table->string('identification')->nullable();
            $table->tinyInteger('gender')->default(0);
            $table->date('dob')->nullable();
            $table->string('city')->nullable();
            $table->string('district')->nullable();
            $table->string('ward')->nullable();
            $table->string('address')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function(Blueprint $table) {
            $table->dropColumn('full_name');
            $table->dropColumn('identification');
            $table->dropColumn('gender');
            $table->dropColumn('dob');
            $table->dropColumn('city');
            $table->dropColumn('district');
            $table->dropColumn('ward');
            $table->dropColumn('address');
        });
    }
}
