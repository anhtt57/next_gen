<?php
namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\CMS\CMSController;
use App\Repositories\App;
use Illuminate\Support\Facades\Auth;

class PMHomeController extends CMSController {

    protected $app;

    public function __construct(Response $response, Request $request, App\AppRepositoryInterface $app)
    {
        parent::__construct($request, $response);
        $this->app = $app;
    }

    public function index() {
        $apps = $this->app->getAllApp();
        return view('fontend.home.home')->with('apps', $apps);
    }

    public function postLogin() {
        // Get input data
        $userLogin    = $this->request->input('loginuser', null);
        $password = $this->request->input('loginpw', null);
        //Auth::guard('web')->attempt(['username' => '', 'password' => ''])
        if(Auth::guard('webpay')->attempt(['email' => $userLogin, 'password' => $password])){
            //true
            return redirect()->refresh();
        } else if(Auth::guard('webpay')->attempt(['user_name' => $userLogin, 'password' => $password])) {
            return redirect()->route('PM_Home');
        } else {
            return redirect()->back()->with('error', 'Tài khoản hoặc mật khẩu sai')->withInput();
        }
    }

    public function getLogout() {
        Auth::guard('webpay')->logout();
        return redirect()->route('PM_Home');
    }

}
?>