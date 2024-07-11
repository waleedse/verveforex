<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Broker;
use App\Models\Clientbroker;
use App\Models\ClientCommission;
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
                $ib_broker->introducing_broker_id = $ib->id;
                $ib_broker->broker_id = $b['id'];
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

        $brokers = Broker::
        with(['clientBroker' => function ($query) use ($user) {
            $query->where("introducing_broker_id" , $user?->introducingBroker?->id);
        }])
        ->get();
        return $brokers;
    }

    public function get_client_broker_links($id) {
        $user = $id ? User::find($id) : Auth()->user();

        $clientbrokers = Clientbroker::with("broker")->where("introducing_broker_id", $user->introducing_broker->id)->get();
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
        with(['clientBroker' => function ($query) use ($user) {
            $query->where("introducing_broker_id" , $user->introducing_broker->id);
        }])
        ->get();
        return ['status' => 200 , "commissions" => $commissions];
    }
}
