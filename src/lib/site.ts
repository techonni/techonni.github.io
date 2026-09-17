export const SITE = {
  name: 'Techonni',
  tagline: 'A small studio behind simple digital products',
  description:
    'Techonni is a small studio behind simple digital products. Design, education, and tools you can use. Clear English. No hype.',
  site: 'https://www.techonni.com',
  base: '/',
  email: 'hello@techonni.com',
  telegram: 'https://t.me/EuroDeskFX',
  x: 'https://x.com/eurodeskfx',
  xHandle: '@eurodeskfx',
  locale: 'en',
  // Google Form formResponse URL — fill when a Techonni newsletter form exists
  newsletterFormAction: '',
  newsletterEmailEntry: 'entry.EMAIL',
  newsletterSourceEntry: 'entry.SOURCE',
} as const;

export const PRODUCTS = [
  {
    title: 'Euro Desk FX',
    href: 'https://fx.techonni.com',
    description:
      'Free FX education focused on EURUSD and GBPUSD. Simple English. Not financial advice.',
    external: true,
  },
] as const;

export function withBase(path = ''): string {
  const base = SITE.base.endsWith('/') ? SITE.base.slice(0, -1) : SITE.base;
  if (!path || path === '/') return `${base}/`;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export function absoluteUrl(path = ''): string {
  const p = withBase(path);
  return `${SITE.site}${p}`;
}
