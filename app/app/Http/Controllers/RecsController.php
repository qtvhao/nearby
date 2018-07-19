<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class RecsController extends Controller
{
	public function index(Request$request) {
		dd(User::all());
		return view('recs.index');
    }

	public function seed() {
		header("Access-Control-Allow-Origin: *");

		$image = request( 'image' );
		$name = request( 'name' );
		$age = request( 'age' );
		dd( compact( 'image','name','age') );
    }
}
