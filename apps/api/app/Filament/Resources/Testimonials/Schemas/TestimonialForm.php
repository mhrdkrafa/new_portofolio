<?php

namespace App\Filament\Resources\Testimonials\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class TestimonialForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->label('Client / Author Name')
                    ->required()
                    ->maxLength(255),
                TextInput::make('role')
                    ->label('Role / Title')
                    ->maxLength(255),
                TextInput::make('company')
                    ->label('Organization / Company')
                    ->maxLength(255),
                FileUpload::make('avatar_path')
                    ->image()
                    ->disk('public')
                    ->directory('testimonials/avatars'),
                TextInput::make('rating')
                    ->numeric()
                    ->minValue(1)
                    ->maxValue(5)
                    ->default(5),
                TextInput::make('sort_order')
                    ->numeric()
                    ->default(0),
                Toggle::make('is_published')
                    ->default(true),
                Textarea::make('quote')
                    ->label('Endorsement / Review')
                    ->required()
                    ->rows(4)
                    ->columnSpanFull(),
            ]);
    }
}
