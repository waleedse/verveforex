<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Clientbroker;
use App\Models\IntroducingBroker;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ClientController extends Controller
{
    public function getClients(){
        $clients = User::role("client")->with("country")->get();
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

}
