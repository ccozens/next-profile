
module.exports = {
    images: {
      remotePatterns: [
        {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            pathname: '/dyvlh6dln/**',
        }
      ],
    },
    async redirects() {
      return [
        {
          source: '/home',
          destination: '/',
          permanent: true,
        },
      ]
    },

  }
