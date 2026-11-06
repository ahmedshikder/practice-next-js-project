/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  //https://i1.sndcdn.com/avatars-000605471592-rldfcn-t240x240.jpg
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i1.sndcdn.com',
        port: '',
        pathname: '/avatars-000605471592-rldfcn-t240x240.jpg',
      },
      //https://res.cloudinary.com/dj493l0jy/image/upload/v1773986441/foods/672baf2f-8c93-4d9f-a255-f097b77fc8dc.png
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dj493l0jy/image/**',
      }
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
