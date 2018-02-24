@extends('fontend.layouts.template')

@section('content')
    <div class="title">
        <h2>Thông tin tài khoản</h2>
    </div>
    <div class="update_info">
        @if (count($errors) > 0)
            <div class="alert alert-danger">
                <strong>Error</strong><br><br>
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif
        <form role="form" id="update-userinfo" method="POST" action="{{route('updateUserInfo')}}">
            {{ csrf_field() }}
            <fieldset>
                <div class="update_info-form">
                    {{--<p class="error">Bạn vui lòng điền đầy đủ thông tin</p>--}}
                    <ul class="update_info-list">
                        <li>
                            <label for="userupdate">Họ và Tên</label>
                            <input type="hidden" name="id" value="{{$currentUser->id}}">
                            <input type="text" name="full_name" id="full_name" value="{{$currentUser->full_name}}" class="bginput" placeholder="Viết có dấu" >
                        </li>
                        <li>
                            <label for="cmnd">Số chứng minh thư</label>
                            <input type="number" name="identification" id="identification" value="{{$currentUser->identification}}" class="bginput" placeholder="0123" >
                        </li>
                        <li>
                            <label for="emailupdate">Email</label>
                            <input type="text" name="email" id="email" value="{{$currentUser->email}}" class="bginput" placeholder="abc@gmail.com" >
                        </li>
                        <li>
                            <label for="phone">Số điện thoại</label>
                            <input type="text" name="phone" id="phone" value="{{$currentUser->phone}}" class="bginput" placeholder="agc" >
                        </li>
                        <li>
                            <label for="gioitinh">Giới tính</label>
                            <select class="bginput select1" id="gioitinh">
                                <option value="0" @if($currentUser->gender == 0) selected @endif>Nam</option>
                                <option value="1" @if($currentUser->gender == 1) selected @endif>Nữ</option>
                            </select>
                        </li>
                        <li>
                            <label for="date">Ngày sinh</label>
                            <select class="bginput select1" id="date" name="date">
                                <option value="0">Ngày</option>
                                @for($i = 1; $i <= 31; $i++)
                                    <option value="{{$i}}" @if($date == $i) selected @endif>{{$i}}</option>
                                @endfor
                            </select>
                            <select class="bginput select1" id="month" name="month">
                                <option value="0">Tháng</option>
                                @for($i = 1; $i <= 12; $i++)
                                    <option value="{{$i}}" @if($month == $i) selected @endif>{{$i}}</option>
                                @endfor
                            </select>
                            <select class="bginput select1" id="year" name="year">
                                <option value="0">Năm</option>
                                @for($i = 1970; $i <= date('Y'); $i++)
                                    <option value="{{$i}}" @if($year == $i) selected @endif>{{$i}}</option>
                                @endfor
                            </select>
                        </li>
                        <li>
                            <label for="addressupdate">Tỉnh/thành phố</label>
                            <input type="text" name="city" id="city" class="bginput" placeholder="thành phố" value="{{$currentUser->city}}" >
                        </li>
                        <li>
                            <label for="addressupdate">Quận/huyện</label>
                            <input type="text" name="district" id="district" class="bginput" value="{{$currentUser->district}}" placeholder="Quận/huyện" >
                        </li>
                        <li>
                            <label for="addressupdate">Phường/xã</label>
                            <input type="text" name="ward" id="ward" class="bginput" value="{{$currentUser->ward}}" placeholder="Phường/xã" >
                        </li>
                        <li>
                            <label for="addressupdate">Địa chỉ</label>
                            <input type="text" name="address" id="address" value="{{$currentUser->address}}" class="bginput" placeholder="Địa chỉ">
                        </li>
                        {{--<li>--}}
                        {{--<label for="pet">Câu hỏi bảo mật</label>--}}
                        {{--<select class="bginput" id="pet">--}}
                        {{--<option>Con vật bạn yêu thích</option>--}}
                        {{--<option>Chó</option>--}}
                        {{--<option>Mèo</option>--}}
                        {{--<option>panda</option>--}}
                        {{--<option>yuyu</option>--}}
                        {{--</select>--}}
                        {{--</li>--}}
                        {{--<li>--}}
                        {{--<label for="answerupdate">Câu trả lời</label>--}}
                        {{--<input type="text" name="answerupdate" id="answerupdate" class="bginput" placeholder="agc" required>--}}
                        {{--</li>--}}

                    </ul>
                    <input type="submit" name="submit" id="submit" class="bt_end" value="xác nhận" >
                </div>
            </fieldset>
        </form>
    </div>
@endsection