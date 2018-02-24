<?php

namespace App\Http\Middleware;

use Closure;

use Illuminate\Support\Facades\Auth;

class CheckAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next){
        $response = $next($request);
        if(!Auth::check() || ( Auth::check() && Auth::user()->is_admin == 0 )){
            // Auth::logout();
            return redirect('/');
        }
        return $response;
    }

}
