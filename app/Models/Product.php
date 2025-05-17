<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;

class Product extends Model
{
    protected $table = 'products';
    use HasFactory;

    protected $fillable = [
        'id',
        'name',
        'category_id',
        'sub_category_id',
        'status',
    ];

    public function validate($input)
    {
        return Validator::make($input, [
            'name' => 'required|string',
            'category_id' => 'required',
            'sub_category_id' => 'required',
        ]);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    public function sub_category()
    {
        return $this->belongsTo(subCategory::class);
    }
}
