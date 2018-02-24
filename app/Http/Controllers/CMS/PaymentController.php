<?php
/**
 * @author DucLV
 */
namespace App\Http\Controllers\CMS;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Repositories\Payment\PaymentRepositoryInterface;

class PaymentController extends CMSController
{
    protected $payment_repo;

    public function __construct(Request $request, Response $response, PaymentRepositoryInterface $payment_repo){
        parent::__construct($request, $response);

        $this->payment_repo = $payment_repo;
    }

    public function index(){
        $payments = $this->payment_repo->getAll();       
        $title          = 'Payments manager';
        $source         = 'payment';
        $header         = array(
            'user_name'                  => array('title' => 'Account', 'control' => 'func', 'func' => 'user', 'param' => 'user_name'),
            'method'               		 => array('title' => 'Payment Method', 'control' => 'func', 'func' => 'getMethodName'),
            'product_name'               => array('title' => 'Product', 'control' => 'func', 'func' => 'getProductName'),
            'card_type'              	 => array('title' => 'Card Type', 'control' => 'func', 'func' => 'getCardName'),
            'vnd_money'              	 => array('title' => 'Money(vnd)', 'control' => 'func', 'func' => 'log', 'param' => 'vnd_money'),
            'created_at'              	 => 'Pay Time',
        ); 
        // $action = ['delete'];
        return view('cms.payment.index', compact(['header','payments', 'title', 'source']));
    }
   
}
