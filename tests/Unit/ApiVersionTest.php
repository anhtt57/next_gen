<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ApiVersionTest extends TestCase
{
    protected static $apps;
    protected static $version;

    public function setUp(){
    	parent::setUp();

    	// \DB::table('apps')->truncate();
    	// \DB::table('versions_app')->truncate();

    	if(is_null(self::$apps)){
        	self::$apps = factory(\App\Models\App::class)->create();
    	}
    	if(is_null(self::$version)){
        	self::$version = self::$apps->versions()->save(factory(\App\Models\Version::class)->make());
        }

    }
    public function testCheckVersionWithNoParams()
    {

		$response = $this->json('GET', 'api/v1/version/check');

		$response->assertStatus(404)
	    ->assertJson([
	        'message' => 'Game not found'
	    ]);
	    
    }

    public function testCheckVersionWithNoGameVersion(){
    	$response = $this->json('GET', 'api/v1/version/check', [
			'app_id' => self::$apps->id
		]);

		$response->assertStatus(404)
	    ->assertJson([
	        'message' => 'Version not found'
	    ]);
    }

    public function testCheckVersionWithFullParams(){
    	$response = $this->json('GET', 'api/v1/version/check', [
			'app_id' => self::$apps->id,
			'game_version' => self::$version->game_version
		]);

		$response->assertStatus(200)
	    ->assertJsonStructure([
	    	'app', 'version'
	    ]);
    }

}
