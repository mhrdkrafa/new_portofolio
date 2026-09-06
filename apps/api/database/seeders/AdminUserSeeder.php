<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::updateOrCreate(
            ['email' => env('ADMIN_EMAIL', 'admin@mahardika.dev')],
            [
                'name' => env('ADMIN_NAME', 'Mahardika Rafa'),
                'password' => Hash::make(env('ADMIN_PASSWORD', 'Mahardika#2026!Admin')),
                'email_verified_at' => now(),
            ]
        );

        $user->profile()->updateOrCreate(
            ['user_id' => $user->id],
            [
                'display_name' => 'Mahardika Rafa',
                'headline' => 'Systems Architect & Creative Full-Stack Engineer',
                'short_bio' => 'Architecting high-throughput distributed systems & composing cinematic, tactile web interfaces with mathematical precision and uncompromising performance.',
                'long_bio' => 'Mahardika is a full-stack engineer and software architect based in Jakarta, specializing in distributed systems, high-concurrency microservices, and bespoke editorial digital experiences.',
                'avatar_path' => null,
                'location' => 'Jakarta, Indonesia',
                'email' => 'contact@mahardika.dev',
                'phone' => '+6281234567890',
                'availability_status' => 'available',
            ]
        );

        $profile = $user->profile;

        $profile->socialLinks()->updateOrCreate(
            ['platform' => 'github'],
            [
                'label' => 'GitHub',
                'url' => 'https://github.com/mhrdkrafa',
                'icon_key' => 'github',
                'sort_order' => 1,
                'is_visible' => true,
            ]
        );

        $profile->socialLinks()->updateOrCreate(
            ['platform' => 'linkedin'],
            [
                'label' => 'LinkedIn',
                'url' => 'https://linkedin.com/in/mhrdkrafa',
                'icon_key' => 'linkedin',
                'sort_order' => 2,
                'is_visible' => true,
            ]
        );

        $profile->socialLinks()->updateOrCreate(
            ['platform' => 'email'],
            [
                'label' => 'Email',
                'url' => 'mailto:contact@mahardika.dev',
                'icon_key' => 'mail',
                'sort_order' => 3,
                'is_visible' => true,
            ]
        );
    }
}
