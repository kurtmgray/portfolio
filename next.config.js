/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'raw.githubusercontent.com',
            port: '',
            pathname: '/kurtmgray/**',
          },
          {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
            port: '',
            pathname: '/u/**',
          },
        ],
      },
      // webpack: (config, { isServer }) => {
      //   // Fixes npm packages that depend on `fs` module
      //   if (!isServer) {
      //     config.node = {
      //       fs: 'empty'
      //     }
      //   }
    
      //   return config
      // }
}

module.exports = nextConfig
