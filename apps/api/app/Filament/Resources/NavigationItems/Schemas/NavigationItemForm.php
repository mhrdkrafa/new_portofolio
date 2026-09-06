<?php

namespace App\Filament\Resources\NavigationItems\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class NavigationItemForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('parent_id')
                    ->label('Parent Item (Optional)')
                    ->relationship('parent', 'label')
                    ->searchable()
                    ->preload(),
                TextInput::make('label')
                    ->required()
                    ->maxLength(255),
                TextInput::make('url')
                    ->label('URL / Anchor (e.g. #projects, /articles)')
                    ->maxLength(255),
                TextInput::make('route_name')
                    ->label('Frontend Route Name (Optional)')
                    ->maxLength(255),
                Select::make('target')
                    ->options([
                        '_self' => 'Same Window (_self)',
                        '_blank' => 'New Tab (_blank)',
                    ])
                    ->default('_self'),
                TextInput::make('sort_order')
                    ->numeric()
                    ->default(0),
                Toggle::make('is_visible')
                    ->default(true),
            ]);
    }
}
