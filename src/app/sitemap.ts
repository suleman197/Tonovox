import { MetadataRoute } from "next";
import { BLOG_POSTS, SERVICES } from "@/data/siteContent";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tonovox.com";

  const staticRoutes = [
    "",
    "/services",
    "/solutions",
    "/industries",
    "/case-studies",
    "/about",
    "/blog",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
    "/cookie-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const serviceRoutes = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
