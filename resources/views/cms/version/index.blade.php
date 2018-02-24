@extends('cms.layouts.template')

@section('content')
	@include('cms.components.Gridview', ['header', 'data' => $versions, 'title', 'system_list'])
@endsection
