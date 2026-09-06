/**
 * Universal Asset URL Resolver
 * Ensures static assets load correctly whether deployed at domain root (Vercel)
 * or in a subpath repository (GitHub Pages `/godmode/`).
 */
export function assetUrl(path: string | null | undefined): string {
  if (!path) return '';
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
}

export default assetUrl;
