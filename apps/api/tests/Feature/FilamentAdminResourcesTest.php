<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class FilamentAdminResourcesTest extends TestCase
{
    use RefreshDatabase;

    protected User $admin;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed();
        $this->admin = User::first() ?? User::factory()->create();
    }

    public function test_admin_can_render_profiles_resource_page(): void
    {
        $response = $this->actingAs($this->admin)->get('/admin/profiles');

        $response->assertStatus(200);
        $response->assertSee('Mahardika Rafa');
    }
}
