<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Project;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        $catDistributed = Category::firstOrCreate(
            ['slug' => 'distributed-systems'],
            [
                'name' => 'Distributed Systems',
                'description' => 'High-throughput event-driven architectures, microservices, and consensus mechanisms.',
                'type' => 'project',
                'sort_order' => 1,
                'is_active' => true,
            ]
        );

        $catCreative = Category::firstOrCreate(
            ['slug' => 'creative-engineering'],
            [
                'name' => 'Creative Engineering',
                'description' => 'Tactile digital experiences, WebGL shaders, and high-performance interactive interfaces.',
                'type' => 'project',
                'sort_order' => 2,
                'is_active' => true,
            ]
        );

        Project::updateOrCreate(
            ['slug' => 'autonomous-core-ledger'],
            [
                'category_id' => $catDistributed->id,
                'title' => 'Autonomous Core Ledger',
                'short_description' => 'High-frequency event-sourced financial ledger handling transactional concurrency with Redis stream orchestrators and strict MySQL 8 normalization.',
                'description' => 'An enterprise-grade transaction processing engine capable of sub-millisecond settlement across distributed multi-region nodes. Built with strict idempotent dispatchers, cryptographic auditing, and zero-loss failover mechanisms.',
                'role' => 'Principal Systems Architect',
                'year' => 2026,
                'client_name' => 'Apex Financial Technology',
                'live_url' => 'https://ledger.mahardika.dev',
                'source_url' => 'https://github.com/mhrdkrafa/core-ledger',
                'featured' => true,
                'status' => 'published',
                'published_at' => now(),
                'sort_order' => 1,
                'seo_title' => 'Autonomous Core Ledger — Systems Architecture Case Study',
                'seo_description' => 'Deep architectural review of high-throughput distributed financial ledger engine.',
            ]
        );

        Project::updateOrCreate(
            ['slug' => 'cinematic-digital-portfolio'],
            [
                'category_id' => $catCreative->id,
                'title' => 'Cinematic Digital Portfolio',
                'short_description' => 'CMS-driven interactive digital identity system pairing Next.js 16 App Router with Laravel 13 API and GSAP kinetic choreography.',
                'description' => 'A bespoke editorial portfolio designed as an interactive showcase, emphasizing Swiss modernist typography, tactile subtle grain, 60fps motion, and zero-FOUC dual theme architectures.',
                'role' => 'Creator & Lead Engineer',
                'year' => 2026,
                'client_name' => 'Personal Identity',
                'live_url' => 'https://mahardika.dev',
                'source_url' => 'https://github.com/mhrdkrafa/new_portofolio',
                'featured' => true,
                'status' => 'published',
                'published_at' => now(),
                'sort_order' => 2,
                'seo_title' => 'Cinematic Digital Portfolio — Mahardika Rafa',
                'seo_description' => 'Explore the interactive digital identity and systems engineering case studies of Mahardika Rafa.',
            ]
        );
    }
}
