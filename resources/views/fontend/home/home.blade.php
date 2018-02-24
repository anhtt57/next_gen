@extends('fontend.layouts.template')

@section('content')
    <div class="title">
        <h2>Danh sách game</h2>
    </div>
    <ul class="list-game xs-block-grid-2 md-block-grid-4 sm-block-grid-2 lg-block-grid-4">
        @foreach($apps as $app)
            <li>
                <a href="#">
                    <img src="{{$app->app_image}}">
                    <p class="info_game">
                        <span class="title-game">{{$app->game_name}}</span>
                    </p>
                </a>
                <a href="{{route('PM_Cardloaded', $app->id)}}" class="bt_nap">Nạp ngay</a>
            </li>
        @endforeach
    </ul>
@endsection