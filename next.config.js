/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Better for iframe embeds
  },
  // Ensure proper headers for iframe embedding
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'ALLOWALL',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
