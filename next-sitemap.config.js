/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.carcarecarwash.com', // Replace with your domain
    generateRobotsTxt: true, // Generate a robots.txt file
    sitemapSize: 5000, // Split sitemaps when you have many URLs
    exclude: ['/admin/*', '/secret', '/blog/new'], // Exclude specific paths
    changefreq: 'daily', // Change frequency for URLs
    priority: 0.7, // Default priority for all URLs
    transform: async (config, path) => {
      return {
        loc: path, // Page URL
        lastmod: new Date().toISOString(), // Last modification date
        changefreq: 'daily',
        priority: path === '/' ? 1.0 : 0.7, // Higher priority for home page
      };
    },
  };
  