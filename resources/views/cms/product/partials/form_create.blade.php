<div class="row">
    <form role="form" id="product-create" method="POST" action="{{isset($product) ? route('postEditProduct', $product->id) : route('postNewProduct')}}">
        {{ csrf_field() }}
        <div class="col-md-6">
            @if(isset($product))
                <input type="hidden" name="id" value="{{ $product->id }}">
            @endif
            <div class="form-group">
                <label>Product name(*)</label>
                <input type="text" name="product_name" class="form-control" value="{{ old('product_name', isset($product->product_name) ? $product->product_name : '') }}" required>
            </div>
            <div class="form-group">
                <label>Product image(*)</label>
                <input type="text" name="image" class="form-control"  value="{{ old('image', isset($product->image) ? $product->image : '') }}" required>
            </div>
            <div class="form-group">
                <label>Bundle Id(*)</label>
                <input type="text" name="bundleId" value="{{ old('bundleId', isset($product->bundleId) ? $product->bundleId : '') }}" class="form-control" required>
            </div>
            <div class="form-group">
                <label>Product id android(*)</label>
                <input type="text" name="product_id_android" class="form-control" value="{{ old('product_id_android', isset($product->product_id_android) ? $product->product_id_android : '') }}" required>
            </div>
            <div class="form-group">
                <label>Product id iOS(*)</label>
                <input type="text" name="product_id_ios" class="form-control" value="{{ old('product_id_ios', isset($product->product_id_ios) ? $product->product_id_ios : '') }}" required>
            </div>
            <div class="form-group">
                <label>Description(*)</label>
                <textarea class="form-control" name="description" rows="3" required="required">{{isset($product->description) ? $product->description : ''}} </textarea>
            </div>
        </div>
        <!-- text input -->
        <div class="col-md-6">
            <div class="form-group">
                <label>Unit name(*)</label>
                <input type="text" name="unit_name" class="form-control" value="{{ old('unit_name',isset($product->unit_name) ? $product->unit_name : '') }}" required>
            </div>
            <div class="form-group">
                <label>USD money(*)</label>
                <input type="text" name="usd_money" class="form-control"  value="{{ old('usd_money', isset($product->usd_money) ? $product->usd_money : '') }}" required>
            </div>
            <div class="form-group">
                <label>VND money(*)</label>
                <input type="text" name="vnd_money" value="{{ old('vnd_money', isset($product->vnd_money) ? $product->vnd_money : '') }}" class="form-control" required>
            </div>
            <div class="form-group">
                <label>Game money(*)</label>
                <input type="text" name="game_money" class="form-control" value="{{ old('game_money', isset($product->game_money) ? $product->game_money : '') }}" required>
            </div>
            <div class="form-group">
                <label>Sale percent</label>
                <input type="text" name="sale_percent" class="form-control" value="{{ old('sale_percent', isset($product->sale_percent) ? $product->sale_percent : '') }}">
            </div>
            <div class="form-group">
                <label>Sale Description</label>
                <textarea class="form-control" name="sale_description" rows="3" >{{isset($product->sale_description) ? $product->sale_description : ''}} </textarea>
            </div>
        </div>
        <div class="col-md-12">
            <button type="submit" class="btn btn-info">Submit</button>
        </div>
    </form>
</div>