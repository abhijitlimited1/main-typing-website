/**
 * @fileOverview Generates the sitemap.xml file for the Type Ace application.
 * Includes the home page, static pages, and all dynamic typing test pages.
 */

import { seoData } from '../lib/seo-data'; // Import your SEO data
import { blogPosts } from '../lib/blog-data'; // Import blog data

// Define MetadataRoute interface since we're not using Next.js
interface MetadataRoute {
  Sitemap: Array<{
    url: string;
    lastModified?: Date;
    changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority?: number;
  }>;
}

// Replace with your actual domain or rely on environment variable
const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:9002'; // Default to localhost if not set

export default function sitemap(): MetadataRoute['Sitemap'] {
  // Static routes (Home, About, Contact, etc.)
  const staticRoutes = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1.0, // Highest priority for home page
    },
    {
      url: `${BASE_URL}/typing-tests`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9, // High priority for main test listing
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const, // Blog updates more frequently
      priority: 0.8, // High priority for blog
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  // Dynamic routes from seoData
  const dynamicRoutes = seoData.map((page) => ({
    url: `${BASE_URL}/typing-test/${page.slug}`,
    lastModified: new Date(), // Use file modification date or a fixed date if content doesn't change often
    changeFrequency: 'monthly' as const, // Adjust based on how often content updates
    priority: 0.8, // Slightly lower priority than home/main tests page
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
