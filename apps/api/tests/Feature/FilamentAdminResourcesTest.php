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

    public function test_admin_can_render_skills_resource_page(): void
    {
        $response = $this->actingAs($this->admin)->get('/admin/skills');

        $response->assertStatus(200);
        $response->assertSee('Distributed Architecture');
    }

    public function test_admin_can_render_services_resource_page(): void
    {
        $response = $this->actingAs($this->admin)->get('/admin/services');

        $response->assertStatus(200);
        $response->assertSee('Systems Architecture');
    }

    public function test_admin_can_render_testimonials_resource_page(): void
    {
        $response = $this->actingAs($this->admin)->get('/admin/testimonials');

        $response->assertStatus(200);
        $response->assertSee('Alexander Vance');
    }

    public function test_admin_can_render_articles_resource_page(): void
    {
        $response = $this->actingAs($this->admin)->get('/admin/articles');

        $response->assertStatus(200);
        $response->assertSee('Architecting Low-Latency Headless Portfolios');
    }

    public function test_admin_can_render_homepage_sections_resource_page(): void
    {
        $response = $this->actingAs($this->admin)->get('/admin/homepage-sections');

        $response->assertStatus(200);
        $response->assertSee('hero');
    }

    public function test_admin_can_render_navigation_items_resource_page(): void
    {
        $response = $this->actingAs($this->admin)->get('/admin/navigation-items');

        $response->assertStatus(200);
        $response->assertSee('Projects');
    }

    public function test_admin_can_render_seo_pages_resource_page(): void
    {
        $response = $this->actingAs($this->admin)->get('/admin/seo-pages');

        $response->assertStatus(200);
        $response->assertSee('/projects');
    }

    public function test_admin_can_render_theme_presets_resource_page(): void
    {
        $response = $this->actingAs($this->admin)->get('/admin/theme-presets');

        $response->assertStatus(200);
        $response->assertSee('Obsidian Dark');
    }

    public function test_admin_can_render_website_settings_resource_page(): void
    {
        $response = $this->actingAs($this->admin)->get('/admin/website-settings');

        $response->assertStatus(200);
        $response->assertSee('site_title');
    }
}
