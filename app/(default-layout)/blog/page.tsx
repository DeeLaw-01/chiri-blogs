'use client'

import { useEffect } from 'react'

/**
 * Blog page that redirects to the main blogs listing page
 * This maintains backward compatibility for any existing /blog links
 */
export default function BlogPage() {
  useEffect(() => {
    // Redirect to the main blogs page using direct navigation
    // to bypass i18n routing since /blogs is outside locale structure
    window.location.href = '/blogs'
  }, [])

  return null // No UI needed since we're redirecting
}
