<?php
/**
 * @author DucLV
 */
namespace App\Repositories\Version;

interface VersionRepositoryInterface 
{
    public function getVersionAtribute($app_id, $game_version);
    public function getSystemList();
    public function getSystemName();
    public function checkExist($app_id, $game_version, $operating_system, $version_id);
    public function prepareData($data);
    public function createOrUpdate($data, $id);
    public function initial();
}