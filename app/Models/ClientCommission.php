<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClientCommission extends Model
{
    use HasFactory;

    public function author(){
        return $this->belongsTo(User::class , "created_by" , "id");
    }

    public function clientBroker(){
        return $this->belongsTo(Clientbroker::class , "client_broker_id" , 'id');
    }
}
