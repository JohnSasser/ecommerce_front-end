/** @type {import('next').NextConfig} */
// add the styledComponents to the runtime compiler;

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
