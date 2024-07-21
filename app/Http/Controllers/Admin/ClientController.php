<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Broker;
use App\Models\Clientbroker;
use App\Models\ClientCommission;
use App\Models\ClientPromotion;
use App\Models\IntroducingBroker;
use App\Models\User;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function getClients(){
        $clients = User::role("client")->with("country", "introducing_broker")->get();
        return $clients;
    }

    public function createIntroducingBroker(Request $request){
        $ib = new IntroducingBroker();
        $ib->client_id = Auth()->user()->id;
        $ib->refferal_link = rand(10000, 9999999);
        $ib->status = 'pending';
        $ib->save();

        if($request->brokers){
            foreach($request->brokers as $b){
                $ib_broker = new Clientbroker();
                $ib_broker->client_id = Auth()->user()->id;
                $ib_broker->broker_id = $b['id'];
                $ib_broker->status = 'active';
                $ib_broker->save();
            }
        }
    }

    public function getIntroducingBrokers(){
        $clients = User::role("client")->with("country")->withWhereHas('introducing_broker')->get();
        return $clients;
    }

    public function getIbWithRefferals($id){
        $user = User::whereId($id)->with('referrals','introducing_broker', 'country')->first();
        if($user->referrals){
            $user->referrals = $this->getAllrefferalUsers($user->referrals);
        }
        return $user;
    }

    public function getAllrefferalUsers($users){
        if($users){
            foreach($users as $u){
                if($u->ib){
                    $refferals = User::where("ib" , $u->id)->with('introducing_broker', 'country')->get();
                    if($refferals){
                       $u->refferals = $this->getAllrefferalUsers($refferals);
                    }
                }
            }
        }
        return $users;
    }

    public function get_client_brokers(){
        $user = Auth()->user();

        $brokers = Broker::where("status" , 1)
        // with(['clientBroker' => function ($query) use ($user) {
        //     $query->where("introducing_broker_id" , $user?->introducingBroker?->id);
        // }])
        ->get();
        return $brokers;
    }

    public function get_client_broker_links($id = null) {
        $user = $id ? User::find($id) : Auth()->user();

        $clientbrokers = Clientbroker::with("broker")->where("client_id", $user->id)->where("status" , 'active')->get();
        return ['status' => 200 , "brokers" => $clientbrokers];
    }

    public function update_client_broker_link(Request $request){
        // $user = Auth()->user();
        $clientbroker = Clientbroker::find($request->id);
        $clientbroker->broker_link = $request->link;
        $clientbroker->save();
        return ['status' => 200 , "brokers" => $clientbroker];
    }

    public function get_client_broker_commissions(){
        $user = Auth()->user();
        $commissions = ClientCommission::
        whereHas('clientBroker' , function ($query) use ($user) {
            $query->where("client_id" , $user->id);
        })
        ->with(["clientBroker" => function ($query) use ($user) {
            $query->with("broker");
        }])
        ->get();
        return ['status' => 200 , "commissions" => $commissions];
    }

    public function createClientBroker(Request $request) {
        $broker = Clientbroker::where("client_id" , Auth()->user()->id)->where("broker_id" , $request->brokerId)->first();
        if($broker){
            return ["status" => 401 ,"message" => "Broker claim request is already requested."];
        }
        $ib_broker = new Clientbroker();
        $ib_broker->client_id = Auth()->user()->id;
        $ib_broker->broker_id = $request->brokerId;
        $ib_broker->broker_signup_id = $request->broker_signup_id;
        $ib_broker->status = 'pending';
        $ib_broker->save();
        return ["status" => 200 , "clientbroker" => $ib_broker];
    }

    public function getClientBrokerRequests() {
        $clientbrokers = Clientbroker::with(["broker","client"])->where("status", "pending")->get();
        return ["status" => 200 , "clientbrokers" => $clientbrokers];
    }

    public function approveBrokerRequests($id) {
        $clientbroker = Clientbroker::find($id);
        $clientbroker->status = 'active';
        $clientbroker->save();
        return ["status" => 200 , "message" => "Approved"];
    }

    public function disApproveBrokerRequests($id) {
        $clientbroker = Clientbroker::find($id);
        $clientbroker->delete();
        return ["status" => 200 , "message" => "Deleted"];
    }

    public function add_client_promotion(Request $request){
        $user = Auth()->user();
        $clientPromotion = new ClientPromotion();
        $clientPromotion->client_id = $user->id;
        $clientPromotion->promotion_id = $request->id;
        $clientPromotion->save();
        return ["status" => 200 , "clientPromotion" => $clientPromotion];
    }

    public function get_client_promotion($id){
        $clientPromotion = ClientPromotion::where("client_id" , $id)->with("promotion")->get();
        return ["status" => 200 , "clientPromotion" => $clientPromotion];
    }

    public function deactivatePromotion($id){
        $clientPromotion = ClientPromotion::find($id);
        $clientPromotion->delete();
        return ["status" => 200 , "message" => "Success"];
    }

    public function get_client_dashboard_stats(){
        $user = Auth()->user();
        $commissions = ClientCommission::
        whereHas('clientBroker' , function ($query) use ($user) {
            $query->where("client_id" , $user->id);
        })
        ->sum("commission");
        $brokers = Clientbroker::where("client_id" , $user->id)->count();
        $promotion = ClientPromotion::where("client_id" , $user->id)->with("promotion")->first();
        return ["commissions" => $commissions , "brokers" => $brokers , "promotion" => $promotion];

    }
}
