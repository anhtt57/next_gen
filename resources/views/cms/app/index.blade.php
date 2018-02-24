@extends('cms.layouts.template')

@section('content')
    <!-- Main row -->
    <div class="row">
        <!-- Left col -->
        <div class="col-md-12">
            <!-- TABLE: LATEST ORDERS -->
            <div class="box box-info">
                <div class="box-header with-border">
                    <h3 class="box-title">List apps</h3>

                    <div class="box-tools pull-left">
                        <a href="{{url('apps/create-new-app')}}" class="btn btn-sm btn-info btn-flat">Create new app</a>
                    </div>
                </div>
                <!-- /.box-header -->
                <div class="box-body">
                    <div class="table-responsive">
                        <table class="table no-margin apps-datatable">
                            <thead>
                            <tr>
                                <th>App name</th>
                                <th>App Code</th>
                                <th>Ios version</th>
                                <th>Android version</th>
                                <th>Currency full name</th>
                                <th>Monthy card full name</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                        </table>
                    </div>
                    <!-- /.table-responsive -->
                </div>
                <!-- /.box-body -->
            {{--<div class="box-footer clearfix">--}}
            {{--<a href="javascript:void(0)" class="btn btn-sm btn-info btn-flat pull-left">Place New Order</a>--}}
            {{--<a href="javascript:void(0)" class="btn btn-sm btn-default btn-flat pull-right">View All Orders</a>--}}
            {{--</div>--}}
            <!-- /.box-footer -->
            </div>
            <!-- /.box -->
        </div>
    </div>
    <!-- /.row -->
        {{--@push('scripts')--}}
    {{--<script src="{{ asset('bower_components/jquery/dist/jquery.min.js') }}"></script>--}}

    {{--@endpush--}}
@endsection