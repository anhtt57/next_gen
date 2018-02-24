<aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      	<!-- Sidebar user panel -->
      	<div class="user-panel" style="padding: 10px 0px 20px 10px;">
        	<div class="pull-left image">
          	<span class="img-circle"></span>
        	</div>
        	<div class="pull-left info">
          	<p>Hello {{ \Auth::check() ? \Auth::user()->name : 'Admin' }}</p>
          	<a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        	</div>
      	</div>
      	<!-- search form -->
      	<form action="#" method="get" class="sidebar-form">
        	<div class="input-group">
          	<input type="text" name="q" class="form-control" placeholder="Search...">
          	<span class="input-group-btn">
                	<button type="submit" name="search" id="search-btn" class="btn btn-flat">
                  	<i class="fa fa-search"></i>
                	</button>
              	</span>
        	</div>
      	</form>
      	<!-- /.search form -->
      	<!-- sidebar menu: : style can be found in sidebar.less -->
      	<ul class="sidebar-menu" data-widget="tree">
        	<li class="header">MAIN NAVIGATION</li>
        	<li class="{{ strpos(Request::url(), '/apps/list') !== false ? 'active' : '' }}">
              	<a href="{{route('listApps')}}">
                	<i class="fa fa-dashboard"></i> <span>Quản lý apps</span>
              	</a>
        	</li>
			<li class="treeview {{ strpos(Request::url(), '/products') !== false ? 'active' : '' }}">
				<a href="#">
					<i class="fa fa-dashboard"></i> <span>Quản lý product</span>
					<span class="pull-right-container">
					<i class="fa fa-angle-left pull-right"></i>
					</span>
				</a>
				<ul class="treeview-menu">
					<li class="{{ strpos(Request::url(), '/products/list') !== false ? 'active' : '' }}"><a href="{{route('listProducts')}}"><i class="fa fa-circle-o"></i>List product</a></li>
					<li class="{{ strpos(Request::url(), '/products/create-new-product') !== false ? 'active' : '' }}"><a href="{{route('getNewProduct')}}"><i class="fa fa-circle-o"></i> Create new product</a></li>
				</ul>
			</li>
        	<li class="{{ strpos(Request::url(), '/payment') !== false ? 'active' : '' }}"><a href="{{route('payment.index')}}"><i class="fa fa-credit-card"></i>Payment list</a></li>      	
      	</ul>
    </section>
    <!-- /.sidebar -->
</aside>