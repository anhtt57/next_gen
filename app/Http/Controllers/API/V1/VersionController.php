<?php

namespace App\Http\Controllers\API\V1;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Repositories\Version\VersionRepositoryInterface;
use App\Repositories\App\AppRepositoryInterface;

class VersionController extends ApiController
{
	protected $version_repo;
	protected $app_repo;
    public function __construct(Response $response, Request $request, VersionRepositoryInterface $version_repo, AppRepositoryInterface $app_repo){
    	parent::__construct($response, $request);

    	$this->version_repo = $version_repo;
    	$this->app_repo 	= $app_repo;
    }
    public function check()
    {
        //check game_code 
    	$app_id 	   = $this->request->app_id;
    	$game_version  = $this->request->game_version;
    	$app 		   = $this->app_repo->find($app_id);
    	if($app){
    		$version = $this->version_repo->getVersionAtribute($app_id, $game_version);
    		if($version){
    			return response([
    				'app'		=> $app,
    				'version'	=> $version
	    		], 200);
    		}
    		return response([
    		    'status' => 404,
				'message' 	=> 'Version not found'
			], 200);
    	}
    	return response([
            'status' => 404,
			'message' 	=> 'Game not found'
		], 200);
    }

}
