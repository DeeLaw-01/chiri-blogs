const env = {
  prod: 'production',
  test: 'preview',
  dev: 'development',
}

const isProduction = process.env.NEXT_PUBLIC_VERCEL_ENV === env.prod
const isTest = process.env.NEXT_PUBLIC_VERCEL_ENV === env.test
const isDevelopment = process.env.NEXT_PUBLIC_VERCEL_ENV === env.dev

const isBrowser = typeof window !== 'undefined'

module.exports = { isProduction, isTest, isDevelopment, isBrowser }
