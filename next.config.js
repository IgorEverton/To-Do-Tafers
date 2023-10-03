/** @type {import('next').NextConfig} */
const nextConfig = {
  // Outras configurações podem estar presentes aqui
};

module.exports = {
  ...nextConfig,
  serverActions: true,
  swcMinify: false,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(js|mjs|jsx|ts|tsx)$/,
      use: options.defaultLoaders.babel,
      exclude: /node_modules\/(?!@swc\/(?!.*node_modules\/))/,
    });
    return config;
  },
};
