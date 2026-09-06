<?php

namespace Database\Seeders;

use App\Models\Testimonial;
use Illuminate\Database\Seeder;

class TestimonialSeeder extends Seeder
{
    public function run(): void
    {
        Testimonial::updateOrCreate(
            ['name' => 'Alexander Vance'],
            [
                'role' => 'VP of Engineering',
                'company' => 'Apex Financial Technology',
                'avatar_path' => null,
                'quote' => 'Mahardika possesses a rare duality: an instinctive grasp of deep distributed concurrency paired with an aesthetic eye that rivals the best design agencies in the world.',
                'rating' => 5,
                'sort_order' => 1,
                'is_published' => true,
            ]
        );
    }
}
