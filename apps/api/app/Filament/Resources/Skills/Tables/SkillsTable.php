<?php

namespace App\Filament\Resources\Skills\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class SkillsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->searchable()
                    ->sortable()
                    ->weight('bold'),
                TextColumn::make('group_name')
                    ->label('Category')
                    ->badge()
                    ->sortable(),
                TextColumn::make('proficiency')
                    ->suffix('%')
                    ->sortable(),
                IconColumn::make('is_featured')
                    ->boolean()
                    ->sortable(),
                TextColumn::make('sort_order')
                    ->numeric()
                    ->sortable(),
            ])
            ->filters([
                SelectFilter::make('group_name')
                    ->options([
                        'Backend & Systems' => 'Backend & Systems',
                        'Frontend & Motion' => 'Frontend & Motion',
                        'Database & Infra' => 'Database & Infra',
                        'Architecture & DevOps' => 'Architecture & DevOps',
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
