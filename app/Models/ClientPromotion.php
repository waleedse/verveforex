<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClientPromotion extends Model
{
    use HasFactory;

    public function promotion(){
        return $this->belongsTo(Promotion::class , "promotion_id" , 'id');
    }
}
