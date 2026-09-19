export const SITE = {
  name: 'Techonni',
  tagline: 'A small studio behind simple digital products',
  description:
    'Techonni is a small studio behind simple digital products. Design, education, and tools you can use. Clear English. No hype.',
  site: 'https://www.techonni.com',
  base: '/',
  email: 'hello@techonni.com',
  telegram: 'https://t.me/EuroDeskFX',
  x: 'https://x.com/techonni',
  xHandle: '@techonni',
  locale: 'en',
  newsletterFormAction: 'https://docs.google.com/forms/d/e/1FAIpQLSfs9xCOoFKH5zT9z2cmgvOtsRjE59axfKI_EtYDpx55DtoiHQ/formResponse',
  newsletterNameEntry: 'entry.1110274731',
  newsletterEmailEntry: 'entry.1946205931',
  newsletterConsentEntry: 'entry.259827322',
  newsletterSourceEntry: 'entry.452092755',
} as const;

export const PRODUCTS = [
  {
    title: 'Shop',
    href: 'https://shop.techonni.com/',
    description: 'Reels storefront on shop.techonni.com.',
    external: true,
  },
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
