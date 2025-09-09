/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains can be removed if you no longer use placehold.co
    domains: ['placehold.co'], 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
