<?php

namespace App\Filament\Resources\Profiles\Schemas;

use Filament\Schemas\Schema;

class ProfileForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                \Filament\Forms\Components\TextInput::make('full_name')
                    ->required()
                    ->maxLength(255),
                \Filament\Forms\Components\TextInput::make('headline')
                    ->required()
                    ->maxLength(255),
                \Filament\Forms\Components\Textarea::make('bio')
                    ->required()
                    ->rows(4)
                    ->columnSpanFull(),
                \Filament\Forms\Components\FileUpload::make('avatar_path')
                    ->label('Profile Avatar')
                    ->image()
                    ->disk('public')
                    ->directory('profiles/avatars'),
                \Filament\Forms\Components\FileUpload::make('resume_path')
                    ->label('Resume / CV PDF')
                    ->acceptedFileTypes(['application/pdf'])
                    ->disk('public')
                    ->directory('profiles/resumes'),
                \Filament\Forms\Components\TextInput::make('location')
                    ->maxLength(255),
                \Filament\Forms\Components\Select::make('availability_status')
                    ->options([
                        'available' => 'Available for Q3 Consulting',
                        'busy' => 'Currently Engaged',
                        'unavailable' => 'Unavailable',
                    ])
                    ->default('available')
                    ->required(),
                \Filament\Forms\Components\TextInput::make('years_experience')
                    ->numeric()
                    ->default(8),
            ]);
    }
}
