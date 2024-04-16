<?php

namespace App\Http\Controllers\Admin;

use App\Models\Country;
use App\Models\Promotion;
use App\Models\Slider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use App\Mail\ApproveBroker;
use App\Mail\DeclineIntroducingBroker;
use App\Models\Broker;
use App\Models\IntroducingBroker;
use App\Models\Note;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class AdminWebsiteController extends Controller
{

    public function get_countries(){
        $countries = Country::all();
        return $countries;
    }
    protected function url($ip)
    {
        return "http://www.geoplugin.net/php.gp?ip=$ip";
    }
    public function get_client_location(Request $request){
        $curl = curl_init();

        curl_setopt_array($curl, array(
        CURLOPT_URL => 'http://www.geoplugin.net/php.gp?ip='.$request->ip(),
        // CURLOPT_URL => 'http://www.geoplugin.net/php.gp?ip=41.66.128.0'.$request->ip(),

        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'GET',
		CURLOPT_SSL_VERIFYPEER => true,

        ));

        $res = curl_exec($curl);
		curl_close($curl);
        $res = unserialize($res);
        return $res;
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
        $promotion->exclude = $request->excludeCheck == 'false' ? 0 : 1;

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
        $promotion->exclude = $request->excludeCheck == 'false' ? 0 : 1;
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
    public function add_broker(Request $request){
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'link' => 'required',
            'status' => 'required',
        ]);
        if($validator->fails()){
            $response = ['status' => 422 , 'msg' => $validator->errors()->first(),'errors' => $validator->errors()];
            return $response;
        }
        $broker = new Broker();
        $broker->title = $request->title;
        $broker->link = $request->link;
        $broker->status = $request->status;
        $broker->short_description = $request->shortDescription;



        $file = $request->image;
        $filename = $file->getClientOriginalName();
        $image = date('His') . str_replace(' ','-',$filename);
        $destination_path = public_path().'/uploads';
        $file->move($destination_path, $image);
        $url = $image;

        $broker->image =$image;
        $broker->save();
        $response = ['status' => 200 ];
        return $response;
    }
    public function update_broker(Request $request){
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'link' => 'required',
            'status' => 'required',
        ]);
        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first(),'errors' => $validator->errors()];
            return $response;
        }
        $broker = Broker::where('id',$request->id)->first();
        $broker->title = $request->title;
        $broker->link = $request->link;
        $broker->status = $request->status;
        $broker->short_description = $request->shortDescription;

        if($broker->image != $request->image){
            $file = $request->image;
            $filename = $file->getClientOriginalName();
            $image = date('His') . str_replace(' ','-',$filename);
            $destination_path = public_path().'/uploads';
            $file->move($destination_path, $image);
            $url = $image;

            $broker->image =$image;
        }
        $broker->save();
        $response = ['status' => 200 ];
        return $response;
    }
    public function get_broker_by_id($id){
        $broker = Broker::where('id',$id)->first();
        return $broker;
    }
    public function get_all_brokers($status = 'all'){
        $broker = Broker::
        when($status != 'all' , function($query) use ($status){
            $query->where('status' , $status);
        })
        ->get();
        return $broker;
    }
    public function delete_broker($id){
        $broker = Broker::where('id',$id)->delete();
        return $broker;
    }


    // Sliders
    public function add_slider(Request $request){
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'image' => 'required',
            'type' => 'required',
            'status' => 'required',
        ]);
        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first(),'errors' => $validator->errors()];
            return $response;
        }
        $slider = new Slider();
        $slider->title = $request->title;
        $slider->type = $request->type;
        $slider->excluded = $request->excluded == 'false' ? 0 : 1;
        $slider->index = $request->index;
        $slider->content = $request->content;

        $file = $request->image;
        $filename = $file->getClientOriginalName();
        $image = date('His') . str_replace(' ','-',$filename);
        $destination_path = public_path().'/uploads';
        $file->move($destination_path, $image);
        $slider->image = $image;

        $slider->status = $request->status;
        if($slider->type == 2){
            $slider->countries = json_encode($request->selected_countries);
        }

        $slider->save();
        $response = ['status' => 200 ];
        return $response;
    }
    public function api_check(Request $request){
        return 'helo';
    }
    public function update_slider(Request $request){
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'image' => 'required',
            'type' => 'required',
            'status' => 'required',
        ]);
        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first(),'errors' => $validator->errors()];
            return $response;
        }
        $slider = Slider::where('id',$request->id)->first();
        $slider->title = $request->title;
        $slider->type = $request->type;
        $slider->excluded = $request->excluded == 'false' ? 0 : 1;
        $slider->content = $request->content;
        $slider->index = $request->index;
        $slider->status = $request->status;
        if($slider->type == 2){
            $slider->countries = json_encode($request->selected_countries);
        }

        if($slider->image != $request->image){
            $file = $request->image;
            $filename = $file->getClientOriginalName();
            $image = date('His') . str_replace(' ','-',$filename);
            $destination_path = public_path().'/uploads';
            $file->move($destination_path, $image);
            $url = $image;

            $slider->image =$image;
        }

        $slider->save();
        $response = ['status' => 200 ];
        return $response;
    }
    public function get_slider_by_id(Request $request){
        $slider = Slider::where('id',$request->id)->first();
        return $slider;
    }
    public function get_all_sliders(Request $request){
        $sliders = [];
        $sliders = Slider::orderBy('index' , 'asc')->get();
    //     foreach($sliders as $i => $s){
    //         foreach($sliders as $j => $s1){
    //             if($s1->index > $s->index){

    //                 $temp = $sliders[$i];
    //                 $sliders[$i] = $sliders[$j];
    //                 $sliders[$j] = $temp;
    //             }
    //         }
    //    }


        return  $sliders;
    }
    public function delete_slider(Request $request){
        $slider = Slider::where('id',$request->id)->delete();
        return $slider;
    }

    public function get_home_sliders(Request $request)
{
    $position = $this->get_client_location($request);

    $slidersQuery = Slider::leftJoin('country', function ($join) {
        $join->on('country.name', '=', DB::raw("IFNULL(JSON_UNQUOTE(JSON_EXTRACT(sliders.countries, '$[0].name')), '')"));
    })->where(function ($query) use ($position) {
        $query->where('sliders.type', 1)->where('sliders.status', 1)
            ->orWhere(function ($query) use ($position) {
                $query->where('sliders.type', 2)->where('sliders.status', 1)
                    ->where(function ($query) use ($position) {
                        $query->where('sliders.excluded', 1)
                            ->whereNotExists(function ($query) use ($position) {
                                $query->select(DB::raw(1))
                                    ->from('country')
                                    ->whereRaw('JSON_SEARCH(sliders.countries, "one", ?)', [$position['geoplugin_countryName']]);
                            })
                            ->orWhereExists(function ($query) use ($position) {
                                $query->select(DB::raw(1))
                                    ->from('country')
                                    ->whereRaw('JSON_SEARCH(sliders.countries, "one", ?)', [$position['geoplugin_countryName']]);
                            });
                    });
            });
    });

    $sliders = $slidersQuery->orderBy('sliders.index', 'asc')->get();

    $response = ['status' => 200, 'sliders' => $sliders];
    return $response;
}

    public function addNote (Request $request){
        $note = new Note();
        $note->author_id = Auth::user()->id;
        $note->client_id = $request->client_id;
        $note->note = $request->note;
        $note->save();

        $notes = Note::where('client_id' , $request->client_id)->with('author')->get();

        return ['notes' => $notes , 'status' => 200];
    }

    public function getNotes ($client){

        $notes = Note::where('client_id' , $client)->with('author')->get();

        return ['notes' => $notes , 'status' => 200];
    }


    public function getIntroducingBrokerRequets (){
        $requests = IntroducingBroker::with('client')->whereStatus('pending')->get();
        return $requests;
    }

    public function ApproveIntroducingBroker ($id){
        $ib = IntroducingBroker::whereId($id)->with('client')->first();
        if($ib){
            Mail::to($ib->client?->email)->send(new ApproveBroker($ib));
            $ib->status = 'active';
            $ib->save();
            return ['status' => 200 , 'ib' => $ib];
        }else{
            return ['status' => 403 , 'ib' => $ib];
        }
    }
    public function DeclineIntroducingBroker ($id){
        $ib = IntroducingBroker::whereId($id)->with('client')->first();
        if($ib){
            Mail::to($ib->client?->email)->send(new DeclineIntroducingBroker($ib));
            $ib->delete();
            return ['status' => 200 , 'ib' => $ib];
        }else{
            return ['status' => 403 , 'ib' => $ib];
        }
    }


}
