<?php

namespace App\Filament\Resources\Education\Schemas;

use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class EducationForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('profile_id')
                    ->relationship('profile', 'full_name')
                    ->default(fn () => \App\Models\Profile::first()?->id)
                    ->required(),
                TextInput::make('institution')
                    ->label('Institution / University')
                    ->required()
                    ->maxLength(255),
                TextInput::make('degree')
                    ->maxLength(255),
                TextInput::make('field_of_study')
                    ->maxLength(255),
                DatePicker::make('start_date'),
                DatePicker::make('end_date'),
                TextInput::make('sort_order')
                    ->numeric()
                    ->default(0),
                Textarea::make('description')
                    ->rows(4)
                    ->columnSpanFull(),
            ]);
    }
}
