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
        Schema::create('traffic_data', function (Blueprint $table) {
            $table->id();
            $table->integer('vehicle_count');
            $table->integer('average_speed');
            $table->enum('traffic_light_status', ['green', 'yellow', 'red']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('traffic_data');
    }
};
