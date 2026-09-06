# Portfolio — DATABASE.md

## Database
MySQL 8+, InnoDB, utf8mb4. Laravel migrations are authoritative. Redis is used for cache/queues. Object storage is recommended for media.

## Core Tables

### users
id, name, email, password, status, timestamps, deleted_at

### profile
id, user_id, display_name, headline, short_bio, long_bio, avatar_path, location, email, phone nullable, availability_status, timestamps

### social_links
id, profile_id, platform, label, url, icon_key, sort_order, is_visible, timestamps

### projects
id, category_id nullable, title, slug, short_description, description, role, year nullable, client_name nullable, live_url nullable, source_url nullable, featured, status, published_at nullable, sort_order, seo_title nullable, seo_description nullable, timestamps, deleted_at

### project_media
id, project_id, path, media_type, alt_text, caption nullable, sort_order, is_cover, width nullable, height nullable, metadata JSON nullable, timestamps

### project_technologies
id, name, slug, icon_key nullable, timestamps

### project_technology
project_id, project_technology_id

### project_links
id, project_id, label, url, type, sort_order, timestamps

### categories
id, name, slug, description nullable, type, sort_order, is_active, timestamps

### experiences
id, profile_id, company_name, position, employment_type nullable, location nullable, start_date, end_date nullable, description, is_current, sort_order, timestamps

### education
id, profile_id, institution, degree nullable, field_of_study nullable, start_date nullable, end_date nullable, description nullable, sort_order, timestamps

### skills
id, name, slug, group_name nullable, proficiency nullable, icon_key nullable, sort_order, is_featured, timestamps

### services
id, title, slug, short_description, description, icon_key, sort_order, is_active, timestamps

### testimonials
id, name, role nullable, company nullable, avatar_path nullable, quote, rating nullable, sort_order, is_published, timestamps

### articles
id, category_id nullable, title, slug, excerpt, body, cover_path nullable, status, published_at nullable, reading_time nullable, seo_title nullable, seo_description nullable, timestamps, deleted_at

### tags
id, name, slug, timestamps

### article_tag
article_id, tag_id

### contact_messages
id, name, email, subject nullable, message, status, replied_at nullable, timestamps

### homepage_sections
id, key, type, title nullable, subtitle nullable, config JSON nullable, is_enabled, sort_order, timestamps

### navigation_items
id, parent_id nullable, label, url nullable, route_name nullable, target nullable, sort_order, is_visible, timestamps

### website_settings
id, key, value, type, group, timestamps

### theme_presets
id, name, slug, config JSON, is_active, is_default, timestamps

### seo_pages
id, path, title, description nullable, canonical_url nullable, og_image_path nullable, robots nullable, structured_data JSON nullable, timestamps

### media_assets
id, path, disk, type, alt_text nullable, metadata JSON nullable, visibility, uploaded_by nullable, timestamps

### audit_logs
id, user_id nullable, action, subject_type, subject_id nullable, old_values JSON nullable, new_values JSON nullable, ip_address nullable, user_agent nullable, timestamps

## Indexes
- projects(slug)
- projects(status,published_at)
- projects(featured,sort_order)
- articles(slug)
- articles(status,published_at)
- homepage_sections(is_enabled,sort_order)
- navigation_items(parent_id,sort_order)
- contact_messages(status,created_at)
- seo_pages(path) unique

## Data Rules
- Slugs are unique.
- Public content requires explicit publication status.
- Soft-delete portfolio entities where historical references matter.
- Never store secrets in website_settings.
- Audit administrative changes to published content and site settings.
