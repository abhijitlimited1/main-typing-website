/**
 * Script to generate a sitemap.xml file for the Type Ace application.
 * Run with: npm run generate-sitemap
 */

import fs from 'fs-extra';
import path from 'path';
import { seoData } from '../lib/seo-data';

// Replace with your actual domain
const BASE_URL = process.env.VITE_BASE_URL || 'https://typeace.com';
const PUBLIC_DIR = path.resolve(__dirname, '../../public');

// Ensure the public directory exists
fs.ensureDirSync(PUBLIC_DIR);

// Static routes
const staticRoutes = [
  {
    url: `${BASE_URL}/`,
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: '1.0',
  },
  {
    url: `${BASE_URL}/typing-tests`,
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: '0.9',
  },
  {
    url: `${BASE_URL}/about`,
    lastmod: new Date().toISOString(),
    changefreq: 'yearly',
    priority: '0.5',
  },
  {
    url: `${BASE_URL}/contact`,
    lastmod: new Date().toISOString(),
    changefreq: 'yearly',
    priority: '0.5',
  },
  {
    url: `${BASE_URL}/privacy-policy`,
    lastmod: new Date().toISOString(),
    changefreq: 'yearly',
    priority: '0.3',
  },
  {
    url: `${BASE_URL}/terms`,
    lastmod: new Date().toISOString(),
    changefreq: 'yearly',
    priority: '0.3',
  },
];

// Dynamic routes from seoData
const dynamicRoutes = seoData.map((page) => ({
  url: `${BASE_URL}/typing-test/${page.slug}`,
  lastmod: new Date().toISOString(),
  changefreq: 'monthly',
  priority: '0.8',
}));

// Combine all routes
const allRoutes = [...staticRoutes, ...dynamicRoutes];

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `  <url>
    <loc>${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

// Write sitemap to file
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemap);

console.log('Sitemap generated successfully at public/sitemap.xml');