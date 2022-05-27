<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;

class AuthController extends Controller
{
    //

    public function register(Request $request)
    {
        /**
         * validate user data
         */
        $data = $request->validate([
            'name' =>  ['required', 'string'],
            'email' => ['required', 'string', 'email', Rule::unique('users', 'id')],
            'password' => ['required', 'confirmed', Password::min(8)->mixedCase()->numbers()->symbols()]
        ]);
        /**
         * persist user in the database
         */
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password'])
        ]);
        $token = $user->createToken('main')->plainTextToken;
        return response([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'string', 'email', Rule::exists("users", "email")],
            'password' => ['required'],
            'remember' => 'boolean'
        ]);
        $remember = $credentials['remember'] ?? false; //Null coalescing
        unset($credentials['remember']);
        if (!Auth::attempt($credentials, $remember)) {
            return response(
                [
                    'error' => 'The provided credentials are not correct'
                ],
                442
            );
        }
        $user = Auth::user();
        /** @var \App\Models\User $user **/
        $token = $user->createToken('main')->plainTextToken;
        return response([
            'token' => $token,
            'user' => $user
        ]);
    }
}
