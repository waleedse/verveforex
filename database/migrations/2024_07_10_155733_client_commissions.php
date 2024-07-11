<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('client_commissions', function (Blueprint $table) {
            $table->id();
            $table->integer("client_id");
            $table->integer("client_broker_id");
            $table->float("commission");
            $table->string("payment_type");
            $table->text("notes")->nullable();
            $table->integer("created_by");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('client_commissions');
    }
};
