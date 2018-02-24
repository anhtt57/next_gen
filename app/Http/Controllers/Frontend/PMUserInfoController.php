<?php
namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Repositories\Auth\LoginRepositoryInterface;
use Illuminate\Http\Request;

class PMUserInfoController extends Controller
{
    private $user;

    public function __construct(LoginRepositoryInterface $user)
    {
        $this->user = $user;
    }

    public function index($userId)
    {
        $currentUser = $this->user->find($userId);
        $dob = $currentUser->dob;
        $date = date('d', strtotime($dob));
        $month = date('m', strtotime($dob));
        $year = date('Y', strtotime($dob));
        return view('fontend.userinfo.userinfo', compact('currentUser', 'date', 'month', 'year'));
    }

    public function updateUserInfo(Request $request)
    {
        $data = $request->all();
        if(isset($data['email'])) {
            if(!$this->checkEmailUnique($data['email'])) {
                return redirect()->back()->withErrors('Email này đã tồn tại. Vui lòng thử lại');
            }
        }
        if ($data['date'] == 0 || $data['month'] == 0 || $data['year'] == 0 || checkdate($data['month'], $data['date'], $data['year']) == false) {
            return redirect()->back()->withErrors("Định dạng ngày không đúng. Vui lòng thử lại")->withInput();
        }
        $dobRequest = $data['year'] . '-' . $data['month'] . '-' . $data['date'];
        $data['dob'] = date('Y-m-d', strtotime($dobRequest));
        $this->user->update($data['id'], $data);
        return redirect()->back();
    }

    private function checkEmailUnique($email)
    {
        $user = $this->user->findItemBy(['email' => $email]);
        if(!empty($user))
            return false;
        return true;
    }
}

?>