<?php

namespace App\Http\Controllers;

use App\Models\TrafficData;
use Illuminate\Support\Facades\Artisan;
use Inertia\Inertia;

class DashboardController extends Controller
{
    function index() {
        return Inertia::render('Dashboard');
    }

    public function test(){
        Artisan::call('app:generate-traffic-data');
        return response()->json(['app:generate-traffic-data #command executed']);
    }

    public function get_traffic_recent_data(){
        $res = TrafficData::orderBy('id', 'desc')
            ->limit(50)
            ->get();
        return response()->json([ 'data' => $res ]);
    }

    public function get_traffic_data(){
        $res = TrafficData::orderBy('id', 'desc')->get();
        return response()->json([ 'data' => $res ]);
    }
}
