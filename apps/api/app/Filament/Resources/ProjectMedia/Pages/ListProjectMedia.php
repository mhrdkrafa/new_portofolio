<?php

namespace App\Filament\Resources\ProjectMedia\Pages;

use App\Filament\Resources\ProjectMedia\ProjectMediaResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListProjectMedia extends ListRecords
{
    protected static string $resource = ProjectMediaResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
