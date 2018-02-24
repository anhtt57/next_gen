{{-- @author DucLV --}}
<div class="row">
    <div class="col-xs-12">
      	<div class="box">
            <div class="box-header">
            	<div class="row">            		
              		<h3 class="box-title col-md-6">{{ $title or 'Management' }}</h3>
              		@if(isset($action) && in_array('create', $action))
	              		<div class="col-md-6">
	              			<a href="javascript:void(0)" link='{{ url($source . '/create' .(isset($params) ? $params : '')) }}' class="btn btn-primary pull-right form-content-action-btn">Thêm mới</a>
	              		</div>
	              	@endif
            	</div>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              	<div class="dataTables_wrapper form-inline dt-bootstrap">
              		<div class="row">
              			<div class="col-sm-12">

							<div class="table-responsive">
								<table id="gridview" class="table table-bodered dataTable">
									<thead>
										<tr>
											@foreach($header as $key => $value)
												@if(is_array($value))
													<th>{{ $value['title'] }}</th>
												@else
													<th>{{ $value }}</th>
												@endif
											@endforeach
											@if(isset($action))<th></th>@endif
										</tr>
									</thead>
									<tbody>
										@foreach($data as $dt)
											<tr>
												@foreach($header as $key => $value)
													@if(is_array($value))
														@if($value['control'] == 'checkbox')
															<td>
																<label class="switch">
																  	<input name="{{ $key }}" row-id='{{ $dt['id'] }}' type="checkbox" class="ajax-change-{{ $source }}" {{ $dt[$key] ? 'checked' : '' }}>
																  	<span class="slider round"></span>
																</label>
															</td>
														@elseif($value['control'] == 'func')
															<td>{{ isset($value['param']) ? ( count($dt->{$value['func']}) ? $dt->{$value['func']}->{$value['param']} : 'Deleted' ) : $dt->{$value['func']}() }}</td>
														@endif

													@else
														<td>{{ $dt[$key] }}</td>
													@endif
												@endforeach

												@if(isset($action))
													<td>													
														@if(in_array('edit', $action))
															<a class="form-content-edit form-content-action-btn" link="{{ url($source . '/' . $dt['id'] . '/edit' .(isset($params) ? $params : '')) }}" href="javascript:void(0)"><i class="fa fa-2x fa-edit"></i></a>
														@endif

														@if(in_array('delete', $action))
															<label>
																<form action="{{ route($source . '.destroy', $dt['id']) }}" method="POST">
												                  	<input type="hidden" name="_token" value="{{ csrf_token() }}">
												                  	<input type="hidden" name="_method" value="DELETE">
												                  	<input type="hidden" name="id" value="{{ $dt['id'] }}">
												                  	<button class="btn-none-border error" onclick="return confirm('Are you ready to delete?')" type="submit"><i class="fa fa-2x fa-close"></i></button>
												                </form>
															</label>
														@endif
													</td>
												@endif
											</tr>
										@endforeach
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="modal fade in" id="form-content">
  	<div class="modal-dialog modal-lg">
    	<div class="modal-content">
	      	<div class="modal-header">
	        	<button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          	<span aria-hidden="true">×</span></button>
	        	<h4 class="modal-title">Thêm mới {{ $source }}</h4>
	      	</div>
	      	<div id="body">
		      	
		    </div>
    	</div>
    	<!-- /.modal-content -->
  	</div>
  	<!-- /.modal-dialog -->
</div>


{{-- <div class="overlay">
  	<i class="fa fa-refresh fa-spin"></i>
</div> --}}