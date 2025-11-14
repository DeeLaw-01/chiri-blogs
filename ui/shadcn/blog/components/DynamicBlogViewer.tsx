'use client'

import React, { useMemo, useState, useCallback, useEffect, useRef } from 'react'
import { Section, StopsAnalysisSection as StopsAnalysisSectionType } from '@/ui/shadcn/blog/types'
import { renderPreviewSection } from '@/src/utils/shadcn/blog/previewRenderers'
import {
  AirlineFlights,
  CheapestAirline,
  RoundTripEstimate,
  StopsAnalysisSection,
  PackageSearchSection,
  FlightSearchFilter,
  FlightSkeleton,
  PackageSkeleton,
  BlogHeroSection
} from '@/ui/shadcn/blog/components/'
import { DateRange } from 'react-day-picker'
import { LocationResult } from '@/ui/shadcn/blog/types'

interface FlightFilters {
  dateRange: DateRange | undefined
  origin: LocationResult | null
  destinations: LocationResult[]
  adults: number
  children: number
  infants: number
}

interface DynamicBlogViewerProps {
  sections: Section[]
  title: string
  coverImage?: string
  renderFlightSearchFilter?: boolean
  breadcrumbs?: BreadcrumbItem[]
  metadata?: {
    fromCity?: {
      name: string
      locode: string
      country?: string
    }
    toCity?: {
      name: string
      locode: string
      country?: string
    }
  }
}

interface BreadcrumbItem {
  name: string
  link: string
  icon?: string
}

