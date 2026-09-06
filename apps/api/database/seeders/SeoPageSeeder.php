<?php

namespace Database\Seeders;

use App\Models\SeoPage;
use Illuminate\Database\Seeder;

class SeoPageSeeder extends Seeder
{
    public function run(): void
    {
        $pages = [
            [
                'path' => '/',
                'title' => 'Mahardika Rafa — Systems Architect & Creative Full-Stack Engineer',
                'description' => 'Personal portfolio of Mahardika Rafa. Systems Architect and Creative Full-Stack Engineer designing resilient distributed platforms and modern digital experiences.',
                'canonical_url' => 'https://mahardika.dev',
                'og_image_path' => 'seo/og-home.webp',
                'robots' => 'index, follow',
                'structured_data' => [
                    '@context' => 'https://schema.org',
                    '@type' => 'Person',
                    'name' => 'Mahardika Rafa',
                    'jobTitle' => 'Systems Architect & Creative Full-Stack Engineer',
                    'url' => 'https://mahardika.dev',
                    'sameAs' => [
                        'https://github.com/mhrdkrafa',
                        'https://linkedin.com/in/mhrdkrafa',
                    ],
                ],
            ],
            [
                'path' => '/projects',
                'title' => 'Projects & Case Studies — Mahardika Rafa',
                'description' => 'Curated portfolio of enterprise platforms, real-time distributed systems, and experimental creative technology.',
                'canonical_url' => 'https://mahardika.dev/projects',
                'og_image_path' => 'seo/og-projects.webp',
                'robots' => 'index, follow',
                'structured_data' => [
                    '@context' => 'https://schema.org',
                    '@type' => 'CollectionPage',
                    'name' => 'Selected Architectural Works',
                    'description' => 'Case studies in systems architecture, real-time pipelines, and creative engineering.',
                ],
            ],
            [
                'path' => '/articles',
                'title' => 'Articles & Systems Engineering Notes — Mahardika Rafa',
                'description' => 'Architectural essays and engineering benchmarks covering Next.js 16, Laravel, Redis, and GSAP.',
                'canonical_url' => 'https://mahardika.dev/articles',
                'og_image_path' => 'seo/og-articles.webp',
                'robots' => 'index, follow',
                'structured_data' => [
                    '@context' => 'https://schema.org',
                    '@type' => 'Blog',
                    'name' => 'Engineering Notes & Insights',
                ],
            ],
        ];

        foreach ($pages as $page) {
            SeoPage::updateOrCreate(
                ['path' => $page['path']],
                $page
            );
        }
    }
}
