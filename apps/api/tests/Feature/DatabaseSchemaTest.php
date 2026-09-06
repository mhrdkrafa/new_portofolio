<?php

namespace Tests\Feature;

use App\Models\Article;
use App\Models\AuditLog;
use App\Models\ContactMessage;
use App\Models\Education;
use App\Models\Experience;
use App\Models\HomepageSection;
use App\Models\NavigationItem;
use App\Models\Profile;
use App\Models\Project;
use App\Models\SeoPage;
use App\Models\Service;
use App\Models\Skill;
use App\Models\Tag;
use App\Models\ThemePreset;
use App\Models\WebsiteSetting;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class DatabaseSchemaTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed();
    }
    public function test_all_portfolio_models_exist_and_queryable(): void
    {
        $this->assertGreaterThan(0, Profile::count());
        $this->assertGreaterThan(0, Project::count());
        $this->assertGreaterThan(0, Experience::count());
        $this->assertGreaterThan(0, Education::count());
        $this->assertGreaterThan(0, Skill::count());
        $this->assertGreaterThan(0, Service::count());
        $this->assertGreaterThan(0, Article::count());
        $this->assertGreaterThan(0, Tag::count());
        $this->assertGreaterThan(0, ContactMessage::count());
        $this->assertGreaterThan(0, HomepageSection::count());
        $this->assertGreaterThan(0, NavigationItem::count());
        $this->assertGreaterThan(0, WebsiteSetting::count());
        $this->assertGreaterThan(0, ThemePreset::count());
        $this->assertGreaterThan(0, SeoPage::count());
        $this->assertGreaterThan(0, AuditLog::count());
    }

    public function test_article_relationships_and_casts(): void
    {
        $article = Article::with(['tags', 'category'])->first();
        $this->assertNotNull($article);
        $this->assertNotEmpty($article->slug);
        $this->assertIsInt($article->reading_time);
        $this->assertNotNull($article->category);
        $this->assertGreaterThan(0, $article->tags->count());
    }

    public function test_website_setting_helper(): void
    {
        $siteTitle = WebsiteSetting::get('site_title');
        $this->assertStringContainsString('Mahardika Rafa', $siteTitle);

        $defaultTheme = WebsiteSetting::get('default_theme');
        $this->assertEquals('obsidian-dark', $defaultTheme);
    }
}
