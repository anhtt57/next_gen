<?php

namespace App\Repositories\Auth;

interface LoginRepositoryInterface
{
    /**
     * find user by jwt token
     * @return mixed
     */
    public function findUserByToken($token);

    public function findUser($user_name, $email);

    public function checkUnique($user_name);

    public function checkUserByDeviceId($deviceId);

    public function removeAllDeviceId($deviceId);
}