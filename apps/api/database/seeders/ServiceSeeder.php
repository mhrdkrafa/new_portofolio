<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    public function run(): void
    {
        $services = [
            [
                'title' => 'Systems Architecture & Distributed Engineering',
                'slug' => 'systems-architecture',
                'short_description' => 'Designing fault-tolerant distributed backends, microservices, and event-driven data pipelines.',
                'description' => 'Comprehensive architecture planning for high-throughput platforms. Specializing in concurrency control, transactional integrity, Redis streaming, and cloud infrastructure optimization.',
                'icon_key' => 'cpu',
                'sort_order' => 1,
                'is_active' => true,
            ],
            [
                'title' => 'Cinematic Digital Craft & Creative Frontend',
                'slug' => 'creative-frontend',
                'short_description' => 'Composing tactile, 60fps web experiences utilizing Next.js 16 App Router and GSAP choreography.',
                'description' => 'Elevating brands through editorial typography, Swiss grid systems, purposeful WebGL shaders, and accessibility-first motion engineering that converts visitors into advocates.',
                'icon_key' => 'layout',
                'sort_order' => 2,
                'is_active' => true,
            ],
            [
                'title' => 'API Contract Design & Performance Auditing',
                'slug' => 'api-performance-auditing',
                'short_description' => 'Eliminating N+1 queries, optimizing database indexes, and hardening API contracts with Sanctum.',
                'description' => 'Rigorous performance auditing across full-stack systems. Reducing TTFB, accelerating Core Web Vitals, and implementing enterprise security controls and automated test suites.',
                'icon_key' => 'shield-check',
                'sort_order' => 3,
                'is_active' => true,
            ],
        ];

        foreach ($services as $service) {
            Service::updateOrCreate(['slug' => $service['slug']], $service);
        }
    }
}
