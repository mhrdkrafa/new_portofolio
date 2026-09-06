<?php

namespace App\Filament\Resources\ProjectMedia\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class ProjectMediaTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('file_path')
                    ->disk('public')
                    ->label('Preview'),
                TextColumn::make('project.title')
                    ->searchable()
                    ->sortable()
                    ->weight('bold'),
                TextColumn::make('type')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'image' => 'info',
                        'video' => 'warning',
                        'code' => 'success',
                        'interactive' => 'primary',
                        default => 'gray',
                    }),
                TextColumn::make('title')
                    ->searchable()
                    ->placeholder('No title'),
                IconColumn::make('is_featured')
                    ->boolean()
                    ->sortable(),
                TextColumn::make('sort_order')
                    ->numeric()
                    ->sortable(),
            ])
            ->filters([
                SelectFilter::make('project_id')
                    ->relationship('project', 'title'),
                SelectFilter::make('type')
                    ->options([
                        'image' => 'Image',
                        'video' => 'Video',
                        'code' => 'Code',
                        'interactive' => 'Interactive',
                    ]),
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
