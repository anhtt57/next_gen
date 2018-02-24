<?php 
namespace App\Http\Controllers\CMS;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class AdminController extends CMSController
{

    public function __construct(Request $request, Response $response){
        parent::__construct($request, $response);
    }

    /**
     * Display login form
     * @return view
     */
    public function getLogin(){
        return view('auth.login');
    }

    /**
     * Attempt to login user
     * @return redirect
     */
    public function postLogin(){
        // Get input data
        $email    = $this->request->input('email', null);
        $password = $this->request->input('password', null);

        // Attempt login with input data
        $result = Auth::attempt(array('email' => $email, 'password' => $password));
        
        // If I var_dump($result) at this point it returns true

        return redirect('check-user');
    }

    public function getCheckUser(){
        var_dump(Auth::check()); // This returns false
        var_dump(Auth::user()); // This returns null
        var_dump($this->request->session()->all()); // This contains the 'login_web_XXXXX' variable
    }
}