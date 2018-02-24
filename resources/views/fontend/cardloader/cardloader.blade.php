@extends('fontend.layouts.template')
@section('content')
    <div class="napcard">
        <div class="title-game">
            <img src="{{$app->app_image}}">
            <h2 class="title-game-text">{{$app->game_name}}</h2>
        </div>
        <ul class="the_game lg-block-grid-6 md-block-grid-4 sm-block-grid-3 xs-block-grid-2">
            <li class="active" product="AIRPAY">
                <a href="javascript:void(0)">
                    <img src="{{asset('files/images/icon_vn_airpay_w.png')}}">
                    <span class="discount">Giảm 10%</span>
                </a>
            </li>
            <li product="ATM">
                <a href="javascript:void(0)">
                    <img src="{{asset('files/images/icon_atm_w.png')}}">
                    {{--<span class="discount"></span>--}}
                </a>
            </li>
            <li product="VTE">
                <a href="javascript:void(0)">
                    <img src="{{asset('files/images/icon_viettel_w.png')}}">
                    {{--<span class="discount"></span>--}}
                </a>
            </li>
            <li product="MBF">
                <a href="javascript:void(0)">
                    <img src="{{asset('files/images/icon_mobifone_w.png')}}">
                    {{--<span class="discount"></span>--}}
                </a>
            </li>
            <li product="VNP">
                <a href="javascript:void(0)">
                    <img src="{{asset('files/images/icon_vinaphone_w.png')}}">
                    {{--<span class="discount"></span>--}}
                </a>
            </li>
            <li product="VNM">
                <a href="javascript:void(0)">
                    <img src="{{asset('files/images/logo_Vietnamobile.png')}}">
                    {{--<span class="discount"></span>--}}
                </a>
            </li>
        </ul>

        @if (session()->has('error'))
            <div class="alert alert-danger">{{ session()->get('error') }}</div>
        @endif
        @if (session()->has('success'))
            <div class="alert alert-success">{{ session()->get('success') }}</div>
        @endif

        <div class="bank">
            <img src="{{asset('files/images/icon-atm.png')}}"> <span class="bank-text">AIRPAY</span>
        </div>

        <div class="card-payment col-md-12 hidden">
            <div class="col-md-6 col-xs-12">
                <div class="money">
                    <ul class="money-list">
                        <li class="head">
                            <span class="col1">Giá</span><span class="col2">Thêm điểm</span>
                        </li>
                        <li >
                            <p>
                                <span class="col1">20.000VNĐ</span>
                                <span class="col2">Điểmx20</span>
                            </p>
                        </li>
                        <li >
                            <p>
                                <span class="col1">50.000VNĐ</span>
                                <span class="col2">Điểmx50</span>
                            </p>
                        </li>
                        <li >
                            <p>
                                <span class="col1">100.000VNĐ</span>
                                <span class="col2">Điểmx100</span>
                            </p>
                        </li>
                        <li >
                            <p>
                                <span class="col1">200.000VNĐ</span>
                                <span class="col2">Điểmx200</span>
                            </p>
                        </li>
                        <li >
                            <p>
                                <span class="col1">500.000VNĐ</span>
                                <span class="col2">Điểmx500</span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-6 col-xs-12">
                <div class="history">
                    <h3 class="title">Điền thông tin thẻ</h3>
                    <form name="form2" method="post" action="{{route('PM_CardPayment', $app->id)}}">
                        {{ csrf_field() }}
                        <input type="hidden" name="card_type" id="card_type" value="VTE">
                        <fieldset>
                            <ul class="history-fill">
                                <li>
                                    <label for="numbertext">Số seri</label>
                                    <input type="text" name="card_serial" id="numbertext" class="bginput" placeholder="Số seri" required>
                                </li>
                                <li>
                                    <label for="manap">Mã nạp</label>
                                    <input type="text" name="card_code" id="manap" class="bginput" placeholder="Mã nạp" required>
                                </li>
                            </ul>
                            <input type="submit" name="submit" id="submit" class="bt-xuly" value="xác nhận" >
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>

        <div class="atm-payment col-md-12">
            <div class="col-md-6 col-xs-12">
                <div class="money">
                    <ul class="money-list">
                        <li class="head">
                            <span class="col1">Giá</span><span class="col2">Thêm điểm</span>
                        </li>
                        <li >
                            <a href="javascript:void(0)">
                                <span class="col1">20.000VNĐ</span>
                                <span class="col2">Điểmx20</span>
                            </a>
                        </li>
                        <li >
                            <a href="javascript:void(0)" class="active">
                                <span class="col1">50.000VNĐ</span>
                                <span class="col2">Điểmx50</span>
                            </a>
                        </li>
                        <li >
                            <a href="javascript:void(0)">
                                <span class="col1">100.000VNĐ</span>
                                <span class="col2">Điểmx100</span>
                            </a>
                        </li>
                        <li >
                            <a href="javascript:void(0)">
                                <span class="col1">200.000VNĐ</span>
                                <span class="col2">Điểmx200</span>
                            </a>
                        </li>
                        <li >
                            <a href="javascript:void(0)">
                                <span class="col1">500.000VNĐ</span>
                                <span class="col2">Điểmx500</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-6 col-xs-12">
                <div class="history">
                    <h3 class="title">Xem lại giao dịch</h3>
                    <ul class="history-list">
                        <li>
                            <span class="textleft">Sản phẩm được chọn</span>
                            <span class="textright game-value">Điểmx50</span>
                        </li>
                        <li>
                            <span class="textleft">Giá</span>
                            <span class="textright Textbold vnd-price">50.000VNĐ</span>
                        </li>
                        <li>
                            <span class="textleft">Phương thức thanh toán</span>
                            <span class="textright payment-method">AIRPAY</span>
                        </li>
                    </ul>
                    <a href="#" class="bt-xuly">Xử lý thanh toán</a>
                </div>
            </div>
        </div>


    </div>
@endsection