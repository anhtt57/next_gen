<?php
/**
 * Created by PhpStorm.
 * User: Anhtt
 * Time: 4:37 AM
 */
namespace App\Helpers;

class CryptOpenssl{
    /**
     * @param $data
     * @return string
     */
    public static function Encrypt($data, $hash){
//        $key = md5($hash, TRUE);
//        $key .= substr($key,0,8);
        $encData = openssl_encrypt($data, 'DES-EDE3', $hash, OPENSSL_RAW_DATA);
        $encData = base64_encode($encData);
        return $encData;
    }
    /**
     * @param $data
     * @return string
     */
    public static function Decrypt($data, $hash){
//        $key = md5($hash,TRUE);
//        $key .= substr($key,0,8);
        $decData = openssl_decrypt($data, 'DES-EDE3', $hash, OPENSSL_RAW_DATA);
        $decData = base64_decode($decData);
        return $decData;
    }
}