<?php

namespace App\Filament\Resources\HomepageSections\Schemas;

use Filament\Forms\Components\KeyValue;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class HomepageSectionForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('key')
                    ->required()
                    ->unique(ignoreRecord: true)
                    ->maxLength(255),
                Select::make('type')
                    ->options([
                        'hero' => 'Hero Banner',
                        'projects' => 'Selected Projects',
                        'experience' => 'Experience Timeline',
                        'education' => 'Education',
                        'skills' => 'Skills Matrix',
                        'services' => 'Services Consulting',
                        'testimonials' => 'Testimonials Carousel',
                        'articles' => 'Articles & Notes',
                        'contact' => 'Contact Section',
                    ])
                    ->required(),
                TextInput::make('title')
                    ->maxLength(255),
                TextInput::make('subtitle')
                    ->maxLength(255),
                Toggle::make('is_enabled')
                    ->label('Section Visible on Frontend')
                    ->default(true),
                TextInput::make('sort_order')
                    ->numeric()
                    ->default(0),
                KeyValue::make('config')
                    ->label('Section Configuration & Feature Flags (JSON)')
                    ->keyLabel('Setting Key')
                    ->valueLabel('Value')
                    ->columnSpanFull(),
            ]);
    }
}
