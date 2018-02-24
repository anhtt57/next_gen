<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Requests\PaymentRequest;
use App\Repositories\Auth\LoginRepositoryInterface;
use App\Repositories\Payment\PaymentRepositoryInterface;
use App\Repositories\Product\ProductRepositoryInterface;
use Validator;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use App\Helpers\Functions;
use JWTAuth;

class PaymentController extends ApiController
{
    private $finVietUser;
    private $finVietPass;
    private $findVietSecretKey;
    private $findVietHashKey;
    private $user;
    private $payment;
    private $product;
    public function __construct(Response $response,
                                Request $request,
                                LoginRepositoryInterface $user,
                                PaymentRepositoryInterface $payment,
                                ProductRepositoryInterface $product)
    {
        parent::__construct($response, $request);
        $this->user = $user;
        $this->payment = $payment;
        $this->product = $product;
        $this->finVietUser = !empty(env('USERNAME_FINDVIET')) ? env('USERNAME_FINDVIET') : config('constants.USERNAME_FINDVIET');
        $this->findVietSecretKey = !empty(env('SECRETKEY_FINDVIET')) ? env('SECRETKEY_FINDVIET') : config('constants.SECRETKEY_FINDVIET');
        $this->findVietHashKey = !empty(env('HASHKEY_FINDVIET')) ? env('HASHKEY_FINDVIET') : config('constants.HASHKEY_FINDVIET');
        $passUnHash = !empty(env('PASSWORD_FINDVIET')) ? env('PASSWORD_FINDVIET') : config('constants.PASSWORD_FINDVIET');
        $this->finVietPass = Functions::encryptTripleDes($passUnHash, $this->findVietSecretKey);
    }


    /**
     * payment for item
     * @return Response
     */
    public function postPaymentByCard(PaymentRequest $request)
    {
        $user = $this->user->findUserByToken($request->header('x-token'));
        if (isset($request->validator) && $request->validator->fails()) {
            return response([
                'status' => 402,
                'message' => $request->validator->messages()->first(),
                'data' => (object)[]
            ],200);
        }
        if (!Functions::checkTypeCardInAllow($request['card_type'])) {
            return response([
                'status' => 402,
                'message' => 'card_type not true',
                'data' => (object)[]
            ],200);
        }

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
//        $data['amount'] = isset($request['amount']) ? $request['amount'] : 200;
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
                return response([
                    'status' => 200,
                    'message' => 'success',
                    'data' => ['amount' => $result['cardamount']]
                ],200);
            }
            return response([
                'status' => 502,
                'message' => $result['message'],
                'data' => (object)[]
            ],200);
        } else {
            return response([
                'status' => 400,
                'message' => 'errors when connect finViet',
                'data' => (object)[]
            ],200);
        }

    }

    public function postPaymentByInApp(Request $request)
    {
        $data = $request->all();
        $device = isset($data['device_type']) ? $data['device_type'] : 'ios';
        if($device == 'android') {
            $validator = Validator::make($data, [
                'device_type' => 'required',
                'product_id' => 'required',
                'package_name' => 'required',
                'token' => 'required',
                'order_id' => 'required'
            ]);
        } else {
            $validator = Validator::make($data, [
                'device_type' => 'required',
                'product_id' => 'required',
                'receipt_id' => 'required',
                'receipt_json' => 'required'

            ]);
        }
        if ($validator->fails()) {
            return response([
                'status' => 404,
                'message' => $validator->errors(),
                'data' => []
            ], 404);
        }
        $user = $this->user->findUserByToken($request->header('x-token'));
        $data['user'] = $user->toArray();
        $query = ($device == 'ios') ? ['product_id_ios' => $data['product_id']] : ['product_id_android' => $data['product_id']];
        $product = $this->product->findItemBy($query);
        if(empty($product)){
            return response([
                'status' => 404,
                'message' => 'Product not found',
                'data' => null
            ], 404);
        }
        $data['product_info'] = $product->toArray();
        if($device == 'ios') {
            $result = $this->payment->validateReceiptIos($data);
        } else {
            $result = $this->payment->validateReceiptAndroid($data);
        }
        return response([
            'status' => $result['status'],
            'message' => $result['message'],
            'data' => $result['data']
        ],$result['status']);
    }

}
