<?php

namespace App\Http\Controllers\CMS;

use App\Helpers\Functions;
use App\Http\Requests\AppRequest;
use App\Repositories\App\AppRepositoryInterface;
use App\Repositories\Product\ProductRepositoryInterface;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;

class AppsController extends Controller
{
    protected $appRepository;
    protected $product;

    public function __construct(AppRepositoryInterface $app, ProductRepositoryInterface $product)
    {
        $this->appRepository = $app;
        $this->product = $product;
    }

    public function index()
    {
        $listApps = $this->appRepository->getApps();
        return view('cms.app.index', compact('listApps'));
    }

    public function getAppDetail($appId)
    {
        $appDetail = $this->appRepository->find($appId);
        if ($appDetail) {
            return view('cms.app.detail')->with('appDetail', $appDetail);
        } else {
            return redirect()->route('listApps')->with('error', 'App not found')->withInput();
        }
    }

    public function getCreate()
    {
        return view('cms.app.create');
    }

    public function postCreate(AppRequest $request)
    {
        $data = $request->all();
        DB::beginTransaction();
        try {
            $app = $this->appRepository->create($data);
            $productsDefaultIos = Functions::createDefaultProductsIos($data['game_name']);
            $productsDefaultAndroid = Functions::createDefaultProductsAndroid($data['game_name']);
            $costDefaults = config('constants.COST_DEFAULT_USD');
            $exchangeRate = config('constants.EXCHANGE_RATE');
            $exchangeRateGameCoin = config('constants.EXCHANGE_RATE_GAME_COIN');
            foreach ($productsDefaultIos as $key => $product) {
                $newProduct = [];
                $newProduct['bundleId'] = $app->game_code;
                $newProduct['product_id_android'] = $productsDefaultAndroid[$key];
                $newProduct['product_id_ios'] = $product;
                $newProduct['product_name'] = str_replace(' ', '', $data['game_name'] . '_' . $costDefaults[$key]);
                $newProduct['unit_name'] = $data['currency_shortname'];
                $newProduct['usd_money'] = $costDefaults[$key];
                $newProduct['vnd_money'] = $costDefaults[$key] * $exchangeRate;
                $newProduct['game_money'] = $costDefaults[$key] * $exchangeRateGameCoin;
                $this->product->create($newProduct);
            }
            DB::commit();
        } catch (\Exception $ex) {
            DB::rollBack();
            return redirect()->back()->with('error', $ex->getMessage())->withInput();
        }
        return redirect()->route('listApps');
    }

    public function getEditApp($appId)
    {
        $appDetail = $this->appRepository->find($appId);
        if ($appDetail) {
            return view('cms.app.create')->with('appDetail', $appDetail);
        } else {
            return redirect()->route('listApps');
        }
    }

    public function postEditApp($appId, AppRequest $request)
    {
        /*
         * EDIT APP:
         * 1. Get APP with ID
         * 2. Update APP
         * 3. Check APP has changed bundleId
         * 4. If APP changed bundleId -> Need update product for app with new bundleId.
         * */
        $allRequest = $request->all();
        $appId = $allRequest['id'];
        $app = $this->appRepository->find($appId);
        $bundleIdOld = $app->game_code;
        if ($app) {
            DB::beginTransaction();
            try {
                $this->appRepository->update($appId, $allRequest);
                DB::commit();
            } catch (\Exception $ex) {
                DB::rollBack();
                return redirect()->back()->with('error', $ex->getMessage())->withInput();
            }
            //Check update list product of app.
            if ($bundleIdOld != $allRequest['game_code']) {
                $listProduct = $this->product->getAllProductWithGameCode($bundleIdOld);
                foreach ($listProduct as $obj) {
                    DB::beginTransaction();
                    $this->product->update($obj->id, ["bundleId" => $allRequest['game_code']]);
                    DB::commit();
                }
            }
            return redirect()->refresh()->with('success', 'App has been update.')->withInput();
        } else {
            return redirect()->back()->with('error', 'App not found')->withInput();
        }
    }


