/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig


module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'img.pokemondb.net',
          
        },
        {
          protocol: 'https',
          hostname:"raw.githubusercontent.com",
        },
        {
          protocol: 'https',
          hostname:'github.com'
        }
      ],
    },
  }

 