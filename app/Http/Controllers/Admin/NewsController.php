<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class NewsController extends Controller
{
    public function addnewpost(Request $request){
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'image' => 'required',
            'body' => 'required',
            'status' => 'required',
        ]);
        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first()];
            return $response;
        }else{
        $image = 'noimage.png';
            if ($request->image) {
                $file = $request->image;
                $filename = $file->getClientOriginalName();
                $image = date('His') . str_replace(' ','-',$filename);
                $destination_path = public_path().'/uploads';
                $file->move($destination_path, $image);
            }
        $post = new Post();
        $post->title = $request->title;
        $post->slug = str_replace(" ", "-", $request->title);
        $post->body= $request->body;
        $post->image = $image;
        $post->status = $request->status;
        $post->feature = $request->feature == 'false' ? 0 : 1;;
        $post->save();
            $response = ['status' => 200 , 'msg' => 'Post Created Successfully.'];
            return $response;
        }
    }
    public function get_allposts(){
        $posts = Post::all();
        return $posts;
    }
    public function get_posts(Request $request){
        $posts = Post::where('status',1)->orderBy('id', 'DESC')->limit(50)->get();
        return $posts;
    }
    public function get_feature_post(Request $request){
        $posts = Post::where('status',1)->where('feature',1)->first();
        return $posts;
    }
    public function get_feature_posts(){
        $posts = Post::where('status',1)->where('feature',1)->orderBy('id', 'DESC')->limit(5)->get();
        return $posts;
    }
    public function get_post_by_id($id){
        $post = Post::find($id);
        return $post;
    }

    public function update_post(Request $request){
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'image' => 'required',
            'body' => 'required',
            'status' => 'required',
        ]);
        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first()];
            return $response;
        }else{
        $post = Post::find($request->id);
        if($post->image != $request->image){
            $file = $request->image;
            $filename = $file->getClientOriginalName();
            $image = date('His') . str_replace(' ','-',$filename);
            $destination_path = public_path().'/uploads';
            $file->move($destination_path, $image);
            $url = $image;
            $post->image =$image;
        }
        $post->title = $request->title;
        $post->slug = str_replace(" ", "-", $request->title);
        $post->body= $request->body;

        $post->status = $request->status;
        $post->feature = $request->feature == 'false' ? 0 : 1;;
        $post->save();
            $response = ['status' => 200 , 'msg' => 'Post Updated Successfully.'];
            return $response;
        }
    }
    public function delete_post($id){
        $post = Post::find($id);
        $post->delete();
    }
    public function get_post_by_slug($slug){
        $post = Post::where('slug',$slug)->first();
        return $post;
    }
}
