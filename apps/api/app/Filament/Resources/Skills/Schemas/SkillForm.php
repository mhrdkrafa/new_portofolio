<?php

namespace App\Filament\Resources\Skills\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

class SkillForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->required()
                    ->maxLength(255)
                    ->live(onBlur: true)
                    ->afterStateUpdated(fn ($set, ?string $state) => $set('slug', Str::slug($state))),
                TextInput::make('slug')
                    ->required()
                    ->unique(ignoreRecord: true)
                    ->maxLength(255),
                Select::make('group_name')
                    ->label('Skill Category')
                    ->options([
                        'Backend & Systems' => 'Backend & Systems',
                        'Frontend & Motion' => 'Frontend & Motion',
                        'Database & Infra' => 'Database & Infra',
                        'Architecture & DevOps' => 'Architecture & DevOps',
                    ])
                    ->default('Backend & Systems')
                    ->required(),
                TextInput::make('proficiency')
                    ->label('Proficiency (%)')
                    ->numeric()
                    ->minValue(1)
                    ->maxValue(100)
                    ->default(90),
                TextInput::make('icon_key')
                    ->label('Icon Key (e.g., laravel, nextjs, redis)')
                    ->maxLength(255),
                TextInput::make('sort_order')
                    ->numeric()
                    ->default(0),
                Toggle::make('is_featured')
                    ->default(true),
            ]);
    }
}
