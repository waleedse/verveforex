<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasPermissions;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable , HasRoles , HasPermissions;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
        'country',
        'phone',
        'ib'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $IbUsers = [];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function country(){
        return $this->belongsTo(Country::class , "country" , "id");
    }
    public function introducing_broker(){
        return $this->belongsTo(IntroducingBroker::class , "id" , "client_id");
    }

    // User's Ib
    public function introducingBroker(){
        return $this->belongsTo(IntroducingBroker::class , "ib" , "client_id");
    }

    public function referrals()
    {
        return $this->hasMany(User::class, 'ib');
    }

    public function allReferrals()
    {
        $refferals = $this->referrals();
        return $refferals;
    }

}
