<?php
namespace App\Repositories\App;

interface AppRepositoryInterface
{
	public function getApps();
    public function getAllApp();
    public function getCurrentApp($appId);
    public function updateStatusWhitelist($appId);
    public function getAllUsers();
    public function getUsersWhiteList($gameCode);
    public function addNewWhitelistLogin($userId, $appId);
}