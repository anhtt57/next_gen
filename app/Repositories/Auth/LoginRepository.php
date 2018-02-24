<?php
namespace App\Repositories\Auth;

use App\Models\User;
use App\Repositories\AbstractRepository;
use JWTAuth;
use ReceiptValidator\iTunes\Validator as iTunesValidator;
use ReceiptValidator\GooglePlay\Validator as PlayValidator;

class LoginRepository extends AbstractRepository implements LoginRepositoryInterface
{

    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return User::class;
    }

    public function findUserByToken($token)
    {
        return JWTAuth::toUser($token);
    }

    public function findUser($user_name, $email)
    {
        $where = ['email' => $email, 'user_name' => $user_name];
        return $this->findItemBy($where);
    }

    public function checkUnique($user_name)
    {
        $user = User::where('user_name', '=', $user_name)
            ->whereNull('facebook_id')
            ->first();
        if (empty($user))
            return true;
        return false;
    }

    public function checkUserByDeviceId($deviceId)
    {
        return User::where('device_id', $deviceId)->first();
    }

    public function removeAllDeviceId($deviceId)
    {
        return User::where('device_id',$deviceId)
            ->update(['device_id' => null]);

    }
}