<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Validator;
use App\Repositories\Auth\LoginRepositoryInterface;
use App\Helpers\Functions;
use App\Notifications\ApiResetPassword;
use JWTAuth;

class UserController extends ApiController
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    private $user;

    public function __construct(Response $response, Request $request, LoginRepositoryInterface $user)
    {
        parent::__construct($response, $request);
        $this->user = $user;
    }

    /**
     * Silence register or login
     *
     * @return response
     */
    public function postLogin(Request $request)
    {
        Config::set('auth.providers.users.model', User::class);
        Config::set('auth.providers.users.table', 'users');
        Config::set('jwt.user', User::class);

        $validator = Validator::make($request->all(), [
            'device_id' => 'required',
            'user_name' => 'required',
            'password' => 'required',
            'confirm_update' => 'required'
        ]);
        if ($validator->fails()) {
            return response([
                'status' => 402,
                'message' => $validator->messages()->first(),
                'data' => (object)[]
            ], 200);
        }

        if (!$request->header('session-id')) {
            return response([
                'status' => 402,
                'message' => 'session-id header is required',
                'data' => (object)[]
            ], 200);
        }
        $updateDeviceId = $this->user->removeAllDeviceId($request['device_id']);
        $sessionId = $request->header('session-id');
        $data = ['session_id' => $sessionId, 'device_id' => $request['device_id']];
        $credentials = $request->only('user_name', 'password');
        try {
            $confirmUpdate = $request['confirm_update'];
            $token = JWTAuth::attempt($credentials);
            if (!$token) {
                return response([
                    'status' => 400,
                    'message' => 'credential not match',
                    'data' => (object)[]
                ], 200);
            }
            $user = JWTAuth::toUser($token);
            if ($user->device_id != $request['device_id'] && $user->device_id != null && $confirmUpdate == 0) { // return message confirm login when account is logging in other device
                return response([
                    'status' => 201,
                    'message' => 'user is logging in other device',
                    'data' => (object)[]
                ], 200);
            }
            $user = $this->user->update($user->id, $data); // update new session when login
            $token = JWTAuth::fromUser($user);
            return response([
                'status' => 200,
                'message' => 'success',
                'data' => ['token' => $token, 'user' => $user]
            ], 200);
        } catch (JWTException $e) {
            return response([
                'status' => 500,
                'message' => 'could_not_create_token',
                'data' => (object)[]
            ], 200);
        }
    }


    /**
     * login with facebook
     *
     * @return response
     */
    public function postLoginFb(UserRequest $request)
    {
        Config::set('auth.providers.users.model', User::class);
        Config::set('auth.providers.users.table', 'users');
        Config::set('jwt.user', User::class);
        if (!$request->header('session-id')) {
            return response([
                'status' => 402,
                'message' => 'session-id header is required',
                'data' => (object)[]
            ], 200);
        }

        $validator = Validator::make($request->all(), [
            'device_id' => 'required',
            'facebook_id' => 'required',
            'confirm_update' => 'required'
        ]);
        if ($validator->fails()) {
            return response([
                'status' => 402,
                'message' => $validator->messages()->first(),
                'data' => (object)[]
            ], 200);
        }
        $updateDeviceId = $this->user->removeAllDeviceId($request['device_id']);
        $sessionId = $request->header('session-id');
        try {
            $data = $request->all();
            foreach ($data as $key => $value) {
                if (empty($value))
                    unset($data[$key]);
            }
            $data['session_id'] = $sessionId;
            $user = $this->user->findItemBy(['facebook_id' => $request['facebook_id']]);
            if (empty($user)) {  // create if empty
                $user = $this->user->create($data);
            } else {
                if ($user->device_id != $request['device_id'] && $user->device_id != null && $request['confirm_update'] == 0) { // return message confirm login when account is logging in other device
                    return response([
                        'status' => 201,
                        'message' => 'user is logging in other device',
                        'data' => (object)[]
                    ], 201);
                }
                $user = $this->user->update($user->id, $data); // update new session when login
            }
            $token = JWTAuth::fromUser($user);
            return response([
                'status' => 200,
                'message' => 'success',
                'data' => ['token' => $token, 'user' => $user]
            ], 200);
        } catch (JWTException $e) {
            return response([
                'status' => 500,
                'message' => 'could_not_create_token',
                'data' => (object)[]
            ], 200);
        }
    }

    /**
     * register User
     *
     * @return response
     */
    public function register(UserRequest $request)
    {
        if (isset($request->validator) && $request->validator->fails()) {
            return response([
                'status' => 402,
                'message' => $request->validator->messages()->first(),
                'data' => (object)[]
            ], 200);
        }
        $data = $request->all();
        if (!$this->checkUnique($data['user_name'])) {
            return response([
                'status' => 402,
                'message' => 'user name exist',
                'data' => (object)[]
            ], 200);
        }
        $data['password'] = \Hash::make($data['password']);
        $user = $this->user->create($data);
        return response([
            'status' => 200,
            'message' => 'success',
            'data' => ['token' => JWTAuth::fromUser($user), 'user' => $user]
        ], 200);
    }

    /**
     * get current user
     *
     * @return response
     */
    public function getProfile(Request $request)
    {
        $user = $this->user->findUserByToken($request->header('x-token'));
        return response([
            'status' => 200,
            'message' => 'success',
            'data' => !empty($user) ? $user : (object)[]
        ], 200);
    }

    /**
     * unlink facebook
     *
     * @return response
     */
    public function unlinkFacebook(Request $request)
    {
        $user = $this->user->findUserByToken($request->header('x-token'));
        $data = [
            'facebook_id' => null
        ];
        $update = $this->user->update($user->id, $data);
        if (!$update) {
            return response([
                'status' => 400,
                'message' => 'errors',
                'data' => (object)[]
            ], 200);
        }
        return response([
            'status' => 200,
            'message' => 'success',
            'data' => $update
        ], 200);
    }

    /**
     * link facebook
     *
     * @return response
     */
    public function linkFacebook(Request $request)
    {
        $user = $this->user->findUserByToken($request->header('x-token'));
        $update = $this->user->update($user->id, ['facebook_id' => $request['facebook_id']]);
        if (!$update) {
            return response([
                'status' => 400,
                'message' => 'errors',
                'data' => (object)[]
            ], 200);
        }
        return response([
            'status' => 200,
            'message' => 'success',
            'data' => $update
        ], 200);
    }

    public function postUpdateProfile(Request $request)
    {
    }

    public function resetPassword()
    {
        $email = trim($this->request->email);
        $user_name = trim($this->request->user_name);
        if ($email && $email != '' && $user_name && $user_name != '') {
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                return response([
                    'status' => 403,
                    'message' => 'Email is invalid',
                    'data' => (object)[]
                ]);
            }
            $user = $this->user->findUser($user_name, $email);
            if ($user) {
                $new_password = Functions::generateRandomString(8);
                $data = array(
                    'password' => bcrypt($new_password),
                    'session_id' => null,
                    'device_id' => null
                );
                $this->user->update($user->id, $data);
                // Mail::to($user->email)->send(new OrderConfirm($order));
                $user->notify(new ApiResetPassword($new_password));
                return response([
                    'status' => 200,
                    'message' => 'Check your email to find new password',
                    'data' => (object)[]
                ]);
            }
            return response([
                'status' => 403,
                'message' => 'User not found',
                'data' => (object)[]
            ]);
        }
        return response([
            'status' => 403,
            'message' => 'Email and username is required',
            'data' => (object)[]
        ]);

    }
    private function checkUnique($userName)
    {
        return $this->user->checkUnique($userName);
    }

    public function checkDeviceId(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'device_id' => 'required',
        ]);
        $deviceId = $request['device_id'];
        $sessionId = $request->header('session-id');
        if ($validator->fails()) {
            return response([
                'status' => 402,
                'message' => $validator->messages()->first(),
                'data' => (object)[]
            ], 200);
        }
        $user = $this->user->checkUserByDeviceId($deviceId);
        if ($user) {
            $user = $this->user->update($user->id, ['session_id' => $sessionId]);
            $token = JWTAuth::fromUser($user);
            return response([
                'status' => 200,
                'message' => 'success',
                'data' => ['token' => $token, 'user' => $user]
            ], 200);
        }
        return response([
            'status' => 201,
            'message' => 'success',
            'data' => (object)[]
        ], 200);
    }

    public function logout(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'device_id' => 'required',
        ]);
        if ($validator->fails()) {
            return response([
                'status' => 402,
                'message' => $validator->messages()->first(),
                'data' => (object)[]
            ], 200);
        }
        $user = $this->user->checkUserByDeviceId($request['device_id']);
        $user = $this->user->update($user->id, ['device_id' => null, 'session_id' => null]); // update new session when login
        return response([
            'status' => 200,
            'message' => 'success',
            'data' => (object)[]
        ], 200);
    }
}
