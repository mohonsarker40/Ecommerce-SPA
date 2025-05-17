<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\subCategory;
use App\Supports\Helper;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    use Helper;

    public function dashboardData(){
        $user = auth()->user();

        $data['category'] = Category::where('status', 1)->count();
        $data['sub_category'] = subCategory::where('status', 1)->count();

        return $this->returnData(2000, $data);
    }
}
