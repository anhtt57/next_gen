@extends('cms.layouts.template')

@section('content')
    <!-- Main row -->
    <div class="row">
        <!-- Left col -->
        <div class="col-md-12">
            <!-- TABLE: LATEST ORDERS -->
            <div class="box box-info">
                <div class="box-header with-border">
                    <img src="{{$product->image}}" class="rounded float-left" style="width: 40px; height: 40px" >
                    <h3 class="box-title">{{$product['product_name']}}</h3>
                    <div class="box-tools pull-left"></div>
                </div>
                <!-- /.box-header -->
                <div class="box-body">
                    <div class="col-md-12" style="margin-top: 5px; margin-bottom: 5px">
                        <label style="margin-right: 10px;">Bundle Id:</label>
                        <span>{{$product['bundleId']}}</span>
                    </div>
                    <div class="col-md-12" style="margin-top: 5px; margin-bottom: 5px">
                        <label style="margin-right: 10px;">Product id android:</label>
                        <span>{{$product['product_id_android']}}</span>
                    </div>

                    <div class="col-md-12" style="margin-top: 5px; margin-bottom: 5px">
                        <label style="margin-right: 10px;">Product id iOS:</label>
                        <span>{{$product['product_id_ios']}}</span>
                    </div>
                    <div class="col-md-12" style="margin-top: 5px; margin-bottom: 5px">
                        <label style="margin-right: 10px;">Description:</label>
                        <span>{{$product['description']}}</span>
                    </div>

                    <div class="col-md-12" style="margin-top: 5px; margin-bottom: 5px">
                        <label style="margin-right: 10px;">Unit name:</label>
                        <span>{{$product['unit_name']}}</span>
                    </div>
                    <div class="col-md-12" style="margin-top: 5px; margin-bottom: 5px">
                        <label style="margin-right: 10px;">USD money:</label>
                        <span>{{$product['usd_money']}}</span>
                    </div>

                    <div class="col-md-12" style="margin-top: 5px; margin-bottom: 5px">
                        <label style="margin-right: 10px;">VND money:</label>
                        <span>{{$product['vnd_money']}}</span>
                    </div>
                    <div class="col-md-12" style="margin-top: 5px; margin-bottom: 5px">
                        <label style="margin-right: 10px;">Game money:</label>
                        <span>{{$product['game_money']}}</span>
                    </div>

                    <div class="col-md-12" style="margin-top: 5px; margin-bottom: 5px">
                        <label style="margin-right: 10px;">Sale percent:</label>
                        <span>{{$product['sale_percent']}}</span>
                    </div>
                    <div class="col-md-12" style="margin-top: 5px; margin-bottom: 5px">
                        <label style="margin-right: 10px;">Sale Description:</label>
                        <span>{{$product['sale_description']}}</span>
                    </div>
                </div>
                <!-- /.box-body -->
                <!-- /.box-footer -->
            </div>
            <!-- /.box -->
        </div>
    </div>
    <!-- /.row -->

@endsection