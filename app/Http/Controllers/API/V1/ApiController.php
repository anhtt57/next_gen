<?php

namespace App\Http\Controllers\API\V1;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller as BaseController;

class ApiController extends BaseController
{
    /**
     * @param Response
     */
    public function __construct(Response $response, Request $request)
    {
        $this->response = $response;
        $this->request = $request;
    }
}
