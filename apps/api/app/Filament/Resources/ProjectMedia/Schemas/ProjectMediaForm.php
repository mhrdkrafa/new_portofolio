<?php

namespace App\Filament\Resources\ProjectMedia\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class ProjectMediaForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('project_id')
                    ->relationship('project', 'title')
                    ->searchable()
                    ->preload()
                    ->required(),
                Select::make('type')
                    ->options([
                        'image' => 'Image Specimen',
                        'video' => 'Video Preview / Capture',
                        'code' => 'Code / Diagram',
                        'interactive' => 'Interactive Demo',
                    ])
                    ->default('image')
                    ->required(),
                FileUpload::make('file_path')
                    ->disk('public')
                    ->directory('projects/media')
                    ->required(),
                FileUpload::make('thumbnail_path')
                    ->image()
                    ->disk('public')
                    ->directory('projects/thumbnails'),
                TextInput::make('title')
                    ->maxLength(255),
                TextInput::make('caption')
                    ->maxLength(255),
                TextInput::make('sort_order')
                    ->numeric()
                    ->default(0),
                Toggle::make('is_featured')
                    ->default(false),
            ]);
    }
}
