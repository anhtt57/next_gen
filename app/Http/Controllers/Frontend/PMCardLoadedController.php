<?php
namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\CMS\CMSController;
use App\Repositories\App\AppRepositoryInterface;
use App\Repositories\Payment\PaymentRepositoryInterface;
use App\Repositories\Product\ProductRepositoryInterface;
use App\Helpers\Functions;
use App\Http\Requests\PaymentRequest;

class PMCardLoadedController  extends CMSController {

    protected $app;
    private $finVietUser;
    private $finVietPass;
    private $findVietSecretKey;
    private $findVietHashKey;
    private $payment;
    private $product;

    public function __construct(Response $response, Request $request,
                                AppRepositoryInterface $app,
                                PaymentRepositoryInterface $payment,
                                ProductRepositoryInterface $product)
    {
        parent::__construct($request, $response);
        $this->app = $app;
        $this->payment = $payment;
        $this->product = $product;
        $this->finVietUser = !empty(env('USERNAME_FINDVIET')) ? env('USERNAME_FINDVIET') : config('constants.USERNAME_FINDVIET');
        $this->findVietSecretKey = !empty(env('SECRETKEY_FINDVIET')) ? env('SECRETKEY_FINDVIET') : config('constants.SECRETKEY_FINDVIET');
        $this->findVietHashKey = !empty(env('HASHKEY_FINDVIET')) ? env('HASHKEY_FINDVIET') : config('constants.HASHKEY_FINDVIET');
        $passUnHash = !empty(env('PASSWORD_FINDVIET')) ? env('PASSWORD_FINDVIET') : config('constants.PASSWORD_FINDVIET');
        $this->finVietPass = Functions::encryptTripleDes($passUnHash, $this->findVietSecretKey);
    }

    public function index($appId) {
        if (!Auth::guard('webpay')->check()) {
            return redirect()->route('PM_Home');
        }
        $app = $this->app->find($appId);
        if ($app) {
            return view('fontend.cardloader.cardloader')->with('app', $app);
        } else {
            return redirect()->back();
        }
    }

    public function paymentCard($appId, PaymentRequest $request) {
        $user = Auth::guard('webpay')->user();
        if (isset($request->validator) && $request->validator->fails()) {
            return redirect()->back()->with('error', $request->validator->messages()->first())->withInput();
        }
        if (!Functions::checkTypeCardInAllow($request['card_type'])) {
            return redirect()->back()->with('error', 'card_type not true')->withInput();
        }
        //Handle payment
        $currentUser = $user->id;
        $randomReqid = strtotime('now').Functions::generateRandomString();
        $data = [];
        $data['username'] = !empty(env('USERNAME_FINDVIET')) ? env('USERNAME_FINDVIET') : config('constants.USERNAME_FINDVIET');
        $data['password'] = $this->finVietPass ? $this->finVietPass : null;
        $data['reqid'] = $randomReqid;
        $data['reqtime'] = date('YmdHis');
        $data['cardserial'] = $request['card_serial'];
        $data['cardcode'] = Functions::encryptTripleDes($request['card_code'], $this->findVietSecretKey);
        $data['cardtype'] = $request['card_type'];
        $data['account'] = $currentUser;
        $data['checksum'] = Functions::createChecksumHash($data);
        $result = Functions::createRequestCardPayment($data);
        if(isset($result['code'])) {
            if($result['code'] == 0) {
                $payment = [];
                $payment['user_id'] = $currentUser;
                $payment['method_type'] = $this->payment->getCardType();
                $payment['reqid_finviet'] = $result['reqid'];
                $payment['transid_finviet'] = $result['transid'];
                $paymentLog = $data;
                $paymentLog['vnd_money'] = $result['cardamount'];
                $resultLog = $this->payment->createPaymentAndLog($payment, $paymentLog);
                return redirect()->back()->with('success', 'Thanh toán thành công!')->withInput();
            }
            return redirect()->back()->with('error', $result['message'])->withInput();
        } else {
            return redirect()->back()->with('error', 'Đã xẩy ra lỗi khi thanh toán.')->withInput();
        }

    }

}
?>