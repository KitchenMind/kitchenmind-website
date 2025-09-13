/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const isGhPages = process.env.GITHUB_PAGES === 'true';
const isExport = process.env.EXPORT === 'true';
const repoName = 'kitchenmind-website';

const nextConfig = {
  // Only export when explicitly requested or for GitHub Pages
  ...((isGhPages || isExport) && { output: 'export' }),
  // For GitHub Pages project site under https://<user>.github.io/<repo>/
  basePath: isGhPages ? `/${repoName}` : '',
  assetPrefix: isGhPages ? `/${repoName}/` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isGhPages ? `/${repoName}` : '',
  },
  trailingSlash: true,
  images: {
    unoptimized: isGhPages || isExport, // Only unoptimize for export builds
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
  experimental: {
    missingSuspenseWithCSRBailout: false,
  }
};

export default nextConfig;
