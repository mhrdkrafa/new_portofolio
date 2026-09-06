<?php

namespace App\Filament\Resources\WebsiteSettings\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class WebsiteSettingForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('key')
                    ->required()
                    ->unique(ignoreRecord: true)
                    ->maxLength(255),
                Select::make('group')
                    ->options([
                        'general' => 'General',
                        'contact' => 'Contact',
                        'banner' => 'Banner',
                        'appearance' => 'Appearance',
                    ])
                    ->required()
                    ->default('general'),
                Select::make('type')
                    ->options([
                        'text' => 'Text',
                        'boolean' => 'Boolean',
                        'number' => 'Number',
                        'json' => 'JSON',
                    ])
                    ->required()
                    ->default('text'),
                Textarea::make('value')
                    ->rows(4)
                    ->columnSpanFull(),
            ]);
    }
}
