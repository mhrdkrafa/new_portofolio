<?php

namespace Database\Seeders;

use App\Models\ThemePreset;
use Illuminate\Database\Seeder;

class ThemePresetSeeder extends Seeder
{
    public function run(): void
    {
        $presets = [
            [
                'name' => 'Obsidian Dark',
                'slug' => 'obsidian-dark',
                'config' => [
                    'mode' => 'dark',
                    'background' => '#050505',
                    'surface' => '#0e0f12',
                    'surface_elevated' => '#16181d',
                    'border' => '#232730',
                    'text_primary' => '#f1f5f9',
                    'text_secondary' => '#94a3b8',
                    'text_muted' => '#64748b',
                    'accent_primary' => '#00f5d4',
                    'accent_secondary' => '#7b2cbf',
                ],
                'is_active' => true,
                'is_default' => true,
            ],
            [
                'name' => 'Gallery Light',
                'slug' => 'gallery-light',
                'config' => [
                    'mode' => 'light',
                    'background' => '#f8f9fa',
                    'surface' => '#ffffff',
                    'surface_elevated' => '#f1f3f5',
                    'border' => '#e2e8f0',
                    'text_primary' => '#090a0f',
                    'text_secondary' => '#475569',
                    'text_muted' => '#94a3b8',
                    'accent_primary' => '#00b4d8',
                    'accent_secondary' => '#5a189a',
                ],
                'is_active' => true,
                'is_default' => false,
            ],
            [
                'name' => 'Cyber Accent',
                'slug' => 'cyber-accent',
                'config' => [
                    'mode' => 'dark',
                    'background' => '#07090e',
                    'surface' => '#0f141f',
                    'surface_elevated' => '#182030',
                    'border' => '#2a364f',
                    'text_primary' => '#e2f1ff',
                    'text_secondary' => '#8ba3c7',
                    'text_muted' => '#4f6685',
                    'accent_primary' => '#00e5ff',
                    'accent_secondary' => '#ff007f',
                ],
                'is_active' => true,
                'is_default' => false,
            ],
            [
                'name' => 'Monochrome Minimal',
                'slug' => 'monochrome',
                'config' => [
                    'mode' => 'dark',
                    'background' => '#000000',
                    'surface' => '#111111',
                    'surface_elevated' => '#1a1a1a',
                    'border' => '#333333',
                    'text_primary' => '#ffffff',
                    'text_secondary' => '#aaaaaa',
                    'text_muted' => '#666666',
                    'accent_primary' => '#ffffff',
                    'accent_secondary' => '#cccccc',
                ],
                'is_active' => true,
                'is_default' => false,
            ],
        ];

        foreach ($presets as $preset) {
            ThemePreset::updateOrCreate(
                ['slug' => $preset['slug']],
                $preset
            );
        }
    }
}
