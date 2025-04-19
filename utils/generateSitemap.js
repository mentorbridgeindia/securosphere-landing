import fs from "fs";
import { resolve } from "path";

const BASE_URL = "https://securosphere.in";

const routes = [
  {
    path: "/",
    lastModified: new Date().toISOString(),
    changeFreq: "weekly",
    priority: 1.0,
  },
  {
    path: "/about",
    lastModified: new Date().toISOString(),
    changeFreq: "monthly",
    priority: 0.8,
  },
  // Add more routes as needed
];

function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes
        .map(
          (route) => `
        <url>
          <loc>${BASE_URL}${route.path}</loc>
          <lastmod>${route.lastModified}</lastmod>
          <changefreq>${route.changeFreq}</changefreq>
          <priority>${route.priority}</priority>
        </url>
      `
        )
        .join("")}
    </urlset>`;

  const path = resolve("./public/sitemap.xml");
  fs.writeFileSync(path, sitemap);
  console.log(`✅ Sitemap generated at ${path}`);
}

generateSitemap();
