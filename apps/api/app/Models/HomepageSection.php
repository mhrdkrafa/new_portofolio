<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HomepageSection extends Model
{
    use HasFactory;

    protected $fillable = [
        'key',
        'type',
        'title',
        'subtitle',
        'config',
        'is_enabled',
        'sort_order',
    ];

    protected $casts = [
        'config' => 'array',
        'is_enabled' => 'boolean',
        'sort_order' => 'integer',
    ];
}
