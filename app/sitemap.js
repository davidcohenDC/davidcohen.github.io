import { BASE_URL } from '@/lib/constants';

export default async function sitemap() {
  const routes = ['', '/about', '/projects'].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString()
  }));

  return [...routes];
}
