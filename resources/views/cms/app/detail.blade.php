@extends('cms.layouts.template')

@section('content')
    <!-- Main row -->
    <div class="row">
        <!-- Left col -->
        <div class="col-md-12">
            <!-- TABLE: LATEST ORDERS -->
            {{$viewDetail = "  "}}
            <div class="box box-info">
                <div class="box-header with-border">
                    <h3 class="box-title">{{$appDetail['game_name']}}</h3>
                    <div class="box-tools pull-left"></div>
                </div>
                <!-- /.box-header -->
                <div class="box-body">
                    @include('cms.app.partials.form_create')
                </div>
                <!-- /.box-body -->
                <!-- /.box-footer -->
            </div>
            <!-- /.box -->
        </div>
    </div>
    <!-- /.row -->

@endsection