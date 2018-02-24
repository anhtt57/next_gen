<?php

namespace App\Repositories\App;

use App\Models\App;
use App\Models\User;
use App\Models\WhitelistAccount;
use App\Repositories\AbstractRepository;

class AppRepository extends AbstractRepository implements AppRepositoryInterface
{

    /**
     * Instantiate a new repository instance.
     */

    const WHITELIST_LOGIN_ON = 1;
    const WHITELIST_LOGIN_OFF = 0;

    public function getModel()
    {
        return App::class;
    }

    public function getApps()
    {
        return App::orderBy('created_at')->paginate(App::PER_PAGE);
    }

    public function getAllApp()
    {
        return $this->getAll();
    }

    public function getCurrentApp($appId)
    {
        return App::find($appId)->toArray();
    }

    public function updateStatusWhitelist($appId)
    {
        $app = App::find($appId);
        $app->whitelist_login_on = $app->whitelist_login_on == AppRepository::WHITELIST_LOGIN_OFF ?
            $app->whitelist_login_on = AppRepository::WHITELIST_LOGIN_ON :
            $app->whitelist_login_on = AppRepository::WHITELIST_LOGIN_OFF;
        $app->save();
        return $app->toArray();
    }

    public function getAllUsers()
    {
        $user = User::all();
        if (!empty($user)) {
            $user = $user->toArray();
        } else {
            $user = [];
        }
        return $user;

    }

    public function getUsersWhiteList($appId)
    {
        return WhitelistAccount::where('app_id', $appId)->get();
    }

    public function addNewWhitelistLogin($userId, $appId)
    {
        $newAcc = new WhitelistAccount();
        $newAcc->user_id = $userId;
        $newAcc->app_id = $appId;
        $newAcc->save();
        return $newAcc;
    }
}
