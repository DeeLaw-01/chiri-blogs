'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import DynamicBlogFlightFilter from './DynamicBlogFlightFilter'
import { cn } from '@/src/utils/shadcn/cn'
import type { LocationResult } from '@/ui/shadcn/blog/types'

interface BlogHeroSectionProps {
  title: string
  coverImage?: string
  breadcrumbs: React.ReactNode
  shareButton?: React.ReactNode
  className?: string
  fromCity?: {
    name: string
    locode: string
    country?: string
  } | null
  toCity?: {
    name: string
    locode: string
    country?: string
  } | null
}

const BlogHeroSection: React.FC<BlogHeroSectionProps> = ({
  title,
  coverImage,
  breadcrumbs,
  shareButton,
  className,
  fromCity,
  toCity
}) => {
  const [isScrolled, setIsScrolled] = useState(false)
  
  // Convert city data to LocationResult format
  const initialOrigin: LocationResult | null = fromCity ? {
    id: 'from-city',
    name: fromCity.name,
    locode: fromCity.locode,
    country: fromCity.country
  } : null
  
  const initialDestinations: LocationResult[] = toCity ? [{
    id: 'to-city',
    name: toCity.name,
    locode: toCity.locode,
    country: toCity.country
  }] : []

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      // Use fixed height calculation based on our new fixed hero height
      const heroHeight = 500 // Fixed maximum height
      setIsScrolled(scrollPosition > heroHeight - 120) // Start transition 120px before
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getOptimizedImageUrl = (url: string) => {
    if (!url || !url.includes('res.cloudinary.com')) return url
    // Insert optimization parameters before /v[0-9]/ or /upload/ if version is missing
    // Standard format: .../upload/v123456/... -> .../upload/f_auto,q_auto,w_1200/v123456/...
    return url.replace(/\/upload\//, '/upload/f_auto,q_auto,w_1200/')
  }

  return (
    <>
      {/* Hero Section */}
      <section
        className={cn(
          "relative min-h-[400px] md:min-h-[500px] max-h-[500px] md:max-h-[600px] flex flex-col justify-center overflow-hidden",
          className
        )}
      >
        {/* Background Image */}
        {coverImage && (
          <div className="absolute inset-0 z-0">
            <Image
              src={getOptimizedImageUrl(coverImage)}
              alt={title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 100vw"
              unoptimized
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center flex-1 px-4 pt-4 pb-8">
          {/* Breadcrumbs and Share Button */}
          <div className="mb-16 max-w-5xl mx-auto w-full">
            <div className="flex justify-between items-center">
              <div className="flex-1">
                {breadcrumbs}
              </div>
              {shareButton && (
                <div className="ml-4">
                  {shareButton}
                </div>
              )}
            </div>
          </div>

          {/* Title */}
          <div className="max-w-5xl mx-auto text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold text-white mb-4 drop-shadow-lg leading-tight">
              {title}
            </h1>
          </div>

          {/* Flight Search Filter - In Hero */}
          <div
            className={cn(
              "transition-all duration-500 ease-in-out",
              isScrolled ? "opacity-0 pointer-events-none scale-95" : "opacity-100 scale-100"
            )}
          >
            <DynamicBlogFlightFilter 
              widthMode="fit" 
              initialOrigin={initialOrigin}
              initialDestinations={initialDestinations}
            />
          </div>
        </div>

        {/* Curved Bottom (deeper downward curve to match screenshot) */}
        <div className="absolute bottom-0 left-0 right-0 z-20 -mb-[1px]">
          <svg
            className="w-full h-16 sm:h-20 md:h-24 lg:h-28"
            viewBox="0 0 1200 140"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,0 C0,45 35,90 60,90 L1140,90 C1165,90 1200,45 1200,0 L1200,140 L0,140 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Sticky Flight Search Filter */}
      <div
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out p-3",
          isScrolled
            ? "transform translate-y-0 opacity-100"
            : "transform -translate-y-full opacity-0 pointer-events-none"
        )}
      >
        {isScrolled && (
          <DynamicBlogFlightFilter 
            widthMode="full" 
            initialOrigin={initialOrigin}
            initialDestinations={initialDestinations}
          />
        )}
      </div>
    </>
  )
}

export default BlogHeroSection
