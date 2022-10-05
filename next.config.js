
module.exports = {
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
    // redirects '/home' to '/'
    async redirects() {
      return [
        {
          source: '/home',
          destination: '/',
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
