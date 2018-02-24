<?php

namespace Tests\Unit;

use App\Models\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class UserTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    protected static $user;

    public function testCreateUser ()
    {
        $data = [
            'facebook' => [
                'id' => $this->RandomString(),
                'user_name' => $this->RandomString(),
                'email' => $this->RandomString(),
                'phone' => $this->RandomString()
            ],
            'device_id' => $this->RandomString()
        ];
        $response = $this->json('POST', 'api/v1/login', $data);

        $response->assertStatus(200);
    }

    public function testLoginHaveFacebookId ()
    {
        $data = [
            'facebook_id' => $this->RandomString(),
            'user_name' => $this->RandomString(),
            'email' => $this->RandomString(),
            'phone' => $this->RandomString(),
            'device_id' => $this->RandomString()
        ];
        $user = User::create($data);
        $response = $this->json('POST', 'api/v1/login', ['facebook' => ['id' => $user->facebook_id]]);

        $response->assertStatus(200);
    }

    public function testLoginHaveNotFacebookId ()
    {
        $data = [
            'facebook_id' => $this->RandomString(),
            'user_name' => $this->RandomString(),
            'email' => $this->RandomString(),
            'phone' => $this->RandomString(),
            'device_id' => $this->RandomString()
        ];
        $user = User::create($data);
        $response = $this->json('POST', 'api/v1/login', ['device_id' =>  $user->device_id]);

        $response->assertStatus(200);
    }

    function RandomString()
    {
        return substr(md5(rand()), 0, 7);
    }
}
