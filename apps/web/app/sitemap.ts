import type { MetadataRoute } from "next";
import { DEFAULT_SITE_URL } from "@/lib/seo/metadata";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    "",
    "/projects",
    "/experience",
    "/services",
    "/articles",
    "/contact",
  ];

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${DEFAULT_SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const sampleDynamicProjects: MetadataRoute.Sitemap = [
    {
      url: `${DEFAULT_SITE_URL}/projects/cinematic-digital-portfolio`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${DEFAULT_SITE_URL}/projects/distributed-transaction-engine`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const sampleDynamicArticles: MetadataRoute.Sitemap = [
    {
      url: `${DEFAULT_SITE_URL}/articles/architecting-low-latency-headless-portfolios`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  return [...staticEntries, ...sampleDynamicProjects, ...sampleDynamicArticles];
}
