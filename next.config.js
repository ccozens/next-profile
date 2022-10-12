
module.exports = {
  // auto-set land attribute when html generated
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  // enables cloudinary loading from my account
    images: {
      remotePatterns: [
        {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            pathname: '/dyvlh6dln/**',
        }
      ],
    },
    // redirects from within subprojects to main pages
    async redirects() {
      return [
        {
          source: '/projects/about',
          destination: '/about',
          permanent: true,
        },
        {
          source: '/projects/projects',
          destination: '/projects',
          permanent: true,
        },
      ]
    },
    // enables SVGR for SVG loading
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack', 'url-loader'],
      })
  
      return config
    },
  }
