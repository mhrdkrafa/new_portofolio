<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\Category;
use App\Models\Tag;
use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    public function run(): void
    {
        $tags = [
            'System Architecture' => 'system-architecture',
            'Next.js 16' => 'nextjs-16',
            'Laravel 13' => 'laravel-13',
            'GSAP & Motion' => 'gsap-and-motion',
            'Performance' => 'performance',
            'Microservices' => 'microservices',
        ];

        $tagModels = [];
        foreach ($tags as $name => $slug) {
            $tagModels[$slug] = Tag::firstOrCreate(
                ['slug' => $slug],
                ['name' => $name]
            );
        }

        $category = Category::firstOrCreate(
            ['slug' => 'engineering'],
            [
                'name' => 'Engineering',
                'description' => 'In-depth engineering notes, benchmarks, and architecture decisions.',
                'sort_order' => 1,
            ]
        );

        $article1 = Article::updateOrCreate(
            ['slug' => 'architecting-low-latency-headless-portfolios'],
            [
                'category_id' => $category->id,
                'title' => 'Architecting Low-Latency Headless Portfolios with Next.js 16 & Laravel',
                'excerpt' => 'An exploration into pairing an enterprise PHP API backend with edge-rendered Next.js 16 App Router for sub-100ms LCP and zero-compromise interactive storytelling.',
                'body' => 'High performance interactive portfolios demand ruthless optimization across both frontend rendering pipelines and backend data delivery. In this architectural breakdown, we analyze cache invalidation strategies using Redis tag eviction, typed contracts between Next.js and Laravel, and fluid GSAP choreographies.',
                'cover_path' => 'articles/covers/headless-architecture.webp',
                'status' => 'published',
                'published_at' => now()->subDays(14),
                'reading_time' => 7,
                'seo_title' => 'Architecting Low-Latency Headless Portfolios — Mahardika Rafa',
                'seo_description' => 'System architecture blueprint for high-performance interactive web experiences.',
            ]
        );
        $article1->tags()->sync([
            $tagModels['system-architecture']->id,
            $tagModels['nextjs-16']->id,
            $tagModels['laravel-13']->id,
            $tagModels['performance']->id,
        ]);

        $article2 = Article::updateOrCreate(
            ['slug' => 'accessible-motion-choreography-with-gsap'],
            [
                'category_id' => $category->id,
                'title' => 'Accessible Motion Choreography: Crafting 120 FPS Web Experiences',
                'excerpt' => 'How to design sophisticated scroll-driven animations with GSAP ScrollTrigger while strictly honoring prefers-reduced-motion and CPU-constrained hardware.',
                'body' => 'Motion should elevate narrative context, not cause vestibular discomfort or tank frame budgets. Learn how to construct deterministic GSAP timelines that gracefully degrade into instant state shifts when users signal reduced motion preferences.',
                'cover_path' => 'articles/covers/motion-choreography.webp',
                'status' => 'published',
                'published_at' => now()->subDays(5),
                'reading_time' => 5,
                'seo_title' => 'Accessible Motion Choreography with GSAP — Mahardika Rafa',
                'seo_description' => 'Designing fluid, high-performance web animations with full accessibility compliance.',
            ]
        );
        $article2->tags()->sync([
            $tagModels['gsap-and-motion']->id,
            $tagModels['performance']->id,
        ]);
    }
}
