<?php

namespace App\Filament\Resources\SeoPages\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class SeoPagesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('path')
                    ->searchable()
                    ->sortable()
                    ->weight('bold'),
                TextColumn::make('title')
                    ->searchable()
                    ->limit(40),
                TextColumn::make('robots')
                    ->badge(),
                ImageColumn::make('og_image_path')
                    ->disk('public')
                    ->label('OG Image'),
                TextColumn::make('updated_at')
                    ->dateTime('M d, Y')
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
