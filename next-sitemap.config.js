module.exports = {
    siteUrl: 'https://yourSite.in/', // Your website’s base URL
    generateRobotsTxt: true, // Enables automatic creation of robots.txt
    sitemapSize: 1000, // Optional: Set max number of URLs per sitemap file
    changefreq: 'monthly', // Optional: Frequency of page updates (daily, weekly, etc.)
    priority: 0.7, // Optional: Default priority for pages
    outDir: './out', // for files to be written in out folder
    exclude: ['/admin/**', '/private/**'], // Optional: Exclude specific paths
    // If you're using dynamic routes, next-sitemap will automatically handle them
  };
  