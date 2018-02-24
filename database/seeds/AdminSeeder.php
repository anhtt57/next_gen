<?php

use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('admins')->truncate();
        $item = [
        	'name' => 'Admin Nopegame',
            'email' => 'admin@nopegame.com',
	    	'is_admin' => 1,
	    	'password' => bcrypt('123456')     
        ];
        DB::table('admins')->insert($item);
    }
}
