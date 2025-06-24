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
