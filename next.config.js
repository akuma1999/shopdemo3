const Dotenv = require('dotenv-webpack');
const nextConfig = {
  reactStrictMode: true,  webpack: (config, options) => {
    config.plugins = [...config.plugins, new Dotenv()];
    return config;
  }
}

module.exports = nextConfig
