<?php

namespace App\Filament\Resources\AuditLogs;

namespace App\Filament\Resources\AuditLogs\Tables;

use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class AuditLogsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('user.name')
                    ->label('Initiator')
                    ->placeholder('System')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('action')
                    ->badge()
                    ->color('info')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('subject_type')
                    ->label('Target Entity')
                    ->formatStateUsing(fn (?string $state): string => $state ? class_basename($state) : '-')
                    ->searchable(),
                TextColumn::make('subject_id')
                    ->label('Entity ID')
                    ->sortable(),
                TextColumn::make('ip_address')
                    ->fontFamily('mono')
                    ->searchable(),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable(),
            ])
            ->defaultSort('created_at', 'desc')
            ->filters([
                SelectFilter::make('action')
                    ->options([
                        'initialize_system' => 'Initialize System',
                        'create' => 'Create',
                        'update' => 'Update',
                        'delete' => 'Delete',
                    ]),
            ])
            ->recordActions([])
            ->toolbarActions([]);
    }
}
