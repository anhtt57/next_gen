@extends('cms.layouts.template')

@section('content')
    <style>
        .errors {
            color: red;
        }
    </style>
    <!-- Main row -->
    <div class="row">
        <!-- Left col -->
        <div class="col-md-12">
            <!-- TABLE: LATEST ORDERS -->
            <div class="box box-info">
                <div class="box-header with-border">
                    @if(isset($appDetail))
                        <h3 class="box-title">Edit: {{$appDetail->game_name}}</h3>
                    @else
                        <h3 class="box-title">Create new App</h3>
                    @endif
                    @if (session()->has('error'))
                        <div class="alert alert-danger">{{ session()->get('error') }}</div>
                    @endif
                    @if (session()->has('success'))
                        <div class="alert alert-success">{{ session()->get('success') }}</div>
                    @endif
                    @if ($errors->any())
                        <div class="alert alert-danger">
                            <ul>
                                @foreach ($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        </div>
                    @endif
                    <div class="box-tools pull-left">
                    </div>
                </div>
                <!-- /.box-header -->
                <div class="box-body">
                    @include('cms.app.partials.form_create')
                </div>
                <div class="box-footer">
                </div>
            </div>
            <!-- /.box -->
        </div>
    </div>
    <script src="{{ asset('bower_components/jquery/dist/jquery.min.js') }}"></script>
    <script src="{{ asset('bower_components/jquery-validation/dist/jquery.validate.js') }}"></script>
    <script src="{{ asset('/js/app_create.js') }}"></script>
    <script>
        $('#app-create').validate({
            errorClass: 'errors'});
    </script>
@endsection