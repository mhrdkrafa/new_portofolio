<?php

namespace App\Filament\Resources\ProjectMedia;

use App\Filament\Resources\ProjectMedia\Pages\CreateProjectMedia;
use App\Filament\Resources\ProjectMedia\Pages\EditProjectMedia;
use App\Filament\Resources\ProjectMedia\Pages\ListProjectMedia;
use App\Filament\Resources\ProjectMedia\Schemas\ProjectMediaForm;
use App\Filament\Resources\ProjectMedia\Tables\ProjectMediaTable;
use App\Models\ProjectMedia;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class ProjectMediaResource extends Resource
{
    protected static ?string $model = ProjectMedia::class;

    protected static string | \UnitEnum | null $navigationGroup = 'Identity & Layout';

    protected static ?int $navigationSort = 4;

    protected static ?string $navigationLabel = 'Project Media';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedPhoto;

    public static function form(Schema $schema): Schema
    {
        return ProjectMediaForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return ProjectMediaTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListProjectMedia::route('/'),
            'create' => CreateProjectMedia::route('/create'),
            'edit' => EditProjectMedia::route('/{record}/edit'),
        ];
    }
}
