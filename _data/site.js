const HOSTNAME = 'piet.me';
module.exports = {
  buildTime: new Date(),
  url: `https://${HOSTNAME}`,
  hostname: HOSTNAME,
  title: 'Piet van Zoen',
  isProduction: process.env.ELEVENTY_PRODUCTION === 'true',
  menu: [
    { href: '/updates/', name: 'Updates' },
    { href: '/notes/', name: 'Notes' },
    { href: '/about/', name: 'About' },
  ],
};