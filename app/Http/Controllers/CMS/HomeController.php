<?php

namespace App\Http\Controllers\CMS;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

class HomeController extends CMSController
{
    /**
     * @param Request
     * @param Response
     */
    public function __construct(Request $request, Response $response)
    {
        parent::__construct($request, $response);
    }

    public function index(){
    	return view('cms.home.index');
    }
}
