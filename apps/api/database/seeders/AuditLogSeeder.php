<?php

namespace Database\Seeders;

use App\Models\AuditLog;
use App\Models\User;
use Illuminate\Database\Seeder;

class AuditLogSeeder extends Seeder
{
    public function run(): void
    {
        $admin = User::first();

        AuditLog::create([
            'user_id' => $admin?->id,
            'action' => 'initialize_system',
            'subject_type' => 'App\Models\User',
            'subject_id' => $admin?->id,
            'old_values' => null,
            'new_values' => ['email' => $admin?->email, 'role' => 'admin'],
            'ip_address' => '127.0.0.1',
            'user_agent' => 'Seeder/SystemInitialization',
        ]);
    }
}
