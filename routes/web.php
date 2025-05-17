<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\SupportController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\SubCategoryController;
use App\Http\Controllers\ProductController;


Route::get('/login', [LoginController::class,'login'] )->name('login');
Route::post('/login', [LoginController::class, 'doLogin'] );
Route::post('/logout', [LoginController::class, 'logout'] );


Route::view('admin/{any}', 'singleApp')->where('any', '.*')->middleware('auth');

Route::prefix('api')->middleware('auth')->group(function (){
    Route::post('required_data', [SupportController::class, 'requiredData']);
    Route::get('configurations', [SupportController::class, 'getConfigurations']);
    Route::get('/dashboard', [DashboardController::class, 'dashboardData']);

    Route::resource('categories', CategoryController::class);
    Route::resource('sub_categories', SubCategoryController::class);
    Route::resource('product', ProductController::class);
});