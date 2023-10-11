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
      // reactStrictMode: true,
      webpack(config, { nextRuntime }) { 
        // as of Next.js latest versions, the nextRuntime is preferred over `isServer`, because of edge-runtime
        if (typeof nextRuntime === "undefined") {
          config.resolve.fallback = {
                    ...config.resolve.fallback,
                    fs: false,
             };  
        }

        return config;
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
