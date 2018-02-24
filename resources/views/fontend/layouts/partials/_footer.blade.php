        <!-- Content -->
        </div>
    </div>
</main>
<!-- End - Header -->

<div class="footer">
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <p>Copyright 2017 by <strong class="Textred Textbold">nopegame</strong>. All rights reserved.</p>
                <p><a href="#">Câu hỏi thường gặp</a> | <a href="#">Điều khoản sử dụng</a> | <a href="#">Chính sách bảo mật</a></p>
            </div>
        </div>
    </div>
</div>


</div>


@if(Auth::guard('webpay')->check())
    <div class="popup">
        <a href="#" class="close">X</a>
        <div class="wraning">
            <img src="{{asset('files/images/logo-nopegame.png')}}">
            <h2 class="title Textred">Thông báo</h2>
            <p><i>XIN CẬP NHẬT ĐẦY ĐỦ THÔNG TIN TÀI KHOẢN ĐỂ TĂNG BẢO MẬT</i></p>
            <a class="label label-primary" href="{{route('PM_UserInfo', Auth::guard('webpay')->user()->id)}}">CẬP NHẬT</a>
        </div>
    </div>
@else
    <div class="popup">
        <a href="#" class="close">X</a>
        <h2 class="title">Đăng nhập</h2>
        <div class="popup_content">
            <form role="form" method="post" action="{{route("PM_Home")}}">
                {{ csrf_field() }}
                @if (session()->has('error'))
                    <p class="error">{{ session()->get('error') }}</p>
                @endif
                <div class="divform">
                    <label for="loginuser">Name:</label>
                    <input type="text" id="loginuser" name="loginuser" placeholder="Điền tên tài khoản, email, số điện thoại" class="bginput" required>
                </div>
                <div class="divform">
                    <label for="loginpw">password:</label>
                    <input type="password" id="loginpw" name="loginpw" class="bginput" required>
                </div>
                <<input type="submit" name="" value="Đăng nhập ngay" class="bt_login">
            </form>
        </div>
    </div>
@endif

<!-- Javascript -->
<script src="{{asset('js/jquery.1.12.4.min.js')}}"></script>
<script src="{{asset('js/bootstrap.min.js')}}"></script>
<script src="{{asset('js/mod-owl.carousel.min.js')}}"></script>
<!-- <script src="js/isc-core.js"></script> -->
<script src="{{asset('js/common.js')}}"></script>

@if (session()->has('error'))
    <script>
        $('.popup_login').click();
    </script>
@endif

@if( Auth::guard('webpay')->check()
    && Auth::guard('webpay')->user()->email == null
    && Request::url() != route('PM_UserInfo', Auth::guard('webpay')->user()->id))
    <script>
        popup();
    </script>
@endif

<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif] -->
</body>



</html>