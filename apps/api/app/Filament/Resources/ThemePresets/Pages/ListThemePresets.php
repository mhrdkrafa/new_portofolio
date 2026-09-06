<?php

namespace App\Filament\Resources\ThemePresets\Pages;

use App\Filament\Resources\ThemePresets\ThemePresetResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListThemePresets extends ListRecords
{
    protected static string $resource = ThemePresetResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
