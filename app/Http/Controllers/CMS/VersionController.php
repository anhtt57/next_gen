<?php
/**
 * @author DucLV
 */
namespace App\Http\Controllers\CMS;

use Illuminate\Http\Request;
use App\Http\Requests\VersionRequest;
use Illuminate\Http\Response;
use App\Repositories\Version\VersionRepositoryInterface;
use App\Repositories\App\AppRepositoryInterface;

class VersionController extends CMSController
{
    protected $version_repo;
    protected $app_repo;

    public function __construct(Request $request, Response $response, VersionRepositoryInterface $version_repo, AppRepositoryInterface $app_repo){
        parent::__construct($request, $response);

        $this->version_repo = $version_repo;
        $this->app_repo     = $app_repo;
    }

    public function getRequestParam($field_name){
        return $this->request->{$field_name};
    }

    public function getAppFromAppId(){
        $app_id     = $this->getRequestParam('app_id');
        $app        = $this->app_repo->find($app_id);
        return $app;
    }

    public function index(){
        $app = $this->getAppFromAppId();
        if($app){      
            $versions       = $app->versions;  
            $system_list    = $this->version_repo->getSystemList();
            $title          = 'Quản lý version cho: '.$app->game_name;
            $source         = 'version';
            $header         = array(
                // 'app_name'                  => array('title' => 'App', 'control' => 'func', 'func' => 'app', 'param' => 'game_name'),
                'system_name'               => array('title' => 'OS', 'control' => 'func', 'func' => 'getSystemName'),
                'bundle_id'                 => 'Bundler ID',
                'game_version'              => 'Version',
                'prevent_login'             => array('title' => 'Prevent Login', 'control' =>'checkbox'),
                'message'                   => 'Message',
                'prevent_in_app_purchase'   => array('title' => 'Prevent In-app Purcharse', 'control' =>'checkbox'),
                'prevent_normal_purchase'   => array('title' => 'Prevent Normal Purchase', 'control' =>'checkbox'),
                'prevent_monthly_purchase'  => array('title' => 'Prevent Monthly Purchase', 'control' =>'checkbox'),
            ); 
            $params = '?app_id='.$app->id;
            $action = ['create', 'edit', 'delete'];
            return view('cms.version.index', compact(['header','versions', 'title', 'source', 'params', 'system_list', 'action']));
        }
    	return redirect()->route('listApps');
    }

    public function create(){
        $app = $this->getAppFromAppId();
        if($app){ 
            $system_list    = $this->version_repo->getSystemList();
            $version        = $this->version_repo->initial();
            $method         = 'POST';
            return view('cms.version._form', compact(['method', 'version', 'app_id', 'system_list']))->render();
        }
        return response(['message' => 'App is not exist'], 404);
    }

    public function store(VersionRequest $version_req){
        $app    = $this->getAppFromAppId();
        $data   = $version_req->all();
        if (isset($version_req->validator) && $version_req->validator->fails()) {
            return response([
                'status' => 'error',
                'message' => $version_req->validator->messages()->first()
            ],200);
        }
        if(!$this->version_repo->checkExist($app->id, $data['game_version'], $data['operating_system'], -1)){
            if($this->version_repo->createOrUpdate($data))
                return response([
                    'status'    => 'ok',
                    'message'   => 'Create version successful'
                ]);
            return response([
                'status'    => 'error',
                'message'   => 'Can not create version'
            ]);
        }
        return response([
            'status'    => 'error',
            'message'   => 'Version existed'
        ]);
    }

    public function edit($id){
        $app = $this->getAppFromAppId();
        if($app){
            $version = $this->version_repo->find($id);
            if($version){
                $system_list    = $this->version_repo->getSystemList();
                $method         = 'PUT';
                return view('cms.version._form', compact(['method', 'version', 'app_id', 'system_list']))->render();
            }
            return response(['message' => 'Version is not exist'], 403);
        }
        return response(['message' => 'App is not exist'], 403);
    }

    public function update($id, VersionRequest $version_req){
        $app    = $this->getAppFromAppId();
        $data   = $version_req->all();
        if (isset($version_req->validator) && $version_req->validator->fails()) {
            return response([
                'status' => 'error',
                'message' => $version_req->validator->messages()->first()
            ],200);
        }       
        if(!$this->version_repo->checkExist($app->id, $data['game_version'], $data['operating_system'], $id)){
            if($this->version_repo->createOrUpdate($data, $id))
                return response([
                    'status'    => 'ok',
                    'message'   => 'Update version successful'
                ]);
            return response([
                'status'    => 'error',
                'message'   => 'Can not update version'
            ]);
        }
        return response([
            'status'    => 'error',
            'message'   => 'Version existed'
        ]);
    }

    public function destroy($id){
        $this->version_repo->delete($id);
        return redirect()->back();
    }

    public function ajaxChangeVersionData(){
        $val    = $this->getRequestParam('val');
        $field  = $this->getRequestParam('field');
        $row_id = $this->getRequestParam('row_id');
        $data   = [$field => $val == 'true' ? 1 : 0];
        if($this->version_repo->update($row_id, $data)){
            return response(['status' => 'ok', 'message' => 'Update state successful!']);
        }
        return response(['status' => 'error', 'message' => 'Update state false!']);
    }
}
