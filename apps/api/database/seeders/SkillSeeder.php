<?php

namespace Database\Seeders;

use App\Models\Skill;
use Illuminate\Database\Seeder;

class SkillSeeder extends Seeder
{
    public function run(): void
    {
        $skills = [
            // Backend & Systems
            ['name' => 'Laravel', 'slug' => 'laravel', 'group_name' => 'Backend & Systems', 'proficiency' => 95, 'icon_key' => 'laravel', 'is_featured' => true, 'sort_order' => 1],
            ['name' => 'Distributed Architecture', 'slug' => 'distributed-architecture', 'group_name' => 'Backend & Systems', 'proficiency' => 92, 'icon_key' => 'server', 'is_featured' => true, 'sort_order' => 2],
            ['name' => 'MySQL 8 / RDBMS', 'slug' => 'mysql', 'group_name' => 'Backend & Systems', 'proficiency' => 90, 'icon_key' => 'database', 'is_featured' => true, 'sort_order' => 3],
            ['name' => 'Redis Caching & Streams', 'slug' => 'redis', 'group_name' => 'Backend & Systems', 'proficiency' => 90, 'icon_key' => 'redis', 'is_featured' => true, 'sort_order' => 4],
            
            // Frontend & Motion
            ['name' => 'Next.js 16 (App Router)', 'slug' => 'nextjs', 'group_name' => 'Frontend & Motion', 'proficiency' => 94, 'icon_key' => 'nextjs', 'is_featured' => true, 'sort_order' => 5],
            ['name' => 'TypeScript', 'slug' => 'typescript', 'group_name' => 'Frontend & Motion', 'proficiency' => 92, 'icon_key' => 'typescript', 'is_featured' => true, 'sort_order' => 6],
            ['name' => 'GSAP & ScrollTrigger', 'slug' => 'gsap', 'group_name' => 'Frontend & Motion', 'proficiency' => 88, 'icon_key' => 'animation', 'is_featured' => true, 'sort_order' => 7],
            ['name' => 'Tailwind CSS', 'slug' => 'tailwind', 'group_name' => 'Frontend & Motion', 'proficiency' => 95, 'icon_key' => 'tailwind', 'is_featured' => false, 'sort_order' => 8],
            ['name' => 'React Three Fiber (WebGL)', 'slug' => 'r3f', 'group_name' => 'Frontend & Motion', 'proficiency' => 80, 'icon_key' => 'cube', 'is_featured' => false, 'sort_order' => 9],
        ];

        foreach ($skills as $skill) {
            Skill::updateOrCreate(['slug' => $skill['slug']], $skill);
        }
    }
}
