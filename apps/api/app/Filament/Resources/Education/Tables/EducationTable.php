<?php

namespace App\Filament\Resources\Education\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class EducationTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('institution')
                    ->searchable()
                    ->sortable()
                    ->weight('bold'),
                TextColumn::make('degree')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('field_of_study')
                    ->searchable(),
                TextColumn::make('start_date')
                    ->date('Y')
                    ->sortable(),
                TextColumn::make('end_date')
                    ->date('Y')
                    ->placeholder('Present'),
                TextColumn::make('sort_order')
                    ->numeric()
                    ->sortable(),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
