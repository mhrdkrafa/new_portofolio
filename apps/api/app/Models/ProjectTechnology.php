<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class ProjectTechnology extends Model
{
    use HasFactory;

    protected $table = 'project_technologies';

    protected $fillable = [
        'name',
        'slug',
        'icon_key',
    ];

    public function projects(): BelongsToMany
    {
        return $this->belongsToMany(
            Project::class,
            'project_technology',
            'project_technology_id',
            'project_id'
        );
    }
}
