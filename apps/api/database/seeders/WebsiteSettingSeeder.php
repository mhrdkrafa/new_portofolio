<?php

namespace Database\Seeders;

use App\Models\WebsiteSetting;
use Illuminate\Database\Seeder;

class WebsiteSettingSeeder extends Seeder
{
    public function run(): void
    {
        $settings = [
            [
                'key' => 'site_title',
                'value' => 'Mahardika Rafa — Systems Architect & Creative Full-Stack Engineer',
                'type' => 'text',
                'group' => 'general',
            ],
            [
                'key' => 'site_tagline',
                'value' => 'Designing resilient distributed systems and crafting immersive digital artifacts.',
                'type' => 'text',
                'group' => 'general',
            ],
            [
                'key' => 'contact_email',
                'value' => 'contact@mahardika.dev',
                'type' => 'text',
                'group' => 'contact',
            ],
            [
                'key' => 'live_status_message',
                'value' => 'Available for Q3 Architectural Consulting & High-Impact Engineering',
                'type' => 'text',
                'group' => 'banner',
            ],
            [
                'key' => 'banner_enabled',
                'value' => '1',
                'type' => 'boolean',
                'group' => 'banner',
            ],
            [
                'key' => 'default_theme',
                'value' => 'obsidian-dark',
                'type' => 'text',
                'group' => 'appearance',
            ],
            [
                'key' => 'webgl_background_enabled',
                'value' => '1',
                'type' => 'boolean',
                'group' => 'appearance',
            ],
            [
                'key' => 'sound_fx_enabled',
                'value' => '0',
                'type' => 'boolean',
                'group' => 'appearance',
            ],
        ];

        foreach ($settings as $setting) {
            WebsiteSetting::updateOrCreate(
                ['key' => $setting['key']],
                $setting
            );
        }
    }
}
