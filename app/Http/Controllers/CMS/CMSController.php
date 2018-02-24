<?php

namespace App\Http\Controllers\CMS;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller as BaseController;

class CMSController extends BaseController
{
    /**
     * @param Request
     * @param Response
     */
    public function __construct(Request $request, Response $response)
    {
    	// $this->middleware('auth');
        $this->response = $response;
        $this->request = $request;
    }
}
