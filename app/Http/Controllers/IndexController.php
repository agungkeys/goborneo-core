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
        Meta::addMeta('keywords', 'goborneo, visit kalimantan, kalimantan tourism info, traveling to kalimantan');
        Meta::addMetaProperty('fb:app_id', '');
        Meta::addMetaProperty('og:locale"', 'Id_ID');
        Meta::addMetaProperty('og:title', 'Home - GoBorneo - Beautiful Kalimantan');
        Meta::addMetaProperty('og:description', 'goborneo is a platform for supporting everything about tourism in kalimantan');
        Meta::addMetaProperty('og:type', 'website');
        Meta::addMetaProperty('og:site_name', 'goborneo');
        Meta::addMetaProperty('og:url', 'https://www.goborneo.id');
        Meta::addMetaProperty('og:image', 'https://res.cloudinary.com/do5w0oe22/image/upload/v1674557601/images/favicon_kv0qm4.png');
        Meta::addMetaProperty('og:image:url', 'https://res.cloudinary.com/do5w0oe22/image/upload/v1674557601/images/favicon_kv0qm4.png');
        Meta::addMetaProperty('og:image:type', 'png');
        Meta::addMetaProperty('og:image:width', '48');
        Meta::addMetaProperty('og:image:height', '48');
        Meta::addMetaProperty('og:image:alt', 'GoBorneo Sebagai Pusat Informasi Pariwisata Kalimantan');
        Meta::addMetaProperty('og:twitter:card', 'Summary');
        Meta::addMetaProperty('og:twitter:title', 'GoBorneo - Beautiful Kalimantan');
        Meta::addMetaProperty('og:twitter:description', 'goborneo is a platform for supporting everything about tourism in kalimantan');
        Meta::addMetaProperty('og:twitter:site', '@goborneo.id');

        
        return Inertia::render('Index', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }
}
