/**
 * Typed API Models for Mahardika Rafa Portfolio
 * Synchronized with Laravel API schema & Eloquent resources
 */

export interface ApiResponse<T> {
  data: T;
  message?: string;
}

export interface PaginatedMeta {
  current_page: number;
  from: number | null;
  last_page: number;
  per_page: number;
  to: number | null;
  total: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: PaginatedMeta;
}

export interface Profile {
  id: number;
  full_name: string;
  headline: string;
  bio: string;
  avatar_path?: string | null;
  avatar_url?: string | null;
  resume_path?: string | null;
  resume_url?: string | null;
  location: string;
  availability_status: 'available' | 'busy' | 'unavailable';
  years_experience: number;
}

export interface SocialLink {
  id: number;
  platform: string;
  url: string;
  icon_key: string;
  sort_order: number;
  is_visible: boolean;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string | null;
}

export interface ProjectTechnology {
  id: number;
  name: string;
  slug: string;
  category: string;
  icon_key?: string | null;
}

export interface ProjectMedia {
  id: number;
  project_id: number;
  file_path: string;
  file_url?: string | null;
  media_type: 'image' | 'video' | 'code' | 'interactive';
  caption?: string | null;
  sort_order: number;
}

export interface ProjectLink {
  id: number;
  project_id: number;
  label: string;
  url: string;
  type: 'github' | 'live' | 'case_study' | 'docs' | 'demo';
}

export interface Project {
  id: number;
  category_id: number;
  category?: Category;
  title: string;
  slug: string;
  summary: string;
  description?: string | null;
  client_name?: string | null;
  year: number;
  featured: boolean;
  status: 'draft' | 'published' | 'archived';
  hero_image_path?: string | null;
  hero_image_url?: string | null;
  sort_order: number;
  media?: ProjectMedia[];
  links?: ProjectLink[];
  technologies?: ProjectTechnology[];
}

export interface Experience {
  id: number;
  company_name: string;
  position: string;
  location?: string | null;
  start_date: string;
  end_date?: string | null;
  is_current: boolean;
  description?: string | null;
  highlights: string[];
  sort_order: number;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  field_of_study: string;
  start_year: number;
  end_year?: number | null;
  description?: string | null;
  activities: string[];
  sort_order: number;
}

export interface Skill {
  id: number;
  name: string;
  group_name: string;
  proficiency: number;
  icon_key?: string | null;
  is_featured: boolean;
  sort_order: number;
}

export interface Service {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  description: string;
  features: string[];
  icon_key?: string | null;
  is_active: boolean;
  sort_order: number;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar_path?: string | null;
  avatar_url?: string | null;
  is_published: boolean;
  sort_order: number;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
}

export interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  reading_time: number;
  cover_path?: string | null;
  cover_url?: string | null;
  status: 'draft' | 'published' | 'archived';
  published_at?: string | null;
  seo_title?: string | null;
  seo_description?: string | null;
  category?: Category;
  tags?: Tag[];
}

export interface HomepageSection {
  id: number;
  key: string;
  type: string;
  title?: string | null;
  subtitle?: string | null;
  config: Record<string, unknown>;
  is_enabled: boolean;
  sort_order: number;
}

export interface NavigationItem {
  id: number;
  parent_id?: number | null;
  label: string;
  url: string;
  route_name?: string | null;
  target: '_self' | '_blank';
  is_visible: boolean;
  sort_order: number;
  children?: NavigationItem[];
}

export interface WebsiteSetting {
  key: string;
  value: string | boolean | number | Record<string, unknown>;
  type: 'text' | 'boolean' | 'number' | 'json';
  group: 'general' | 'contact' | 'banner' | 'appearance';
}

export interface ThemePreset {
  id: number;
  name: string;
  slug: string;
  config: Record<string, string>;
  is_active: boolean;
  is_default: boolean;
}

export interface SeoPage {
  id: number;
  path: string;
  title: string;
  description: string;
  canonical_url?: string | null;
  og_image_path?: string | null;
  og_image_url?: string | null;
  robots?: string | null;
  structured_data?: Record<string, unknown> | null;
}
