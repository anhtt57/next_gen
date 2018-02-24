<?php

namespace App\Helpers;

use GuzzleHttp\Client;
use App\Helpers\CryptOpenssl;

class Functions
{
    public static function encryptTripleDes($data, $secret)
    {
        return CryptOpenssl::Encrypt($data, $secret);
//        $blockSize = mcrypt_get_block_size('tripledes', 'ecb');
//        $len = strlen($data);
//        $pad = $blockSize - ($len % $blockSize);
//        $data .= str_repeat(chr($pad), $pad);
//
//        //Encrypt data
//        $encData = mcrypt_encrypt('tripledes', $secret, $data, 'ecb');
//
//        dd(base64_encode($encData));

    }

    public static function decryptTripleDes($data, $secret)
    {
        return CryptOpenssl::Decrypt($data, $secret);
    }

    public static function generateRandomString($length = 10)
    {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }

    public static function checkTypeCardInAllow($requestCardType)
    {
        $arrs = config('constants.CART_TYPE');
        if (!in_array($requestCardType, $arrs))
            return false;
        return true;
    }

    public static function createChecksumHash($data = [])
    {
        $strHash = '';
        foreach ($data as $value) {
            $strHash .= $value;
        }
        $strHash .= config('constants.HASHKEY_FINDVIET');
        return base64_encode(sha1($strHash, true));
    }

    public static function createRequestCardPayment($data = [])
    {
        $client = new \Goutte\Client();
        $apiUrl = !empty(env('FINDVIET_URL')) ? env('FINDVIET_URL') : config('constants.FINDVIET_URL');
        $client->request('POST', $apiUrl, array(), array(), array('HTTP_CONTENT_TYPE' => 'application/json'), json_encode($data));
        $response = $client->getResponse();
        $json = $response->getContent();
        $content = json_decode($json, true);
        return $content;
    }

    public static function createDefaultProductsAndroid($gameName)
    {
        $companyName = config('constants.COMPANY_NAME');
        $costDefaults = config('constants.COST_DEFAULT_USD');
        $result = [];
        foreach ($costDefaults as $cost) {
            $temp = (string)$cost;
            $temp = str_replace('.', ',', $temp);
            $str = $gameName . '.' . $companyName . '.' . 'mobile' . $temp;
            $result[] = $str;
        }
        return $result;
    }

    public static function createDefaultProductsIos($gameName)
    {
        $companyName = config('constants.COMPANY_NAME');
        $costDefaults = config('constants.COST_DEFAULT_USD');
        $result = [];
        foreach ($costDefaults as $cost) {
            $temp = (string)$cost;
            $temp = str_replace('.', ',', $temp);
            $str = 'com' . '.' . $companyName . '.' . $gameName . '.' . $temp;
            $result[] = $str;
        }
        return $result;
    }
}