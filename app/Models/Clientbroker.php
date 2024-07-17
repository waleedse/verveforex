<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Clientbroker extends Model
{
    use HasFactory;

    public $table = 'client_brokers';

    public function broker(){
        return $this->belongsTo(Broker::class , "broker_id" , "id");
    }
    public function client(){
        return $this->belongsTo(User::class , "client_id" , "id");
    }
}
