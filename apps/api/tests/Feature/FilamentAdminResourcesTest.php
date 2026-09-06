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

    public function test_admin_can_render_projects_resource_page(): void
    {
        $response = $this->actingAs($this->admin)->get('/admin/projects');

        $response->assertStatus(200);
        $response->assertSee('Cinematic Digital Portfolio');
    }

    public function test_admin_can_render_create_project_page(): void
    {
        $response = $this->actingAs($this->admin)->get('/admin/projects/create');

        $response->assertStatus(200);
    }

    public function test_admin_can_render_project_media_resource_page(): void
    {
        $response = $this->actingAs($this->admin)->get('/admin/project-media');

        $response->assertStatus(200);
    }

    public function test_admin_can_render_experiences_resource_page(): void
    {
        $response = $this->actingAs($this->admin)->get('/admin/experiences');

        $response->assertStatus(200);
        $response->assertSee('Apex Systems');
    }

    public function test_admin_can_render_education_resource_page(): void
    {
        $response = $this->actingAs($this->admin)->get('/admin/education');

        $response->assertStatus(200);
        $response->assertSee('Bandung Institute of Technology');
    }
}
