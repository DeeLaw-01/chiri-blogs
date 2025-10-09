const createNextIntlPlugin = require('next-intl/plugin')

const allowedExternalDomainsForImage = [
  'pictures.tryp.com',
  'medium.com',
  'images.kiwi.com',
  'q-xx.bstatic.com',
  'cdn-images-1.medium.com',
  'attractionpictures.s3.eu-central-1.amazonaws.com',
  'airlines-photos.s3.eu-central-1.amazonaws.com',
  'locationpictures.s3.eu-central-1.amazonaws.com',
  'tryp-com-blog-content.s3.eu-central-1.amazonaws.com',
  'image-cdn.didatravel.com',
  'image2-cdn.didatravel.com',
  'cdn.getyourguide.com',
  'bstatic.com',
  'cf.bstatic.com',
  'api-img.hotelston.com',
  'storage.googleapis.com',
  'us.dotwconnect.com',
  'cf2.bstatic.com',
  'res.cloudinary.com',
]

/**
 * @type {import('next').NextConfig}
 **/
const NextConfig = {
  experimental: {
    esmExternals: false,
    scrollRestoration: true,
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    path: `https://images.tryp.com/prod/`,
    domains: allowedExternalDomainsForImage,
    remotePatterns: allowedExternalDomainsForImage.map((domain) => ({
      protocol: 'https',
      hostname: domain,
    })),
  },
  // Reverse proxy configuration for external authentication app
  // This proxies authentication pages from chiri-booking-app.vercel.app
  // Users will see chiri.pk/login but content is served from the external app
  // See REVERSE_PROXY_SETUP.md for detailed documentation
  async rewrites() {
    return {
      beforeFiles: [
        // ===== API ROUTES (MUST BE FIRST) =====
        // API routes must be proxied before pages to ensure API calls from
        // the external app go to the correct backend
        {
          source: '/api/admin/:path*',
          destination: 'https://chiri-booking-app.vercel.app/api/admin/:path*',
        },
        {
          source: '/api/auth/:path*',
          destination: 'https://chiri-booking-app.vercel.app/api/auth/:path*',
        },
        {
          source: '/api/blogs/:path*',
          destination: 'https://chiri-booking-app.vercel.app/api/blogs/:path*',
        },
        {
          source: '/api/drafts/:path*',
          destination: 'https://chiri-booking-app.vercel.app/api/drafts/:path*',
        },
        {
          source: '/api/one-way-flights/:path*',
          destination:
            'https://chiri-booking-app.vercel.app/api/one-way-flights/:path*',
        },
        {
          source: '/api/carriers/:path*',
          destination:
            'https://chiri-booking-app.vercel.app/api/carriers/:path*',
        },
        {
          source: '/api/blog-templates/:path*',
          destination:
            'https://chiri-booking-app.vercel.app/api/blog-templates/:path*',
        },
        {
          source: '/api/login/:path*',
          destination: 'https://chiri-booking-app.vercel.app/api/login/:path*',
        },
        {
          source: '/api/signup/:path*',
          destination: 'https://chiri-booking-app.vercel.app/api/signup/:path*',
        },
        {
          source: '/api/register/:path*',
          destination:
            'https://chiri-booking-app.vercel.app/api/register/:path*',
        },
        {
          source: '/api/users/:path*',
          destination: 'https://chiri-booking-app.vercel.app/api/users/:path*',
        },
        {
          source: '/api/user/:path*',
          destination: 'https://chiri-booking-app.vercel.app/api/user/:path*',
        },
        {
          source: '/api/session/:path*',
          destination:
            'https://chiri-booking-app.vercel.app/api/session/:path*',
        },
        {
          source: '/api/password/:path*',
          destination:
            'https://chiri-booking-app.vercel.app/api/password/:path*',
        },

        // HTML Pages
        {
          source: '/login',
          destination: 'https://chiri-booking-app.vercel.app/login',
        },
        {
          source: '/signup',
          destination: 'https://chiri-booking-app.vercel.app/signup',
        },
        {
          source: '/register',
          destination: 'https://chiri-booking-app.vercel.app/register',
        },
        {
          source: '/admin/:path*',
          destination: 'https://chiri-booking-app.vercel.app/admin/:path*',
        },
        {
          source: '/blog/:path*',
          destination: 'https://chiri-booking-app.vercel.app/blog/:path*',
        },
        {
          source: '/forgot-password',
          destination: 'https://chiri-booking-app.vercel.app/forgot-password',
        },
        {
          source: '/reset-password',
          destination: 'https://chiri-booking-app.vercel.app/reset-password',
        },
      ],
      afterFiles: [
        // Proxy Next.js internal assets (CSS, JS, chunks, etc.)
        // This is critical for styling and functionality to work
        {
          source: '/_next/static/:path*',
          destination:
            'https://chiri-booking-app.vercel.app/_next/static/:path*',
        },
        {
          source: '/_next/image/:path*',
          destination:
            'https://chiri-booking-app.vercel.app/_next/image/:path*',
        },
        {
          source: '/_next/:path*',
          destination: 'https://chiri-booking-app.vercel.app/_next/:path*',
        },
        // Proxy public folder assets (if any)
        {
          source: '/fonts/:path*',
          destination: 'https://chiri-booking-app.vercel.app/fonts/:path*',
        },
        {
          source: '/images/:path*',
          destination: 'https://chiri-booking-app.vercel.app/images/:path*',
        },
        {
          source: '/assets/:path*',
          destination: 'https://chiri-booking-app.vercel.app/assets/:path*',
        },
        {
          source: '/styles/:path*',
          destination: 'https://chiri-booking-app.vercel.app/styles/:path*',
        },
        {
          source: '/js/:path*',
          destination: 'https://chiri-booking-app.vercel.app/js/:path*',
        },
        {
          source: '/css/:path*',
          destination: 'https://chiri-booking-app.vercel.app/css/:path*',
        },
        // Proxy common meta files
        {
          source: '/manifest.json',
          destination: 'https://chiri-booking-app.vercel.app/manifest.json',
        },
        {
          source: '/site.webmanifest',
          destination: 'https://chiri-booking-app.vercel.app/site.webmanifest',
        },
        // Note: API routes are handled in beforeFiles for higher priority
      ],
    }
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const withNextIntl = createNextIntlPlugin()

const nextConfigHOC = withBundleAnalyzer(withNextIntl(NextConfig))

module.exports = nextConfigHOC
