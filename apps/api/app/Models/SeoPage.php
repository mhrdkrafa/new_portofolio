<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SeoPage extends Model
{
    use HasFactory;

    protected $fillable = [
        'path',
        'title',
        'description',
        'canonical_url',
        'og_image_path',
        'robots',
        'structured_data',
    ];

    protected $casts = [
        'structured_data' => 'array',
    ];
}
