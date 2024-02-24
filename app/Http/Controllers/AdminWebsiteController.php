<?php

namespace App\Http\Controllers;

use App\Promotion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AdminWebsiteController extends Controller
{
    public function add_promotion(Request $request){
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'link' => 'required',
            'type' => 'required',
            'status' => 'required',
        ]);
        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first(),'errors' => $validator->errors()];
            return $response;
        }
        $promotion = new Promotion();
        $promotion->title = $request->title;
        $promotion->link = $request->link;
        $promotion->type = $request->type;
        $promotion->status = $request->status;
        if($promotion->type == 2){
            $promotion->countries = json_encode($request->selected_countries);
        }

        $promotion->save();
        $response = ['status' => 200 ];
        return $response;
    }
    public function update_promotion(Request $request){
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'link' => 'required',
            'type' => 'required',
            'status' => 'required',
        ]);
        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first(),'errors' => $validator->errors()];
            return $response;
        }
        $promotion = Promotion::where('id',$request->id)->first();
        $promotion->title = $request->title;
        $promotion->link = $request->link;
        $promotion->type = $request->type;
        $promotion->status = $request->status;
        if($promotion->type == 2){
            $promotion->countries = json_encode($request->selected_countries);
        }

        $promotion->save();
        $response = ['status' => 200 ];
        return $response;
    }
    public function get_promotion_by_id(Request $request){
        $promotion = Promotion::where('id',$request->id)->first();
        return $promotion;
    }
    public function get_all_promotions(Request $request){
        $promotion = Promotion::all();
        return $promotion;
    }
    public function delete_promotion(Request $request){
        $promotion = Promotion::where('id',$request->id)->delete();
        return $promotion;
    }
}
