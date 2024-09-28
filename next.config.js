module.exports = {
  images: {
    domains: [
      "aceternity.com",
      "images.unsplash.com",
      "unsplash.com",
      "www.cameo.com",
      "assets.aceternity.com",
      "cdn.cameo.com",
      "d3el26csp1xekx.cloudfront.net",
      "www.gravatar.com"
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',  // Allow all domains
      },
      {
        protocol: "https",
        hostname: "aceternity.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.cameo.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn.cameo.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "d3el26csp1xekx.cloudfront.net",
        port: "",
      },
      
    ],
  },
};