    public function postDeleteApp($appId)
    {
        $appDetail = $this->appRepository->find($appId);
        if ($appDetail) {
            if ($this->appRepository->delete($appDetail['id'])) {
                $listProduct = $this->product->getAllProductWithGameCode($appDetail['game_code']);
                foreach ($listProduct as $product) {
                    $this->product->delete($product['id']);
                }
                return redirect()->back()->with('success', 'App has been removed')->withInput();
            } else {
                return redirect()->back()->with('error', 'Can not found App.')->withInput();
            }
        } else {
            return redirect()->back()->with('error', 'Can not found App.')->withInput();
        }
    }

    public function getAppsAttributes(Request $request)
    {
        $start = $request->input('start');
        $length = $request->input('length');
        $listApps = $this->appRepository->getApps();
        $apps = $listApps->items();
        $total = $listApps->total();
        $returnArr = [];
        if (!empty($apps)) {
            foreach ($apps as $key => $value) {
                $temp = [];
                $urlDetail = route('getAppDetail', $value->id);
                $temp['game_name'] = '<a href="' . $urlDetail . '">' . $value->game_name . '</a>';
                $temp['game_code'] = $value->game_code;
                $temp['ios_version'] = $value->ios_version;
                $temp['android_version'] = $value->android_version;
                $temp['currency_fullname'] = $value->currency_fullname;
                $temp['monthly_card_fullname'] = $value->monthly_card_fullname;
                $url = url("version?app_id=" . $value->id);
                $urlEdit = route('getEditApp', $value->id);
                $urlWhiteListLogin = route('whiteListLogin', $value->id);
                $urlDelete = route('postDeleteApp', $value->id);
                $appId = $value->id;

                $temp['action'] = '<a href="' . $url . '" class="btn btn-sm btn-primary btn-flat">Version</a>
                                        <a href="' . $urlWhiteListLogin . '" class="btn btn-sm btn-default btn-flat">WL Login</a>
                                        <a href="' . $urlEdit . '" class="btn btn-sm btn-info btn-flat">Edit</a>
                                        <button type="button" class="btn btn-sm btn-danger btn-flat" data-toggle="modal"
                                                data-target="#modalDelete-' . $value->id . '">Delete
                                        </button>
                                        <!-- popup -->
                                        <div id="modalDelete-' . $value->id . '" class="modal fade" role="dialog">
                                            <div class="modal-dialog">
                                                <!-- Modal content-->
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <button type="button" class="close"
                                                                data-dismiss="modal">&times;</button>
                                                        <h4 class="modal-title">' . $value->game_name . '</h4>
                                                    </div>
                                                    <div class="modal-body">
                                                        <p>Do you want delete app?</p>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <input type="hidden" name="id" value="' . $value->id . '">
                                                        <button type="button"
                                                                data-url="' . $urlDelete . '"
                                                                id="submit" class="btn btn-danger confirm-delete"
                                                                style="margin-right: 5px;">Delete
                                                        </button>
                                                        <button type="button" class="btn btn-default"
                                                                data-dismiss="modal" style="margin-right: 15px;">Close
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        ';
                $returnArr[] = $temp;
            }
        }
        return response([
            "draw" => intval($request->input('draw')),
            "recordsTotal" => intval($total),
            "recordsFiltered" => intval($total),
            "data" => $returnArr
        ]);
    }

    public function getWhiteListLogin($appId)
    {
        $app = $this->appRepository->getCurrentApp($appId);
        $listUser = $this->appRepository->getAllUsers();
        $listUserWhiteList = $this->appRepository->getUsersWhiteList($appId);
        $temp = [];
        $appUserInWL = [];
        if (!empty($listUserWhiteList)) {
            foreach ($listUserWhiteList->toArray() as $key => $value) {
                $temp[$value['user_id']] = $value;
            }
            foreach ($listUser as $key => $value) {
                if (isset($temp[$value['id']])) {
                    $appUserInWL[] = $value;
                    unset($listUser[$key]);
                }
            }
        }
        return view('cms.whitelist_login.index', compact('app', 'listUser', 'appUserInWL'));
    }

    public function changeStatusWhiteListLogin($appId)
    {
        $app = $this->appRepository->updateStatusWhitelist($appId);
        return $app;
    }

    public function addWhitelistAccount(Request $request)
    {
        $userId = $request['user_id'];
        $appId = $request['app_id'];
        $newAcc = $this->appRepository->addNewWhitelistLogin($userId, $appId);
        return $newAcc;
    }
}
