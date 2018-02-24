<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="">
<!--<![endif]-->

<head>
    <meta charset="utf-8">
    <title>NOPE Game</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <link rel="stylesheet" href="{{asset('css/style.css')}}">

</head>

<body>
<!-- Loading -->
<div id="loader-wrapper">
    <div id="loader"></div>
</div>
<!-- Mainsite -->
<div class="c-wrapper t-wrapper-bottom">

    <!-- Header -->
    <div class="header">

        <nav class="navbar navbar-default t-navbar-default  c-header t-header" role="navigation">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 ">
                        <div class="navbar-header">
                            <a href="{{route("PM_Home")}}" title="Nope Game" class="logo"><img src="{{asset('files/images/logo-nopegame.png')}}"></a>

                        </div>

                    </div>
                </div>
            </div>
        </nav>
        <div class="navbar-mobi">
            <button type="button" class="navbar-toggle t-navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        </div>
        <div class="collapse navbar-collapse navbar-ex1-collapse collapse-style ">
            <div class="nav-menu ">
                <ul class="nav navbar-nav c-nav__list t-nav__list">
                    <li >
                        @if(Auth::guard('webpay')->check())
                            <a href="{{url("webpay/user",Auth::guard('webpay')->user()->id)}}" title="">
                                <img src="{{asset('files/images/icon-login.png')}}">{{Auth::guard('webpay')->user()->user_name}}</a>
                        @else
                            <a class="popup_login" href="#" title="Đăng nhập">
                                <img src="{{asset('files/images/icon-login.png')}}">Đăng nhập</a>
                        @endif
                    </li>
                    <li class="active">
                        <a href="#" title="Chăm sóc khách hàng">Chăm sóc khách hàng</a>
                    </li>
                    @if(Auth::guard('webpay')->check())
                        <li>
                            <a href="{{route("PM_Logout")}}" title="Đăng xuất">Đăng xuất</a>
                        </li>
                    @endif
                </ul>
            </div>
        </div>

    </div>
    <div class="banner hidden-xs hidden-sm">
        <div class="owl-slide owl-carousel ">
            <div class="item">
                <a href="#" title="">
                    <img src="{{asset('files/images/img-banner.jpg')}}" alt="">
                </a>
            </div>
            <div class="item">
                <a href="#" title="">
                    <img src="{{asset('files/images/img-banner.jpg')}}" alt="">
                </a>
            </div>
            <div class="item">
                <a href="#" title="">
                    <img src="{{asset('files/images/img-banner.jpg')}}" alt="">
                </a>
            </div>
            <div class="item">
                <a href="#" title="">
                    <img src="{{asset('files/images/img-banner.jpg')}}" alt="">
                </a>
            </div>
        </div>
    </div>
    <main>
        <div class="container">
            <div class="mainpage">