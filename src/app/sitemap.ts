import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/services', '/team'].map((route) => ({
    url: `https://www.astrogenesis.tech${route}`,
    lastModified: new Date().toISOString()
  }));
  return routes;
}
