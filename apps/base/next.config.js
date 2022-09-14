/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf/lib/NextFederationPlugin');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const nextModuleFederation = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'home',
          filename: 'static/chunks/remoteEntry.js',
          remotes: {
            login: 'login@http://localhost:3001/remoteEntry.js'
          },
          exposes: {},
          shared: {
          },
        }),
      );
    }

    return config;
  },
};

module.exports = {...nextConfig, ...nextModuleFederation}
