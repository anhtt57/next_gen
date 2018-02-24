<?php

namespace App\Http\Controllers\API\V1;

use App\Repositories\App\AppRepositoryInterface;

class AppController extends APIController
{
    /**
     * return version info
     * @return Response
     */
    protected $app_repo;

    public function __construct(AppRepositoryInterface $app_repo){
    	parent::__construct();
    	$this->app_repo = $app_repo;
    }

    public function initial()
    {
    	
    }

}
