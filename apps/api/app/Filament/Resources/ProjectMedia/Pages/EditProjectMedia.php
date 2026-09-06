<?php

namespace App\Filament\Resources\ProjectMedia\Pages;

use App\Filament\Resources\ProjectMedia\ProjectMediaResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditProjectMedia extends EditRecord
{
    protected static string $resource = ProjectMediaResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
