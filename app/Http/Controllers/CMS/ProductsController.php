<?php

namespace App\Http\Controllers\CMS;

use App\Http\Requests\ProductRequest;
use App\Models\Product;
use App\Repositories\App\AppRepositoryInterface;
use App\Repositories\Product\ProductRepositoryInterface;
use App\Http\Controllers\Controller;
use DB;
use Illuminate\Http\Request;

class ProductsController extends Controller {

    protected $product;
    protected $appRepository;

    public  function __construct(ProductRepositoryInterface $product, AppRepositoryInterface $appRepository)
    {
//        $this->middleware('auth');
        $this->product = $product;
        $this->appRepository = $appRepository;
    }

    public function index (Request $request)
    {
        $data = $request->all();
        $listApp = $this->appRepository->getAllApp();
        if (isset($data['bundleId']) && $data['bundleId'] != "All") {
            $listProduct = $this->product->getAllProductWithGameCode($data['bundleId']);
        } else {
            $listProduct = $this->product->getAllProduct();
        }
        $content = array(
            'listProduct'  => $listProduct,
            'listApp' => $listApp
        );
        return view('cms.product.index')->with('content', $content);
    }

    public function getCreate ()
    {
        return view('cms.product.create');
    }

    public function postCreate (ProductRequest $request)
    {
        $data = $request->all();
        DB::beginTransaction();
        try {
            $this->product->create($data);
            DB::commit();
        } catch (\Exception $ex) {
            DB::rollBack();
            return redirect()->back()->with('error', $ex->getMessage())->withInput();
        }
        return redirect()->route('listProducts');
    }

    public function getProductDetail($productId) {
        $productDetail = $this->product->find($productId);
        if ($productDetail) {
            return view('cms.product.detail')->with('product', $productDetail);
        } else {
            return redirect()->route('listProducts');
        }
    }

    public function getProductEdit($productId) {
        $productDetail = $this->product->find($productId);
        if ($productDetail) {
            return view('cms.product.create')->with('product', $productDetail);
        } else {
            return redirect()->route('listProducts');
        }
    }

    public  function postEditProduct($productId, ProductRequest $request) {
        $allRequest = $request->all();
        $proId = $allRequest['id'];
        $product = $this->product->find($proId);
        if ($product) {
            DB::beginTransaction();
            try {
                $this->product->update($proId, $allRequest);
                DB::commit();
            } catch (\Exception $ex) {
                DB::rollBack();
                return redirect()->back()->with('error', $ex->getMessage())->withInput();
            }
            return redirect()->refresh()->with('success', 'Product has been update.')->withInput();
        } else {
            return redirect()->back()->with('error', 'Product not found')->withInput();
        }
    }

    public  function postDeleteProduct($productId) {
        if ($this->product->delete($productId)) {
            return redirect()->back()->with('success', 'Product has been removed')->withInput();
        } else {
            return redirect()->back()->with('error', 'Can not delete product.')->withInput();
        }
    }

}
?>