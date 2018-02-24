@extends('cms.layouts.template')

@section('content')
    <!-- Main row -->
    <div class="row">
        <!-- Left col -->
        <div class="col-md-12">
            <!-- TABLE: LATEST ORDERS -->
            <div class="box box-info">
                <div class="box-header with-border">
                    <h3 class="box-title">List products</h3>

                    <div class="box-tools pull-left">
                    </div>
                </div>
                <!-- /.box-header -->
                <div class="box-body">
                    <div class="table-responsive">
                        <a href="{{route('getNewProduct')}}" class="btn btn-sm btn-info btn-flat">Create new product</a>

                        <div class="form-group" style="margin-top: 20px">
                            <label for="sel1">Select App:</label>
                            <form method="GET" action="{{ url()->current() }}">
                                <select id="mySelect" name="bundleId" class="select-picker form-control" onchange="this.form.submit()">
                                    <option value="All" selected="selected">All App
                                    @foreach($content["listApp"] as $app)
                                        <option value="{{$app->game_code}}"
                                        @if (isset($_GET['bundleId']) && $_GET['bundleId'] == $app->game_code)
                                            selected="selected"
                                        @endif
                                        >{{$app->game_name}}
                                    @endforeach
                                </select>
                            </form>
                        </div>
                        <p id="demo"></p>

                        <table class="table no-margin">
                            <thead>
                            <tr>
                                <th>Product name</th>
                                <th>Unit name</th>
                                <th>Game money</th>
                                <th>Game VND</th>
                                <th>BundleId</th>
                                <th>AppStore</th>
                                <th>PlayStore</th>
                                <th>Sale</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            @forelse($content["listProduct"] as $product)
                                <tr>
                                    <td>
                                        <a href="{{url('products/detail/'.$product->id)}}"><span>{{ $product['product_name'] }}</span></a>
                                    </td>
                                    <td><span>{{ $product['unit_name'] }}</span></td>
                                    <td><span>{{ $product['game_money'] }}</span></td>
                                    <td><span>{{ $product['vnd_money'] }}</span></td>
                                    <td><span>{{ $product['bundleId'] }}</span></td>
                                    <td><span>{{ $product['product_id_ios'] }}</span></td>
                                    <td><span>{{ $product['product_id_android'] }}</span></td>
                                    <td><span>{{ $product['sale_percent'] }}</span></td>
                                    <td>
                                        <a href="{{route('getEditProduct', $product->id)}}"
                                           class="btn btn-sm btn-info btn-flat">Edit</a>
                                        <button type="button" class="btn btn-sm btn-danger btn-flat" data-toggle="modal"
                                                data-target="#modalDelete-{{ $product->id }}">Delete
                                        </button>
                                        <!-- popup -->
                                        <div id="modalDelete-{{ $product->id }}" class="modal fade" role="dialog">
                                            <div class="modal-dialog">
                                                <!-- Modal content-->
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <button type="button" class="close"
                                                                data-dismiss="modal">&times;</button>
                                                        <h4 class="modal-title">{{$product->product_name}}</h4>
                                                    </div>
                                                    <div class="modal-body">
                                                        <p>Do you want delete product?</p>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <input type="hidden" name="id" value="{{ $product->id }}">
                                                        <button type="button"
                                                                data-url="{{ route('postDeleteProduct', $product->id) }}"
                                                                id="submit" class="btn btn-danger confirm-delete"
                                                                style="margin-right: 5px;">Delete
                                                        </button>
                                                        <button type="button" class="btn btn-default"
                                                                data-dismiss="modal" style="margin-right: 15px;">Close
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            @empty
                                <tr>
                                    <td colspan="9">
                                        <h3>No any products</h3>
                                    </td>
                                </tr>
                            @endforelse
                            </tbody>
                        </table>
                    </div>
                    <!-- /.table-responsive -->
                    @if($content["listProduct"] instanceof \Illuminate\Pagination\LengthAwarePaginator )
                        {{$content["listProduct"]->links()}}
                    @endif
                </div>
                <!-- /.box-body -->
                <!-- /.box-footer -->
            </div>
            <!-- /.box -->
        </div>
    </div>
    <!-- /.row -->
@endsection
