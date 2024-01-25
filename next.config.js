/** @type {import('next').NextConfig} */
// add the styledComponents to the runtime compiler;

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },

  images: {
    domains: [
      's3.amazonaws.com',
      'amazonaws.com',
      'sasser-next-ecommerce-admin-image-bucket.s3.amazonaws.com',
    ],
  },
};

module.exports = nextConfig;
