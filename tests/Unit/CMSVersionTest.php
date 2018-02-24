<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use App\Models\Admin;
use App\Models\Version;

class CMSVersionTest extends TestCase
{
    // public function setUp(){
    // 	parent::setUp();

    // 	// \DB::table('apps')->truncate();
    // 	// \DB::table('versions_app')->truncate();

    // 	if(is_null(self::$apps)){
    //     	self::$apps = factory(\App\Models\App::class)->create();
    // 	}
    // 	if(is_null(self::$version)){
    //     	self::$version = self::$apps->versions()->save(factory(\App\Models\Version::class)->make());
    //     }

    // }
    public function testIndexNoApp(){
    	$user = new Admin(['name' => 'DucLV']);

		$this->be($user);

		$response = $this->call('GET', 'version');

		$response->assertRedirect('apps/list');
	    
    }

    public function testIndexWithApp(){
    	$user = new Admin(['name' => 'DucLV']);
		$this->be($user);

        $app = factory(\App\Models\App::class)->create();
        $version = $app->versions()->save(factory(\App\Models\Version::class)->make());

		$response = $this->call('GET', 'version', ['app_id' => $app->id]);
		$response->assertStatus(200);
    }

    public function testVersionValidate(){
        $user = new Admin(['name' => 'DucLV']);
        $this->be($user);

        $version = factory(\App\Models\Version::class)->make(['game_version' => ''])->toArray();

        $response = $this->call('POST', 'version', $version);
        $response->assertStatus(200)
        ->assertJson([
            'status' => 'error',
            'message' => 'The game version field is required.'
        ]);
    }

    public function testVersionCreateExisted(){
        $user = new Admin(['name' => 'DucLV']);
        $this->be($user);

        $version1 = factory(\App\Models\Version::class)->create();

        $response = $this->call('POST', 'version', $version1->toArray());
        $response->assertStatus(200)
        ->assertJson([
            'status'    => 'error',
            'message'   => 'Version existed'
        ]);
    }

    public function testVersionCreate(){
        $user = new Admin(['name' => 'DucLV']);
        $this->be($user);

        $version = factory(\App\Models\Version::class)->make()->toArray();

        $response = $this->call('POST', 'version', $version);
        $response->assertStatus(200)
        ->assertJson([
            'status'    => 'ok',
            'message'   => 'Create version successful'
        ]);
    }

    public function testVersionUpdate(){
        $user = new Admin(['name' => 'DucLV']);
        $this->be($user);

        $version = Version::all()->last()->toArray();
        $version['bundle_id'] = 'new'.$version['bundle_id'];
        $response = $this->call('PUT', 'version/'.$version['id'], $version);
        $response->assertStatus(200)
        ->assertJson([
            'status'    => 'ok',
            'message'   => 'Update version successful'
        ]);
    }

    public function testVersionDelete(){
        $user = new Admin(['name' => 'DucLV']);
        $this->be($user);

        $version_id = Version::all()->last()->id;        
        $response = $this->call('DELETE', 'version/'.$version_id);
    }
}
