<?php

use App\Models\TrafficData;
use Illuminate\Support\Facades\Artisan;

Artisan::command('app:generate-traffic-data', function () {
    $vehicleCount = rand(1, 50);
    $averageSpeed = rand(20, 80);
    $trafficLightStatus = ['green', 'yellow', 'red'][rand(0, 2)];

    $traficData = TrafficData::create([
        'vehicle_count' => $vehicleCount,
        'average_speed' => $averageSpeed,
        'traffic_light_status' => $trafficLightStatus,
    ]);

    event(new \App\Events\TrafficData($traficData));

    $this->info('Simulated traffic data generated successfully.');
})->purpose('Insert data in traffic table')->everyMinute();
