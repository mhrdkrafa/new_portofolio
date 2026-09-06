<?php

namespace Database\Seeders;

use App\Models\HomepageSection;
use Illuminate\Database\Seeder;

class HomepageSectionSeeder extends Seeder
{
    public function run(): void
    {
        $sections = [
            [
                'key' => 'hero',
                'type' => 'hero',
                'title' => 'Mahardika Rafa',
                'subtitle' => 'Systems Architect & Creative Full-Stack Engineer',
                'config' => [
                    'show_live_status' => true,
                    'status_text' => 'Available for Q3 Architectural Consulting',
                    'enable_magnetic_buttons' => true,
                    'webgl_backdrop' => true,
                ],
                'is_enabled' => true,
                'sort_order' => 1,
            ],
            [
                'key' => 'projects',
                'type' => 'projects',
                'title' => 'Selected Architectural Works',
                'subtitle' => 'High-throughput platforms, real-time distributed pipelines, and immersive digital artifacts.',
                'config' => [
                    'display_mode' => 'grid',
                    'limit' => 6,
                    'filter_enabled' => true,
                ],
                'is_enabled' => true,
                'sort_order' => 2,
            ],
            [
                'key' => 'experience',
                'type' => 'experience',
                'title' => 'Career & Engineering Timeline',
                'subtitle' => 'Proven track record of designing fault-tolerant systems and leading creative technical initiatives.',
                'config' => [
                    'show_company_logos' => true,
                    'layout' => 'chronological',
                ],
                'is_enabled' => true,
                'sort_order' => 3,
            ],
            [
                'key' => 'skills',
                'type' => 'skills',
                'title' => 'Technical Mastery & Systems Core',
                'subtitle' => 'Proficiency matrix across distributed systems, modern frontend architectures, and DevOps.',
                'config' => [
                    'group_by_category' => true,
                    'show_level_bars' => true,
                ],
                'is_enabled' => true,
                'sort_order' => 4,
            ],
            [
                'key' => 'services',
                'type' => 'services',
                'title' => 'Specialized Engineering Services',
                'subtitle' => 'Targeted high-impact solutions for ambitious digital products and teams.',
                'config' => [
                    'columns' => 3,
                ],
                'is_enabled' => true,
                'sort_order' => 5,
            ],
            [
                'key' => 'testimonials',
                'type' => 'testimonials',
                'title' => 'Endorsements & Peer Reviews',
                'subtitle' => 'What founders, engineering directors, and product leaders say about working together.',
                'config' => [
                    'display_mode' => 'carousel',
                ],
                'is_enabled' => true,
                'sort_order' => 6,
            ],
            [
                'key' => 'articles',
                'type' => 'articles',
                'title' => 'Engineering Thoughts & Notes',
                'subtitle' => 'Deep dives into systems architecture, frontend performance, and accessible creative engineering.',
                'config' => [
                    'limit' => 3,
                ],
                'is_enabled' => true,
                'sort_order' => 7,
            ],
            [
                'key' => 'contact',
                'type' => 'contact',
                'title' => 'Initiate Dialogue',
                'subtitle' => 'Have an ambitious project, technical challenge, or leadership role? Let’s connect.',
                'config' => [
                    'show_direct_email' => true,
                    'enable_turnstile' => true,
                ],
                'is_enabled' => true,
                'sort_order' => 8,
            ],
        ];

        foreach ($sections as $section) {
            HomepageSection::updateOrCreate(
                ['key' => $section['key']],
                $section
            );
        }
    }
}
