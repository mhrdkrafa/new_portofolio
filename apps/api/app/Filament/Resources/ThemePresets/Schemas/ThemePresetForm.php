<?php

namespace App\Filament\Resources\ThemePresets\Schemas;

use Filament\Forms\Components\KeyValue;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

class ThemePresetForm
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
                Toggle::make('is_active')
                    ->label('Available on Frontend Theme Switcher')
                    ->default(true),
                Toggle::make('is_default')
                    ->label('Default Portfolio Theme')
                    ->default(false),
                KeyValue::make('config')
                    ->label('Theme Palette Tokens (Hex / HSL Colors)')
                    ->keyLabel('Token (e.g. background, accent_primary)')
                    ->valueLabel('Color Value')
                    ->columnSpanFull()
                    ->required(),
            ]);
    }
}
