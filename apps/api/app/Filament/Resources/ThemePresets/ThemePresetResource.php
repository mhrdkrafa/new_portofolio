<?php

namespace App\Filament\Resources\ThemePresets;

use App\Filament\Resources\ThemePresets\Pages\CreateThemePreset;
use App\Filament\Resources\ThemePresets\Pages\EditThemePreset;
use App\Filament\Resources\ThemePresets\Pages\ListThemePresets;
use App\Filament\Resources\ThemePresets\Schemas\ThemePresetForm;
use App\Filament\Resources\ThemePresets\Tables\ThemePresetsTable;
use App\Models\ThemePreset;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class ThemePresetResource extends Resource
{
    protected static ?string $model = ThemePreset::class;

    protected static string | \UnitEnum | null $navigationGroup = 'Configuration';

    protected static ?int $navigationSort = 2;

    protected static ?string $navigationLabel = 'Theme Presets';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedSwatch;

    public static function form(Schema $schema): Schema
    {
        return ThemePresetForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return ThemePresetsTable::configure($table);
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
            'index' => ListThemePresets::route('/'),
            'create' => CreateThemePreset::route('/create'),
            'edit' => EditThemePreset::route('/{record}/edit'),
        ];
    }
}
