<?php
namespace App\Repositories\Payment;

interface PaymentRepositoryInterface
{

    public function validateReceiptIos($data = []);

    public function validateReceiptAndroid($data = []);
}