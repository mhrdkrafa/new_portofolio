<?php

namespace App\Filament\Resources\Projects\Schemas;

use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

class ProjectForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->required()
                    ->maxLength(255)
                    ->live(onBlur: true)
                    ->afterStateUpdated(fn ($set, ?string $state) => $set('slug', Str::slug($state))),
                TextInput::make('slug')
                    ->required()
                    ->unique(ignoreRecord: true)
                    ->maxLength(255),
                Select::make('category_id')
                    ->relationship('category', 'name')
                    ->searchable()
                    ->preload()
                    ->required(),
                TextInput::make('role')
                    ->maxLength(255),
                TextInput::make('year')
                    ->numeric()
                    ->default((int) date('Y')),
                TextInput::make('client_name')
                    ->maxLength(255),
                Textarea::make('short_description')
                    ->required()
                    ->rows(2)
                    ->columnSpanFull(),
                Textarea::make('description')
                    ->required()
                    ->rows(6)
                    ->columnSpanFull(),
                TextInput::make('live_url')
                    ->url()
                    ->maxLength(255),
                TextInput::make('source_url')
                    ->url()
                    ->maxLength(255),
                Select::make('technologies')
                    ->multiple()
                    ->relationship('technologies', 'name')
                    ->preload(),
                Select::make('status')
                    ->options([
                        'draft' => 'Draft',
                        'published' => 'Published',
                        'archived' => 'Archived',
                    ])
                    ->default('draft')
                    ->required(),
                Toggle::make('featured')
                    ->default(false),
                DateTimePicker::make('published_at'),
                TextInput::make('sort_order')
                    ->numeric()
                    ->default(0),
                TextInput::make('seo_title')
                    ->maxLength(255)
                    ->columnSpanFull(),
                Textarea::make('seo_description')
                    ->rows(2)
                    ->columnSpanFull(),
            ]);
    }
}
