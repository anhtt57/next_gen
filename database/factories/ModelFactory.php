<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Models\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});

$factory->define(App\Models\App::class, function (Faker\Generator $faker) {
    return [
    	'game_name' => $faker->name, 
    	'game_code' => str_random(3), 
    	'google_conversion_id' => str_random(10), 
    	'google_conversion_label' => str_random(10), 
    	'ios_version' => (string)$faker->randomFloat(2,1,10), 
    	'android_version' => (string)$faker->randomFloat(2,1,10), 
    	'currency_fullname' => $faker->name, 
    	'currency_shortname' => str_random(3), 
    	'monthly_card_fullname' => $faker->name, 
    	'monthly_card_shortname' => str_random(10), 
    	'policy_name' => str_random(10), 
    	'policy_content' => str_random(10), 
    	'tutorial_name' =>str_random(10), 
    	'tutorial_content' => str_random(10), 
    	'status' => 1
    ];
});

$factory->define(App\Models\Version::class, function (Faker\Generator $faker) {
    return [
        'game_version' => $faker->randomFloat(2,1,10), 
    	'bundle_id' => str_random(20), 
    	'operating_system' => 1, 
    	'prevent_login' => $faker->boolean(1), 
    	'prevent_in_app_purchase' => $faker->boolean(1), 
    	'prevent_normal_purchase' => $faker->boolean(1), 
    	'prevent_monthly_purchase' => $faker->boolean(1), 
    	'message' => $faker->name,
    	'app_id' => App\Models\App::first()
    ];
});