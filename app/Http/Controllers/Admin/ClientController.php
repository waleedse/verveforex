<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function getClients(){
        $clients = User::role("client")->with("country")->get();
        return $clients;
    }
}
