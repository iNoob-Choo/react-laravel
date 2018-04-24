<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\User;

class UserController extends Controller
{
  public function apiIndex()
  {
    $users = User::get();
    return $users;
  }


  public function store(Request $request)
  {
    $user = new User();
    $user->name = $request->name;
    $user->email =$request->email;
    $user->password = Hash::make($request->password);
    $success = $user->save();
    return response()->json([
      'success' => $success,
      'user' =>$user,
    ]);
  }

  public function index()
  {
    return view('users.index');
  }

  public function create()
  {
    return view('users.create');
  }
}
