@extends('cms.layouts.template')

@section('content')
    <!-- Main row -->
    <div class="row">
        <!-- Left col -->
        <div class="col-md-12">
            <!-- TABLE: LATEST ORDERS -->
            <div class="box box-info">
                <div class="box-header with-border">
                    @if(isset($product))
                        <h3 class="box-title">Edit: {{$product->product_name}}</h3>
                    @else
                        <h3 class="box-title">Create Product</h3>
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
                    @include('cms.product.partials.form_create')
                </div>
                <div class="box-footer">
                </div>
            </div>
            <!-- /.box -->
        </div>
    </div>
@endsection