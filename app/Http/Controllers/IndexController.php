<?php 

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Inertia\Inertia; 

class IndexController extends Controller 
{
    public function Index() {
        return Inertia('Index');
    }
}