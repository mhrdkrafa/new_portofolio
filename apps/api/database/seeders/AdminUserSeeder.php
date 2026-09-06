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

        $profile->experiences()->updateOrCreate(
            ['company_name' => 'Apex Systems & Distributed Lab'],
            [
                'position' => 'Principal Systems Architect',
                'employment_type' => 'Full-time',
                'location' => 'Jakarta / Remote',
                'start_date' => '2024-01-01',
                'end_date' => null,
                'description' => 'Architected high-throughput ledger infrastructure, stream processing pipelines, and resilient microservices.',
                'is_current' => true,
                'sort_order' => 1,
            ]
        );

        $profile->experiences()->updateOrCreate(
            ['company_name' => 'Kinetic Digital Studio'],
            [
                'position' => 'Lead Full-Stack Creative Engineer',
                'employment_type' => 'Full-time',
                'location' => 'Jakarta, ID',
                'start_date' => '2022-03-01',
                'end_date' => '2023-12-31',
                'description' => 'Spearheaded bespoke web experiences, interactive 3D visualizations, and API orchestration.',
                'is_current' => false,
                'sort_order' => 2,
            ]
        );

        $profile->education()->updateOrCreate(
            ['institution' => 'Bandung Institute of Technology (ITB)'],
            [
                'degree' => 'Bachelor of Science',
                'field_of_study' => 'Computer Science & Software Engineering',
                'start_date' => '2018-08-01',
                'end_date' => '2022-07-31',
                'description' => 'Focused on distributed algorithms, formal verification, systems architecture, and database theory.',
                'sort_order' => 1,
            ]
        );
    }
}
