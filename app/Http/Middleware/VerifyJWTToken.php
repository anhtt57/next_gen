<?php

namespace App\Http\Middleware;

use Closure;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;

class VerifyJWTToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        try {
            if (!$request->header('session-id')) {
                return response([
                    'status' => 402,
                    'message' => 'session-id header is required',
                ], 200);
            }
            $token = $request->header('x-token');
            $sessionId = $request->header('session-id');
            $user = JWTAuth::toUser($token);
            if ($user->session_id != $sessionId) {
                return response([
                    'status' => 503,
                    'message' => 'session-id not match',
                ], 200);
            }
        } catch (JWTException $e) {
            if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException) {
                return response([
                    'status' => 500,
                    'message' => 'token_expired',
                ], 200);
            } else if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenInvalidException) {
                return response([
                    'status' => 500,
                    'message' => 'token_invalid',
                ], 200);
            } else {
                return response([
                    'status' => 500,
                    'message' => 'Token is required',
                ], 200);
            }
        }
        return $next($request);
    }
}
