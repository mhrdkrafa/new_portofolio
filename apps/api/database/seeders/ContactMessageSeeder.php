<?php

namespace Database\Seeders;

use App\Models\ContactMessage;
use Illuminate\Database\Seeder;

class ContactMessageSeeder extends Seeder
{
    public function run(): void
    {
        ContactMessage::create([
            'name' => 'Elena Rostova',
            'email' => 'elena@novatech-ventures.io',
            'subject' => 'Architectural Consultation for Real-time Fintech Platform',
            'message' => 'Hi Mahardika, we are building a high-throughput transaction monitoring dashboard and would love to consult with you on our Next.js frontend architecture and sub-millisecond data pipelines.',
            'status' => 'unread',
            'replied_at' => null,
        ]);

        ContactMessage::create([
            'name' => 'Marcus Vance',
            'email' => 'marcus@hyperion-creative.design',
            'subject' => 'Collaboration on Interactive 3D Brand Experience',
            'message' => 'Loved your case study on deterministic GSAP timelines. We are preparing a global showcase and looking for a creative engineer to lead the WebGL and animation choreographies.',
            'status' => 'read',
            'replied_at' => now()->subDay(),
        ]);
    }
}
