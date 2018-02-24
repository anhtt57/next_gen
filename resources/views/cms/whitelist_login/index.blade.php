@extends('cms.layouts.template')

@section('content')
    <!-- Main row -->
    <div class="row">
        <!-- Left col -->
        <div class="col-md-12">
            <!-- TABLE: LATEST ORDERS -->
            <div class="box box-info">
                <div class="box-header with-border">
                    <h3 class="box-title">Setting whitelist login</h3>
                </div>
                <!-- /.box-header -->
                <div class="box-body">
                    <div class="col-md-6">
                        <div class="form-horizontal">
                            <div class="form-group">
                                <label for="game_version" class="col-sm-4 control-label">App name</label>
                                <div class="col-sm-8">
                                    <input type="hidden" name="id" value="{{$app['id']}}">
                                    <input type="text" class="form-control" name="game_name" id="game_name"
                                           placeholder="Game name" disabled value="{{$app['game_name']}}">
                                </div>
                            </div>
                            {{--<div class="form-group">--}}
                            {{--<label for="message" class="col-sm-4 control-label">Message</label>--}}
                            {{--<div class="col-sm-8">--}}
                            {{--<input type="text" class="form-control" name="whitelist_login_message" id="whitelist_login_message"--}}
                            {{--placeholder="Whitelist login message" @if($app['whitelist_login_on'] == 1)--}}
                            {{--value="{{$app['whitelist_login_message']}}"--}}
                            {{--@endif>--}}
                            {{--</div>--}}
                            {{--</div>--}}
                            <div class="form-group">
                                <label for="prevent_login" class="col-sm-4 control-label">Chặn đăng nhập</label>
                                <div class="col-sm-8">
                                    <label class="switch">
                                        <input name="whitelist_login_on"
                                               data-url="{{url('apps/whitelist-login-status/' . $app['id'])}}"
                                               id="whitelist_login_on" type="checkbox"
                                               @if($app['whitelist_login_on'] == 1) checked="checked" @endif>
                                        <span class="slider round"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12" id="table-area" @if($app['whitelist_login_on'] == 0)hidden @endif >
                        <div class="table-responsive">
                            <div class="box-tools pull-left">
                                <a href="#addNewAccountWhitelist" id="addAccountWhitelist" data-toggle="modal"
                                   @if($app['whitelist_login_on'] == 0)disabled
                                   @endif  class="btn btn-sm btn-info btn-flat">Add new account</a>
                            </div>
                            <table class="table no-margin">
                                <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>User name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($appUserInWL as $key => $value)
                                    <tr>
                                        <td>{{$value['id']}}</td>
                                        <td>{{$value['user_name']}}</td>
                                        <td>{{$value['email'] }}</td>
                                        <td>{{$value['phone'] }}</td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.box -->
        </div>
    </div>
    <!-- /.row -->
    <div class="modal fade " id="addNewAccountWhitelist" tabindex="false" role="addNewAccountWhitelist"
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                    <h4 class="modal-title">Thêm tài khoản whitelist</h4>
                </div>
                <div class="modal-body">
                    <input type="hidden" id="appWL" name="appWL" value="{{$app['id']}}">
                    <select name="operating_system" id="selectWhitelist" class="form-control">
                        @foreach($listUser as $key => $user)
                            <option value="{{ $user['id'] }}">{{ $user['user_name'] }}</option>
                        @endforeach
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn dark btn-primary" data-url="{{url('apps/add-wlaccount')}}" id="addWhitelistBtn">Thêm
                    </button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
@endsection