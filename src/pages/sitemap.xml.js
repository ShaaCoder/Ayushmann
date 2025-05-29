// pages/sitemap.xml.js

const urls = [
  {
    loc: 'https://www.ayushmannbiomass.com/',
    lastmod: '2025-05-29T17:34:17+00:00',
    priority: '1.00',
  },
  {
    loc: 'https://www.ayushmannbiomass.com/about',
    lastmod: '2025-05-29T17:34:18+00:00',
    priority: '0.80',
  },
  {
    loc: 'https://www.ayushmannbiomass.com/products',
    lastmod: '2025-05-29T17:34:18+00:00',
    priority: '0.80',
  },
  {
    loc: 'https://www.ayushmannbiomass.com/contact',
    lastmod: '2025-05-29T17:34:18+00:00',
    priority: '0.80',
  },
  {
    loc: 'https://www.ayushmannbiomass.com/products/biomass-burner',
    lastmod: '2025-05-29T17:34:18+00:00',
    priority: '0.64',
  },
  {
    loc: 'https://www.ayushmannbiomass.com/products/biomass-hotair',
    lastmod: '2025-05-29T17:34:18+00:00',
    priority: '0.64',
  },
  {
    loc: 'https://www.ayushmannbiomass.com/products/biomass-stove',
    lastmod: '2025-05-29T17:34:18+00:00',
    priority: '0.64',
  },
];

const generateSitemap = () => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ loc, lastmod, priority }) => `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
  </url>`
  )
  .join('')}
</urlset>`;
};

export async function getServerSideProps({ res }) {
  const sitemap = generateSitemap();

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function Sitemap() {
  return null;
}
