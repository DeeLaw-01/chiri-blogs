import React from 'react'
import { Button } from '@/ui/shadcn/ui/button'
import { CalendarIcon, Users, Search, MapPin, SlidersHorizontal } from 'lucide-react'
import { cn } from '@/src/utils/shadcn/cn'
import { LocationResult } from '@/ui/shadcn/blog/types'

interface FlightSearchFilterPlaceholderProps {
  className?: string
  widthMode?: 'fit' | 'full'
  initialOrigin?: LocationResult | null
  initialDestinations?: LocationResult[]
}

const FlightSearchFilterPlaceholder: React.FC<FlightSearchFilterPlaceholderProps> = ({
  className = "",
  widthMode = 'full',
  initialOrigin = null,
  initialDestinations = []
}) => {
  // Helper to format display strings matching the real component
  const originDisplay = initialOrigin ? initialOrigin.name : 'Origin'
  const destinationDisplay = initialDestinations.length > 0 && initialDestinations[0]?.name
    ? `${initialDestinations[0].name.split(' ')[0]}${initialDestinations.length > 1 ? ` +${initialDestinations.length - 1}` : ''}` 
    : 'Anywhere'

  return (
    <div className={cn(
      widthMode === 'full' ? "w-full" : "w-fit mx-auto",
      className
    )}>
      {/* Mobile condensed trigger - Visual only */}
      <div className="md:hidden mb-3">
        <button className="w-full rounded-full bg-white px-4 py-3 shadow-md text-left flex gap-10 items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <div className="text-sm">
              <div className="font-medium">Plan your trip</div>
              <div className="text-gray-600">
                {originDisplay} · {destinationDisplay}
              </div>
            </div>
          </div>
          <div className="rounded-full bg-primary text-white p-2.5">
            <Search className="h-5 w-5" />
          </div>
        </button>
      </div>

      {/* Desktop Pill Container - Visual only */}
      <div className={cn(
        widthMode === 'full' ? "max-w-[1200px] mx-auto" : "w-fit",
        "px-3"
      )}>
        <div className={cn(
          "hidden md:flex flex-col md:flex-row items-stretch gap-0 bg-[#F7F7F7] border border-white/40 shadow-xl",
          "rounded-2xl md:rounded-[999px] overflow-hidden",
          widthMode === 'full' ? "mx-auto" : "w-fit"
        )}>
          {/* Where */}
          <button
            type="button"
            className={cn(
              "group flex items-center gap-3 pl-4 md:pl-5 pr-4 md:pr-6 py-3 md:py-4 rounded-t-2xl md:rounded-none md:rounded-l-[999px] transition-colors w-full",
              "hover:bg-white text-gray-800 hover:text-primary"
            )}
          >
            <MapPin className="h-5 w-5 text-primary" />
            <div className="flex flex-col text-gray-800 group-hover:text-primary text-left">
              <div className="text-sm text-black leading-4">Where to?</div>
              <div className="text-sm leading-5 text-left">
                {initialOrigin ? initialOrigin.name : 'Select origin'} - {initialDestinations.length > 0 ? destinationDisplay : 'Anywhere'}
              </div>
            </div>
          </button>

          {/* Divider */}
          <div className="hidden md:block w-px my-0 bg-gray-200/80" />

          {/* When */}
          <div className="px-0">
            <button
              type="button"
              className={cn(
                "group flex items-center gap-3 px-4 md:px-6 py-3 md:py-4 md:pr-20 rounded-none transition-colors h-full w-full",
                "hover:bg-white text-gray-800 hover:text-primary"
              )}
            >
              <CalendarIcon className="h-5 w-5 text-primary" />
              <div className="flex flex-col">
                <span className="text-sm text-black leading-4 text-left">When?</span>
                <span className="text-sm leading-5">Anytime</span>
              </div>
            </button>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px my-0 bg-gray-200/80" />

          {/* Travelers */}
          <div className="px-0">
            <button
              type="button"
              className={cn(
                "group flex items-center gap-3 px-4 md:px-6 py-3 md:py-4 md:pr-20 rounded-none transition-colors h-full w-full",
                "hover:bg-white text-gray-800 hover:text-primary"
              )}
            >
              <Users className="h-5 w-5 text-primary" />
              <div className="flex flex-col">
                <span className="text-sm text-black leading-4">Travelers</span>
                <span className="text-sm leading-5">1 traveler</span>
              </div>
            </button>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px my-0 bg-gray-200/80" />

          {/* Filters (Visual only) */}
          <div className="px-0">
            <button
              type="button"
              className={cn(
                "group flex items-center gap-3 px-4 md:px-6 py-3 md:py-4 rounded-none transition-colors w-full h-full",
                "hover:bg-white text-gray-800 hover:text-primary"
              )}
            >
              <SlidersHorizontal className="h-5 w-5 text-primary" />
              <div className="flex flex-col">
                <span className="text-sm text-black text-left md:leading-none">Filters</span>
                <span className="text-xs text-muted-foreground md:leading-none md:whitespace-nowrap">Any • No style</span>
              </div>
            </button>
          </div>

          {/* Reset and Search */}
          <div className="flex items-center pr-3 pl-3 md:pr-2 md:pl-4 gap-2 w-full md:w-auto py-3 md:py-0">
            <Button
              className="rounded-full bg-primary text-white px-6 h-12 shadow-md w-full md:w-auto"
            >
              <Search className="h-5 w-5 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlightSearchFilterPlaceholder
