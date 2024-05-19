<?php

use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('dashboard-private.{id}', function ($user, $id) {
    return $user->id == $id;
});
