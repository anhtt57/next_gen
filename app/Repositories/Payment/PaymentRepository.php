<?php

namespace App\Repositories\Payment;

use App\Models\Payment;
use App\Repositories\AbstractRepository;
use ReceiptValidator\iTunes\Validator as iTunesValidator;
use DB;

class PaymentRepository extends AbstractRepository implements PaymentRepositoryInterface
{

    /**
     * Instantiate a new repository instance.
     */
    const CARD_TYPE = 0;
    const IN_APP_TYPE = 1;

    public function getModel()
    {
        return Payment::class;
    }

    public function getCardType()
    {
        return PaymentRepository::CARD_TYPE;
    }

    public function getInAppType()
    {
        return PaymentRepository::IN_APP_TYPE;
    }

    public function createPaymentAndLog(array $attributes, array $logAttributes)
    {
        DB::beginTransaction();
        try {
            $model = $this->getModel();
            $newPayment = $model::create($attributes);
            $log = $newPayment->log()->create($logAttributes);
            DB::commit();
            $newPayment->payments_logs = $log;
            return $newPayment;
        } catch (\Exception $ex) {
            DB::rollBack();
            dd ($ex);
        }
    }

    public function validateReceiptIos($data = [])
    {
        $validator = new iTunesValidator(iTunesValidator::ENDPOINT_SANDBOX);
//        $validator = new iTunesValidator(iTunesValidator::ENDPOINT_PRODUCTION);
        $receiptBase64Data = $data['receipt_json'];

        try {
            $response = $validator->setReceiptData($receiptBase64Data)->validate();
            // $sharedSecret = '1234...'; // Generated in iTunes Connect's In-App Purchase menu
            // $response = $validator->setSharedSecret($sharedSecret)->setReceiptData($receiptBase64Data)->validate(); // use setSharedSecret() if for recurring subscriptions
        } catch (Exception $e) {
            return ['status' => 400, 'message' => $e->getMessage(), 'data' => []];
        }

        if ($response->isValid()) {
            $saveData = $this->saveInAppReceiptIos($data);
            return ['status' => 200, 'message' => 'success', 'data' => $saveData];
        } else {
            return ['status' => 400, 'message' => 'receipt is not valid. Receipt result code = ' . $response->getResultCode(),  'data' => []];
        }
    }

    public function validateReceiptAndroid($data = [])
    {
        $fileUrl = public_path('files/KNISDK-0ea439b2fe34.json');
        $googleClient = new \Google_Client();
        $googleClient->setScopes([\Google_Service_AndroidPublisher::ANDROIDPUBLISHER]);
        $googleClient->setApplicationName('KNISDK');
        $googleClient->setAuthConfig($fileUrl);
        $googleAndroidPublisher = new \Google_Service_AndroidPublisher($googleClient);
        $validator = new \ReceiptValidator\GooglePlay\Validator($googleAndroidPublisher);
        try {
            $response = $validator->setPackageName($data['package_name'])
                ->setProductId($data['product_id'])
                ->setPurchaseToken($data['token'])
                ->validatePurchase();
            $result = (array)$response;
            if (count($result) == 2) {
                $resultPaymentLog = $this->saveInAppReceiptAndroid($data);
                return ['status' => 200, 'message' => 'success', 'data' => $resultPaymentLog];
//                return ['status' => 400, 'message' => 'errors when save log', 'data' => []];
            }
        } catch (\Exception $e) {
            return ['status' => 400, 'message' => 'errors when validate with google apis', 'data' => []];
        }
    }

    private function saveInAppReceiptAndroid ($data = [])
    {
        $product = $data['product_info'];
        $payment = [];
        $payment['user_id'] = $data['user']['id'];
        $payment['method_type'] = $this->getInAppType();
        $payment['product_id'] = $product['id'];
        $payment['android_receipt_id'] = $data['order_id'];

        $product['receipt_id'] = $data['order_id'];
        $product['receipt_json'] = $data['token'];
        return $this->createPaymentAndLog($payment, $product);
    }

    private function saveInAppReceiptIos ($data = [])
    {
        $product = $data['product_info'];
        $payment = [];
        $payment['user_id'] = $data['user']['id'];
        $payment['method_type'] = $this->getInAppType();
        $payment['product_id'] = $product['id'];
        $payment['ios_receipt_id'] = $data['order_id'];

        $product['receipt_id'] = $data['order_id'];
        $product['receipt_json'] = $data['receipt_json'];
        return $this->createPaymentAndLog($payment, $product);
    }
}
