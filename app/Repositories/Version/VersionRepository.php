<?php
/**
 * @author DucLV
 */
namespace App\Repositories\Version;

use App\Models\Version;
use App\Repositories\AbstractRepository;
use DB;

class VersionRepository extends AbstractRepository implements VersionRepositoryInterface
{

    /**
     * get model
     * @return class
     */
    public function getModel()
    {
        return Version::class;
    }

    public function getVersionAtribute($app_id, $game_version){
    	$where = array(
    		'app_id' => $app_id,
    		'game_version' => $game_version
    	);
    	return $this->findItemBy($where);
    }

    public function getSystemList(){
        return $this->_model->getSystemList();
    }

    public function getSystemName(){
        return $this->_model->getSystemName();
    }

    public function checkExist($app_id, $game_version, $operating_system, $version_id){
        $where = array(
            'app_id'            => $app_id,
            'game_version'      => $game_version,
            'operating_system'  => $operating_system
        );
        return $this->_model->where($where)->where('id', '<>', $version_id)->first();
    }

    public function prepareData($pre_data){
        $data = $pre_data;
        $data['prevent_login']              = isset($data['prevent_login']) ? 1 : 0;
        $data['prevent_in_app_purchase']    = isset($data['prevent_in_app_purchase']) ? 1 : 0;
        $data['prevent_normal_purchase']    = isset($data['prevent_normal_purchase']) ? 1 : 0;
        $data['prevent_monthly_purchase']   = isset($data['prevent_monthly_purchase']) ? 1 : 0;
        return $data;
    }

    public function createOrUpdate($pre_data, $id = -1){
        $data = $this->prepareData($pre_data);

        // check id existing or not
        $model = $this->find($id);
        DB::beginTransaction();
        try
        {
            // if not existing insert new record
            if (is_null($model))
            {
                $model = $this->_model->newInstance($data);
                $model->save();
            }
            else
            {            
                $model = $model->update($data);
            }
            DB::commit();
            return $model;
        }
        catch (Exception $e)
        {
            DB::rollBack();
            return redirect('/');
        }
        return false;
    }

    public function initial(){
        return array('app_id' => 0, 'game_version' => '', 'bundle_id' => '', 'operating_system' => 1, 'prevent_login' => 0, 'prevent_in_app_purchase' => 0, 'prevent_normal_purchase' => 0, 'prevent_monthly_purchase' => 0, 'message' => '');
    }

}