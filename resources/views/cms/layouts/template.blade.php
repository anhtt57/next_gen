@include('cms.layouts.partials._header')
@include('cms.layouts.partials._sidebar')

<div class="content-wrapper">
	@include('cms.layouts.partials._breadcrumb')
	<section class="content">
		@yield('content')
	</section>
</div>
@include('cms.layouts.partials._footer')