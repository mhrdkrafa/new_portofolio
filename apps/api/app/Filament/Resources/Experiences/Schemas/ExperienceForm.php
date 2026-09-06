<?php

namespace App\Filament\Resources\Experiences\Schemas;

use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class ExperienceForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('profile_id')
                    ->relationship('profile', 'full_name')
                    ->default(fn () => \App\Models\Profile::first()?->id)
                    ->required(),
                TextInput::make('company_name')
                    ->label('Company Name')
                    ->required()
                    ->maxLength(255),
                TextInput::make('position')
                    ->label('Position / Role')
                    ->required()
                    ->maxLength(255),
                TextInput::make('location')
                    ->maxLength(255),
                Select::make('employment_type')
                    ->options([
                        'Full-time' => 'Full-time',
                        'Contract' => 'Contract / Consulting',
                        'Part-time' => 'Part-time',
                        'Freelance' => 'Freelance',
                    ])
                    ->default('Full-time'),
                DatePicker::make('start_date')
                    ->required(),
                DatePicker::make('end_date')
                    ->disabled(fn ($get) => (bool) $get('is_current')),
                Toggle::make('is_current')
                    ->label('Currently Working Here')
                    ->live()
                    ->default(false),
                TextInput::make('sort_order')
                    ->numeric()
                    ->default(0),
                Textarea::make('description')
                    ->required()
                    ->rows(4)
                    ->columnSpanFull(),
            ]);
    }
}
