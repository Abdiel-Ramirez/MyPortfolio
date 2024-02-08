/** @type {import('next').NextConfig} */
const nextConfig = {
  output:'export',
  basePath: '/MyPortafolio',
  assetPrefix: '/MyPortafolio/',
  images: {
    unoptimized: true,
  },
};
/* module.exports = nextConfig*/

export default nextConfig;
