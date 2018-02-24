@extends('cms.layouts.template')

@section('content')
	@include('cms.components.Gridview', ['header', 'data' => $payments, 'title'])
@endsection