const DynamicBlogViewer: React.FC<DynamicBlogViewerProps> = ({
  sections,
  title,
  coverImage,
  renderFlightSearchFilter = true,
  breadcrumbs,
  metadata
}) => {
  // Flight filter state
  const [flightFilters, setFlightFilters] = useState<FlightFilters>({
    dateRange: undefined,
    origin: null,
    destinations: [],
    adults: 1,
    children: 0,
    infants: 0
  })

  // Track which sections are visible and should load
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const sectionRefs = useRef<Map<string, HTMLDivElement>>(new Map())

  // Carousel state for FlightList sections
  const [carouselStates, setCarouselStates] = useState<{ [key: string]: number }>({})

  const updateCarouselSlide = (sectionId: string, slide: number) => {
    setCarouselStates(prev => ({ ...prev, [sectionId]: slide }))
  }

  // Intersection Observer for lazy loading dynamic sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.getAttribute('data-section-id')
          if (sectionId && entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, sectionId]))
          }
        })
      },
      {
        rootMargin: '100px', // Start loading 100px before section comes into view
        threshold: 0.1
      }
    )

    // Observe all dynamic sections
    sectionRefs.current.forEach((ref, sectionId) => {
      if (ref) {
        ref.setAttribute('data-section-id', sectionId)
        observer.observe(ref)
      }
    })

    return () => observer.disconnect()
  }, [sections])

  const setSectionRef = useCallback((sectionId: string) => (ref: HTMLDivElement | null) => {
    if (ref) {
      sectionRefs.current.set(sectionId, ref)
    } else {
      sectionRefs.current.delete(sectionId)
    }
  }, [])

  // Define which sections are dynamic (require API calls)
  const isDynamicSection = useMemo(() => {
    return (sectionType: string) => [
      'AirlineFlights',
      'CheapestAirline',
      'RoundTripEstimate',
      'StopsAnalysisSection',
      'PackageSearchSection',
      'FlightList' // Add FlightList as it may contain static data but should use new design
    ].includes(sectionType)
  }, [])

  const renderDynamicSection = (section: Section, index: number) => {
    const sectionId = section.id || `section-${index}`
    const isVisible = visibleSections.has(sectionId)

    // Convert DynamicBlogViewer filters to AirlineFlights filters format
    const convertedFilters = flightFilters ? {
      tripType: 'one-way' as const,
      departureDate: flightFilters.dateRange?.from,
      returnDate: flightFilters.dateRange?.to,
      adults: flightFilters.adults,
      children: flightFilters.children,
      travelClass: 'Economy' as const
    } : undefined

    // Handle dynamic components with API parameter fetching
    switch (section.type) {
      case 'AirlineFlights':
        return (
          <div
            key={`${section.id || index}-${JSON.stringify(flightFilters)}`}
            ref={setSectionRef(sectionId)}
            className="min-h-[200px]"
          >
            {isVisible ? (
              <AirlineFlights
                section={section}
                index={index}
                onUpdate={() => { }} // No-op for user view
                readOnly={true} // This triggers auto-fetch behavior with progressive rendering
                filters={convertedFilters}
              />
            ) : (
              <div className="space-y-4 p-6 border rounded-lg">
                <div className="mb-6">
                  <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mt-2 animate-pulse"></div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <FlightSkeleton count={4} />
                </div>
              </div>
            )}
          </div>
        )

      case 'CheapestAirline':
        return (
          <div
            key={`${section.id || index}-${JSON.stringify(flightFilters)}`}
            ref={setSectionRef(sectionId)}
            className="min-h-[200px]"
          >
            {isVisible ? (
              <CheapestAirline
                section={section}
                index={index}
                onUpdate={() => { }} // No-op for user view
                readOnly={true} // This triggers auto-fetch behavior
              />
            ) : (
              <div className="animate-pulse space-y-4 p-6 border rounded-lg">
                <div className="h-6 bg-gray-200 rounded w-2/3"></div>
                <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="h-32 bg-gray-100 rounded"></div>
                  <div className="h-32 bg-gray-100 rounded"></div>
                  <div className="h-32 bg-gray-100 rounded"></div>
                </div>
              </div>
            )}
          </div>
        )

      case 'RoundTripEstimate':
        return (
          <div
            key={section.id || index}
            ref={setSectionRef(sectionId)}
            className="min-h-[150px]"
          >
            {isVisible ? (
              <RoundTripEstimate
                section={section as {
                  type: 'RoundTripEstimate'
                  id: string
                  title: string
                  subtitle: string
                  fromLocation?: string
                  toLocation?: string
                  priceEstimate?: { minPrice: number; maxPrice: number; currentPrice: number; currency: string; isLow: boolean; trend: 'up' | 'down' | 'stable'; priceRange: 'low' | 'medium' | 'high' }
                  apiParams?: {
                    fromLocation: string
                    fromLocationLocode: string
                    toLocation: string
                    toLocationLocode: string
                  }
                }}
                index={index}
                onUpdate={() => { }} // No-op for user view
                readOnly={true} // This triggers auto-fetch behavior
              />
            ) : (
              <div className="animate-pulse space-y-4 p-6 border rounded-lg">
                <div className="h-6 bg-gray-200 rounded w-3/5"></div>
                <div className="flex items-center justify-between">
                  <div className="h-8 bg-gray-200 rounded w-24"></div>
                  <div className="h-12 bg-gray-100 rounded w-32"></div>
                </div>
              </div>
            )}
          </div>
        )

      case 'StopsAnalysisSection':
        return (
          <div
            key={section.id || index}
            ref={setSectionRef(sectionId)}
            className="min-h-[300px]"
          >
            {isVisible ? (
              <StopsAnalysisSection
                section={section as StopsAnalysisSectionType}
                index={index}
                onUpdate={() => { }} // No-op for user view
                readOnly={true} // This triggers auto-fetch behavior
              />
            ) : (
              <div className="space-y-4 p-6 border rounded-lg">
                <div className="mb-6">
                  <div className="h-6 bg-gray-200 rounded w-4/5 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3 mt-2 animate-pulse"></div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <FlightSkeleton count={4} />
                </div>
                <div className="h-48 bg-gray-100 rounded animate-pulse mt-4"></div>
              </div>
            )}
          </div>
        )

      case 'PackageSearchSection':
        return (
          <div
            key={section.id || index}
            ref={setSectionRef(sectionId)}
            className="min-h-[250px]"
          >
            {isVisible ? (
              <PackageSearchSection
                section={section}
                index={index}
                onUpdate={() => { }} // No-op for user view
                readOnly={true} // This triggers auto-fetch behavior
              />
            ) : (
              <div className="space-y-4 p-6 border rounded-lg">
                <div className="mb-6">
                  <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mt-2 animate-pulse"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <PackageSkeleton count={3} />
                </div>
              </div>
            )}
          </div>
        )

      case 'FlightList':
        const flightSection = section as { flights?: { from: string; to: string; date: string; duration: string; price: string }[] }
        const flights = flightSection.flights || []
        const sectionId = section.id || `flight-list-${index}`
        const currentSlide = carouselStates[sectionId] || 0
        const itemsPerPage = 3
        const totalSlides = Math.ceil(flights.length / itemsPerPage)

        const nextSlide = () => {
          updateCarouselSlide(sectionId, (currentSlide + 1) % totalSlides)
        }

        const prevSlide = () => {
          updateCarouselSlide(sectionId, (currentSlide - 1 + totalSlides) % totalSlides)
        }

        return (
          <div key={section.id || index} className="relative">
            {flights.length > itemsPerPage && (
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-gray-600">
                  Showing {Math.min(currentSlide * itemsPerPage + 1, flights.length)}-{Math.min((currentSlide + 1) * itemsPerPage, flights.length)} of {flights.length} flights
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    disabled={currentSlide === totalSlides - 1}
                    className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }, (_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className='grid gap-4 grid-cols-1 lg:grid-cols-2 justify-items-center mx-auto max-w-6xl'>
                      {flights
                        .slice(slideIndex * itemsPerPage, (slideIndex + 1) * itemsPerPage)
                        .map((flight, i: number) => {
                          // Convert flight data to match EnhancedFlightCard format
                          const formatTime = (dateStr: string) => {
                            try {
                              const date = new Date(dateStr)
                              return date.toLocaleTimeString('en-US', {
                                hour: '2-digit',
                                minute: '2-digit',
                                hour12: false
                              })
                            } catch {
                              return '08:00'
                            }
                          }

                          const formatPrice = (priceStr: string) => {
                            const price = parseFloat(priceStr) || 0
                            return Math.round(price)
                          }

                          return (
                            <div
                              key={i}
                              className='w-full max-w-sm hover:shadow-lg transition-shadow duration-200 border border-gray-200 rounded-lg'
                            >
                              <div className='p-4'>
                                {/* Compact header with airline and price */}
                                <div className='flex items-center justify-between mb-3'>
                                  <div className='flex items-center gap-2'>
                                    <div className='w-4 h-4 text-primary'>
                                      <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                                      </svg>
                                    </div>
                                    <span className='font-medium text-gray-900'>Flight</span>
                                  </div>
                                  <div className='text-right'>
                                    <div className='text-lg font-bold text-primary'>
                                      PKR {formatPrice(flight.price)}
                                    </div>
                                  </div>
                                </div>

                                {/* Flight route */}
                                <div className='grid grid-cols-3 items-center gap-2 mb-3'>
                                  <div className='text-center'>
                                    <div className='text-lg font-bold'>{formatTime(flight.date)}</div>
                                    <div className='text-sm text-gray-600'>{flight.from}</div>
                                  </div>

                                  <div className='flex flex-col items-center'>
                                    <div className='text-xs text-gray-500 mb-1'>{flight.duration}</div>
                                    <div className='w-full h-px bg-gray-300 relative'>
                                      <div className='w-3 h-3 text-primary absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white'>
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                                        </svg>
                                      </div>
                                    </div>
                                    <div className='text-xs mt-1 px-2 py-1 bg-green-100 text-green-800 rounded-full'>
                                      Direct
                                    </div>
                                  </div>

                                  <div className='text-center'>
                                    <div className='text-lg font-bold'>{formatTime(flight.date)}</div>
                                    <div className='text-sm text-gray-600'>{flight.to}</div>
                                  </div>
                                </div>

                                {/* Bottom info */}
                                <div className='flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100'>
                                  <span>Available seats</span>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Dots Indicator */}
            {flights.length > itemsPerPage && (
              <div className="flex justify-center mt-4 gap-2">
                {Array.from({ length: totalSlides }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => updateCarouselSlide(sectionId, index)}
                    className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                      }`}
                  />
                ))}
              </div>
            )}
          </div>
        )

      default:
        return null
    }
  }

  const renderStaticSection = (section: Section, index: number) => {
    return (
      <div key={section.id || index}>
        {renderPreviewSection(section)}
      </div>
    )
  }

  // Recreate the original section order for proper layout
  const renderSectionInOrder = (section: Section, index: number) => {
    if (isDynamicSection(section.type)) {
      return renderDynamicSection(section, index)
    } else {
      return renderStaticSection(section, index)
    }
  }

  // Share handler
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: title,
          url: window.location.href
        })
      } else {
        // Fallback to copying to clipboard
        await navigator.clipboard.writeText(window.location.href)
        // You could add a toast notification here if needed
        alert('Link copied to clipboard!')
      }
    } catch (error) {
      // User cancelled or error occurred
      console.error('Share failed:', error)
    }
  }

  return (
    <div className="relative">
      {/* Hero Section with Title and Cover Image */}
      <BlogHeroSection
        title={title}
        coverImage={coverImage}
        breadcrumbs={breadcrumbs ? <Breadcrumbs items={breadcrumbs} title={title} /> : <DefaultBreadcrumbs title={title} />}
        fromCity={metadata?.fromCity || null}
        toCity={metadata?.toCity || null}
        shareButton={
          <button
            onClick={handleShare}
            className="p-2 rounded-full hover:bg-white/20 text-white hover:text-white transition-colors"
            aria-label="Share blog"
          >
            <ShareIcon className="w-5 h-5" />
          </button>
        }
      />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto p-4 space-y-8">
        {/* Render all sections in their original order, static ones load immediately, dynamic ones show loading states */}
        {sections.map((section, index) => renderSectionInOrder(section, index))}
      </div>
    </div>
  )
}

// Breadcrumb components
const Breadcrumbs: React.FC<{ items: BreadcrumbItem[]; title: string }> = ({ items, title }) => {
  return (
    <nav
      className="flex items-center space-x-2 text-sm text-white/90"
      itemScope
      itemType="http://schema.org/BreadcrumbList"
    >
      {items.map((breadcrumb, index) => (
        <React.Fragment key={index}>
          <div
            itemProp="itemListElement"
            itemScope
            itemType="http://schema.org/ListItem"
          >
            <a
              href={breadcrumb.link}
              className="flex items-center hover:text-white transition-colors"
              itemProp="item"
            >
              {breadcrumb.icon === 'home' && <HomeIcon className="w-4 h-4" />}
              {!breadcrumb.icon && (
                <span itemProp="name">{breadcrumb.name}</span>
              )}
            </a>
            <meta itemProp="position" content={String(index + 1)} />
          </div>
          {index < items.length - 1 && (
            <ChevronRightIcon className="w-4 h-4" aria-hidden="true" />
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}

const DefaultBreadcrumbs: React.FC<{ title: string }> = ({ title }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-white/90">
      <a href="/" className="flex items-center hover:text-white transition-colors">
        <HomeIcon className="w-4 h-4" />
      </a>
      <ChevronRightIcon className="w-4 h-4" />
      <a href="/blogs" className="hover:text-white transition-colors">
        Blogs
      </a>
      <ChevronRightIcon className="w-4 h-4" />
      <span className="text-white font-medium truncate max-w-[200px]">
        {title}
      </span>
    </nav>
  )
}

// Icon components (inline SVGs for simplicity)
const HomeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
)

const ChevronRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
)

const ShareIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
    />
  </svg>
)

// Separate component for FlightSearchFilter that can be used outside containers
export const DynamicBlogFlightFilter: React.FC<{
  onFilterChange?: (filters: FlightFilters) => void
  widthMode?: 'fit' | 'full'
  initialOrigin?: LocationResult | null
  initialDestinations?: LocationResult[]
}> = ({ onFilterChange, widthMode = 'fit', initialOrigin, initialDestinations }) => {
  return (
    <FlightSearchFilter
      onFilterChange={onFilterChange}
      widthMode={widthMode}
      initialOrigin={initialOrigin}
      initialDestinations={initialDestinations}
    />
  )
}

export default DynamicBlogViewer 