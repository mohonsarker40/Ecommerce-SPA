<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;

class subCategory extends Model
{
    protected $table = 'sub_categories';
    use HasFactory;

    protected $fillable = [
        'id',
        'name',
        'category_id',
        'status'
    ];

    public function validate($input)
    {
        return Validator::make($input, [
            'name' => 'required|string',
            'category_id' => 'required',
        ]);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
