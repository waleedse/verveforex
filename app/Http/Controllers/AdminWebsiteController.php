<?php

namespace App\Http\Controllers;

use App\Models\Country;
use App\Models\Promotion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AdminWebsiteController extends Controller
{

    public function get_countries(){
        $countries = Country::all();
        return $countries;
    }

    public function get_promotions(Request $request){
        $position = $this->get_client_location($request);
        if($position['geoplugin_countryName']){
            $promotions = [];
            $country = Country::where('name',$position['geoplugin_countryName'])->first();
            $all_countries_promotions = Promotion::where('type',1)->where('status',1)->get();
            $specific_promotions = Promotion::where('type',2)->where('status',1)->get();

            if(sizeof($specific_promotions) > 0){
                foreach($specific_promotions as $sp){
                    $sp_countries = json_decode($sp->countries);
                    if($sp_countries){
                        foreach($sp_countries as $spc){
                            if($spc->id == $country->id){
                                array_push($promotions,$sp);
                            }
                        }
                    }
                }
            }
            if(sizeof($all_countries_promotions) > 0){
                foreach($all_countries_promotions as $ac){
                    array_push($promotions,$ac);
                }
            }
            $response = ['status' => 200 , 'promotion' => $promotions , 'country' => $position['geoplugin_countryName'] , 'continent' =>
            // 'Africa'
            $position['geoplugin_continentName']
        ];
            return $response;

        }else{
            $promotions = Promotion::where('type',1)->where('status',1)->get();
            $response = ['status' => 200 , 'promotion' => $promotions , 'country' => $position['geoplugin_countryName']];
            return $response;
        }

    }

    public function add_promotion(Request $request){
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'link' => 'required',
            'type' => 'required',
            'status' => 'required',
        ]);
        if($validator->fails()){
            $response = ['status' => 422 , 'msg' => $validator->errors()->first(),'errors' => $validator->errors()];
            return $response;
        }
        $promotion = new Promotion();
        $promotion->title = $request->title;
        $promotion->link = $request->link;
        $promotion->type = $request->type;
        $promotion->status = $request->status;
        $promotion->short_description = $request->shortDescription;
        $promotion->exclude = $request->excludeCheck == false ? 0 : 1;

        if($promotion->type == 2){
            $promotion->countries = json_encode($request->selectedCountries);
        }

        $file = $request->image;
        $filename = $file->getClientOriginalName();
        $image = date('His') . str_replace(' ','-',$filename);
        $destination_path = public_path().'/uploads';
        $file->move($destination_path, $image);
        $url = $image;

        $promotion->image =$image;
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
        $promotion->short_description = $request->shortDescription;
        $promotion->exclude = $request->excludeCheck == false ? 0 : 1;
        if($promotion->type == 2){
            $promotion->countries = json_encode($request->selectedCountries);
        }
        if($promotion->image != $request->image){
            $file = $request->image;
            $filename = $file->getClientOriginalName();
            $image = date('His') . str_replace(' ','-',$filename);
            $destination_path = public_path().'/uploads';
            $file->move($destination_path, $image);
            $url = $image;

            $promotion->image =$image;
        }
        $promotion->save();
        $response = ['status' => 200 ];
        return $response;
    }
    public function get_promotion_by_id($id){
        $promotion = Promotion::where('id',$id)->first();
        return $promotion;
    }
    public function get_all_promotions($status = 'all'){
        $promotion = Promotion::
        when($status != 'all' , function($query) use ($status){
            $query->where('status' , $status);
        })
        ->get();
        return $promotion;
    }
    public function delete_promotion($id){
        $promotion = Promotion::where('id',$id)->delete();
        return $promotion;
    }
}
