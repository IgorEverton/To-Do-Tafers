/** @type {import('next').NextConfig} */
const nextConfig = {
  // Outras configurações podem estar presentes aqui
};

module.exports = {
  ...nextConfig,
  serverActions: true,
  swcMinify: false,
};
