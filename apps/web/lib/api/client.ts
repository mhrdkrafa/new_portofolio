/**
 * Type-safe API client for Mahardika Rafa Portfolio
 * Connects Next.js 16 App Router frontend to Laravel 13 API backend
 */

export class ApiClientError extends Error {
  public status: number;
  public data: unknown;

  constructor(message: string, status: number, data?: unknown) {
    super(message);
    this.name = 'ApiClientError';
    this.status = status;
    this.data = data;
  }
}

export interface FetchOptions extends RequestInit {
  revalidate?: number | false;
  tags?: string[];
  params?: Record<string, string | number | boolean | undefined | null>;
}

const DEFAULT_BASE_URL = 'http://127.0.0.1:8000/api/v1';

export function getApiBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL.replace(/\/+$/, '');
  }
  return DEFAULT_BASE_URL;
}

export async function fetchApi<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const baseUrl = getApiBaseUrl();
  const normalizedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  
  let urlString = `${baseUrl}${normalizedEndpoint}`;

  if (options.params) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(options.params)) {
      if (value !== undefined && value !== null) {
        searchParams.set(key, String(value));
      }
    }
    const query = searchParams.toString();
    if (query) {
      urlString += (urlString.includes('?') ? '&' : '?') + query;
    }
  }

  const { revalidate, tags, params, headers, ...customConfig } = options;

  const requestHeaders: HeadersInit = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    ...headers,
  };

  const nextConfig: { revalidate?: number | false; tags?: string[] } = {};
  if (revalidate !== undefined) {
    nextConfig.revalidate = revalidate;
  }
  if (tags && tags.length > 0) {
    nextConfig.tags = tags;
  }

  const config: RequestInit & { next?: { revalidate?: number | false; tags?: string[] } } = {
    method: options.method || 'GET',
    headers: requestHeaders,
    next: Object.keys(nextConfig).length > 0 ? nextConfig : undefined,
    ...customConfig,
  };

  try {
    const response = await fetch(urlString, config);

    if (!response.ok) {
      let errorData: unknown;
      try {
        errorData = await response.json();
      } catch {
        errorData = await response.text();
      }
      throw new ApiClientError(
        `API request failed with status ${response.status}: ${response.statusText}`,
        response.status,
        errorData
      );
    }

    // Handle 204 No Content
    if (response.status === 204) {
      return null as T;
    }

    return (await response.json()) as T;
  } catch (error) {
    if (error instanceof ApiClientError) {
      throw error;
    }
    throw new ApiClientError(
      error instanceof Error ? error.message : 'Network error occurred during API request',
      0,
      error
    );
  }
}

/**
 * Higher-level API helpers
 */
export const portfolioApi = {
  getProfile: (options?: FetchOptions) => fetchApi('/profile', { revalidate: 3600, ...options }),
  getProjects: (params?: { category?: string; featured?: boolean }, options?: FetchOptions) =>
    fetchApi('/projects', { params, revalidate: 600, ...options }),
  getProject: (slug: string, options?: FetchOptions) =>
    fetchApi(`/projects/${slug}`, { revalidate: 600, ...options }),
  getExperiences: (options?: FetchOptions) => fetchApi('/experiences', { revalidate: 3600, ...options }),
  getEducation: (options?: FetchOptions) => fetchApi('/education', { revalidate: 3600, ...options }),
  getSkills: (options?: FetchOptions) => fetchApi('/skills', { revalidate: 3600, ...options }),
  getServices: (options?: FetchOptions) => fetchApi('/services', { revalidate: 3600, ...options }),
  getTestimonials: (options?: FetchOptions) => fetchApi('/testimonials', { revalidate: 3600, ...options }),
  getArticles: (params?: { category?: string; tag?: string; page?: number }, options?: FetchOptions) =>
    fetchApi('/articles', { params, revalidate: 300, ...options }),
  getArticle: (slug: string, options?: FetchOptions) =>
    fetchApi(`/articles/${slug}`, { revalidate: 300, ...options }),
  getHomepage: (options?: FetchOptions) => fetchApi('/homepage', { revalidate: 600, ...options }),
  getNavigation: (options?: FetchOptions) => fetchApi('/navigation', { revalidate: 3600, ...options }),
  getSettings: (options?: FetchOptions) => fetchApi('/settings/public', { revalidate: 3600, ...options }),
  getSeo: (path: string, options?: FetchOptions) =>
    fetchApi(`/seo/${encodeURIComponent(path)}`, { revalidate: 3600, ...options }),
  submitContact: (
    data: { name: string; email: string; subject: string; message: string },
    options?: FetchOptions
  ) =>
    fetchApi('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    }),
};
