<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Project extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'category_id',
        'title',
        'slug',
        'short_description',
        'description',
        'role',
        'year',
        'client_name',
        'live_url',
        'source_url',
        'featured',
        'status',
        'published_at',
        'sort_order',
        'seo_title',
        'seo_description',
    ];

    protected function casts(): array
    {
        return [
            'featured' => 'boolean',
            'published_at' => 'datetime',
            'year' => 'integer',
            'sort_order' => 'integer',
        ];
    }

    public function scopePublished(Builder $query): Builder
    {
        return $query->where('status', 'published')
            ->whereNotNull('published_at')
            ->where('published_at', '<=', now());
    }

    public function scopeFeatured(Builder $query): Builder
    {
        return $query->where('featured', true);
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function media(): HasMany
    {
        return $this->hasMany(ProjectMedia::class)->orderBy('sort_order');
    }

    public function links(): HasMany
    {
        return $this->hasMany(ProjectLink::class)->orderBy('sort_order');
    }

    public function technologies(): BelongsToMany
    {
        return $this->belongsToMany(
            ProjectTechnology::class,
            'project_technology',
            'project_id',
            'project_technology_id'
        );
    }
}
