<div class="modal-body">
	<form class="form-horizontal" id="version-form" action="{{ $method == 'POST' ? route('version.store') : route('version.update', $version->id) }}" method="POST">
		<input type="hidden" name="_token" value="{{ csrf_token() }}">
		@if($method == 'PUT')
		  	<input type="hidden" name="_method" value="PUT">
		  	<input type="hidden" name="id" value="{{ $version->id }}">
		@endif
		<input type="hidden" name="app_id" value="{{ $_GET['app_id'] or 0 }}">
		<div class="box-body">
			<div class="col-md-12">
			  	<div class="form-group">
			    	<label for="game_version" class="col-sm-4 control-label">Game version</label>
		
			    	<div class="col-sm-8">
			      		<input type="text" class="form-control" name="game_version" id="game_version" placeholder="Game version" value="{{ $version->game_version or '' }}">
			    	</div>
			  	</div>

			  	<div class="form-group">
			    	<label for="bundle_id" class="col-sm-4 control-label">Bundle ID</label>
		
			    	<div class="col-sm-8">
			      		<input type="text" class="form-control" name="bundle_id" id="bundle_id" placeholder="Bundle ID" value="{{ $version->bundle_id or '' }}">
			    	</div>
			  	</div>
		
			  	<div class="form-group">
			    	<label for="phone" class="col-sm-4 control-label">Thiết bị</label>
			    	<div class="col-sm-8">
			    		<select name="operating_system" id="" class="form-control">
			      		@foreach($system_list as $key => $s)
			      			<option value="{{ $key }}" {{ (isset($version->operating_system) ? $version->operating_system : 1) == $key ? 'selected="selected"' : '' }}>{{ $s }}</option>
			      		@endforeach
			      		</select>
			    	</div>
			  	</div>

			  	<div class="form-group">
			    	<label for="prevent_login" class="col-sm-4 control-label">Chặn đăng nhập</label>
		
			    	<div class="col-sm-8">
			    		<label class="switch">
						  	<input name="prevent_login" type="checkbox" {{ (isset($version) && isset($version->prevent_login) && $version->prevent_login) ? 'checked' : '' }}>
						  	<span class="slider round"></span>
						</label>
			    	</div>
			  	</div>

			  	<div class="form-group">
			    	<label for="prevent_in_app_purchase" class="col-sm-4 control-label">Chặn In-app Purchase</label>
		
			    	<div class="col-sm-8">
			    		<label class="switch">
						  	<input name="prevent_in_app_purchase" type="checkbox" {{ (isset($version) && isset($version->prevent_in_app_purchase) && $version->prevent_in_app_purchase) ? 'checked' : '' }}>
						  	<span class="slider round"></span>
						</label>
			    	</div>
			  	</div>

			  	<div class="form-group">
			    	<label for="prevent_normal_purchase" class="col-sm-4 control-label">Chặn thanh toán thường</label>
					
					<div class="col-sm-8">
			    		<label class="switch">
						  	<input name="prevent_normal_purchase" type="checkbox" {{ (isset($version) && isset($version->prevent_normal_purchase) && $version->prevent_normal_purchase) ? 'checked' : '' }}>
						  	<span class="slider round"></span>
						</label>
			    	</div>
			  	</div>

			  	<div class="form-group">
			    	<label for="prevent_monthly_purchase" class="col-sm-4 control-label">Chặn thanh toán thẻ tháng</label>
					
					<div class="col-sm-8">
			    		<label class="switch">
						  	<input name="prevent_monthly_purchase" type="checkbox" {{ (isset($version) && isset($version->prevent_monthly_purchase) && $version->prevent_monthly_purchase) ? 'checked' : '' }}>
						  	<span class="slider round"></span>
						</label>
			    	</div>
			  	</div>

			  	<div class="form-group">
			    	<label for="message" class="col-sm-4 control-label">Message</label>
		
			    	<div class="col-sm-8">
			      		<input type="text" class="form-control" name="message" id="message" placeholder="Message" value="{{ $version->message or '' }}">
			    	</div>
			  	</div>

			</div>
		</div>

		<div class="box-footer">
		  	<button type="button" class="btn btn-default pull-left" data-dismiss="modal">Hủy</button>
			<button type="submit" class="btn btn-info pull-right">{{ $method == 'PUT' ? 'Chỉnh sửa' : 'Tạo mới' }}</button>
		</div>
	</form>	        	
</div>
