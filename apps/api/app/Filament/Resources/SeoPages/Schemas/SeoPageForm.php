<?php

namespace App\Filament\Resources\SeoPages\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class SeoPageForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('path')
                    ->label('Page Route Path (e.g. /, /projects, /articles)')
                    ->required()
                    ->unique(ignoreRecord: true)
                    ->maxLength(255),
                TextInput::make('title')
                    ->label('Meta Title')
                    ->required()
                    ->maxLength(255),
                Textarea::make('description')
                    ->label('Meta Description')
                    ->rows(3)
                    ->columnSpanFull(),
                TextInput::make('canonical_url')
                    ->url()
                    ->maxLength(255),
                Select::make('robots')
                    ->options([
                        'index, follow' => 'index, follow (Default)',
                        'noindex, follow' => 'noindex, follow',
                        'noindex, nofollow' => 'noindex, nofollow',
                    ])
                    ->default('index, follow'),
                FileUpload::make('og_image_path')
                    ->label('OpenGraph Social Preview Image (1200x630)')
                    ->image()
                    ->disk('public')
                    ->directory('seo/og')
                    ->columnSpanFull(),
                Textarea::make('structured_data')
                    ->label('Schema.org JSON-LD Structured Data')
                    ->rows(6)
                    ->columnSpanFull()
                    ->formatStateUsing(fn ($state) => is_array($state) ? json_encode($state, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) : $state)
                    ->dehydrateStateUsing(fn ($state) => is_string($state) ? json_decode($state, true) : $state),
            ]);
    }
}
