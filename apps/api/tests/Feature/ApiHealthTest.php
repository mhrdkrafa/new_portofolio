<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ApiHealthTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test the versioned public health check endpoint.
     */
    public function test_api_v1_health_check_returns_successful_json_response(): void
    {
        $response = $this->getJson('/api/v1/health');

        $response->assertStatus(200)
            ->assertJsonStructure([
                'status',
                'timestamp',
                'service',
                'version',
            ])
            ->assertJson([
                'status' => 'healthy',
                'service' => 'Mahardika Portfolio API',
                'version' => '1.0.0',
            ]);
    }

    /**
     * Test Sanctum CSRF cookie delivery for SPA authentication.
     */
    public function test_sanctum_csrf_cookie_endpoint_is_accessible(): void
    {
        $response = $this->get('/sanctum/csrf-cookie');

        $response->assertNoContent();
    }

    /**
     * Test that unauthenticated API user requests are rejected by Sanctum.
     */
    public function test_unauthenticated_api_user_endpoint_returns_401(): void
    {
        $response = $this->getJson('/api/user');

        $response->assertStatus(401);
    }

    /**
     * Test that Filament admin login page is accessible.
     */
    public function test_filament_admin_login_page_renders(): void
    {
        $response = $this->get('/admin/login');

        $response->assertStatus(200);
    }
}
