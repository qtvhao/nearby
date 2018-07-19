<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class RecsController extends Controller
{
	public function index(Request$request) {
		dd(User::all());
		return view('recs.index');
    }

	public function seed() {
		header("Access-Control-Allow-Origin: *");

		$image          = request( 'image' );
		$name           = request( 'name' );
		$age            = request( 'age' );
		$image_contents = file_get_contents( $image );
		$fileName       = md5( $image_contents ) . '.png';
		$path           = 'public/' . $fileName;
		Storage::put( $path, $image_contents );
		$url = url('public/storage/'.$fileName);

		if ( User::where('image_url',$url)->exists() ) {
			$user = User::where('image_url',$url)->first();
		}else {
			$user = new User();
		}
		$user->image_url = $url;
		$user->age = $age;
		$user->name = $name;
		$user->email = str_random(32).'@localhost';
		$user->password = str_random(32);
		$user->saveOrFail();
		$user->email = "{$user->getKey()}@localhost";
		$user->saveOrFail();
		dd( compact( 'image','name','url','age') );
    }
}
