<?php

namespace App\Filament\Resources\AuditLogs\Schemas;

use Filament\Forms\Components\KeyValue;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class AuditLogForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('action')
                    ->disabled(),
                TextInput::make('subject_type')
                    ->disabled(),
                TextInput::make('ip_address')
                    ->disabled(),
                TextInput::make('user_agent')
                    ->disabled(),
                KeyValue::make('old_values')
                    ->disabled()
                    ->columnSpanFull(),
                KeyValue::make('new_values')
                    ->disabled()
                    ->columnSpanFull(),
            ]);
    }
}
