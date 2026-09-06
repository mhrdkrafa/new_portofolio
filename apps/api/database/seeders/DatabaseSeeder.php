<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            AdminUserSeeder::class,
            ProjectSeeder::class,
            SkillSeeder::class,
            ServiceSeeder::class,
            TestimonialSeeder::class,
            ArticleSeeder::class,
            ContactMessageSeeder::class,
            HomepageSectionSeeder::class,
            NavigationItemSeeder::class,
        ]);
    }
}
