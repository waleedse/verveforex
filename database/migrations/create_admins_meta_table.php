<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdminsMetaTable extends Migration
{
    public function up()
    {
        Schema::create('admins_meta', function (Blueprint $table) {
            $table->id();
            $table->string('user_id');
            $table->string('token');
            $table->string('user_ip');
            $table->string('token_validation');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('admins_meta');
    }
}
