<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Meta;

class IndexController extends Controller
{
    public function index(Request $request)
    {
        Meta::addMetaTitle('Home - GoBorneo - Beautiful Kalimantan');
        Meta::addMeta('title', 'GoBorneo - Beautiful Kalimantan');
        Meta::addMeta('description', 'goborneo is a platform for supporting everything about tourism in kalimantan');
        return Inertia::render('Index', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }
}
