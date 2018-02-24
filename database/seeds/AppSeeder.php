<?php

use Illuminate\Database\Seeder;
use App\Models\App;
class AppSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $app = App::create(['game_name' => 'Thông Ma Má', 'game_code' => 'TMM', 'google_conversion_id' => 'demo', 'google_conversion_label' => 'demo', 'ios_version' => '9.0', 'android_version' => '7.2', 'currency_fullname' => 'Dầu ăn', 'currency_shortname' => 'DA', 'monthly_card_fullname' => '5 lít', 'monthly_card_shortname' => '5L', 'policy_name' => 'demo', 'policy_content' => 'demo', 'tutorial_name' =>'demo', 'tutorial_content' => 'demo', 'status' => 1]);

        $app->versions()->create(['game_version' => '1.0', 'operating_system' => 1, 'prevent_login' => 1, 'prevent_in_app_purchase' => 1, 'prevent_normal_purchase' => 1, 'prevent_monthly_purchase' => 1, 'message' => 'demo', 'bundle_id' => 'asdasd']);

        $app->versions()->create(['game_version' => '1.1', 'operating_system' => 1, 'prevent_login' => 0, 'prevent_in_app_purchase' => 1, 'prevent_normal_purchase' => 1, 'prevent_monthly_purchase' => 0, 'message' => 'demo1', 'bundle_id' => 'asdasd']);

        $app->versions()->create(['game_version' => '1.2', 'operating_system' => 2, 'prevent_login' => 1, 'prevent_in_app_purchase' => 1, 'prevent_normal_purchase' => 1, 'prevent_monthly_purchase' => 0, 'message' => 'demo2', 'bundle_id' => 'asdasd']);
    }
}
