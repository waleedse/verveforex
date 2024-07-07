<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Broker extends Model
{
    use HasFactory;

    public function clientBroker(){
        return $this->belongsTo(Clientbroker::class , "id" , "broker_id");
    }
}
