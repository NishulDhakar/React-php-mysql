<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    use HasFactory;

    // Optional: specify which fields can be mass-assigned
    protected $fillable = [
        'title',
        'content',
    ];
}
