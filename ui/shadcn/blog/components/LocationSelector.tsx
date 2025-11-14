"use client"

import React, { useEffect } from 'react'
import { LocationSearchInput } from '@/ui/shadcn/blog/components/'
import { LocationResult } from '@/ui/shadcn/blog/types'
import { useLocationSearch } from '@/src/hooks/blog/useLocationSearch'

interface LocationSelectorProps {
  fromLabel?: string
  toLabel?: string
  fromPlaceholder?: string
  toPlaceholder?: string
  initialFromLocation?: string
  initialToLocation?: string
  onFromLocationChange?: (location: LocationResult | null) => void
  onToLocationChange?: (location: LocationResult | null) => void
  readOnly?: boolean
  className?: string
}

const LocationSelector: React.FC<LocationSelectorProps> = ({
  fromLabel = "From (Departure City/Country)",
  toLabel = "To (Destination City/Country)",
  fromPlaceholder = "Enter departure location (e.g., New York, United States)",
  toPlaceholder = "Enter destination location (e.g., Copenhagen, Denmark)",
  initialFromLocation,
  initialToLocation,
  onFromLocationChange,
  onToLocationChange,
  readOnly = false,
  className = ""
}) => {
  // From location search
  const fromSearch = useLocationSearch()

  // To location search
  const toSearch = useLocationSearch()

  // Initialize with provided locations - only once on mount
  useEffect(() => {
    if (initialFromLocation && !fromSearch.selectedLocation && !fromSearch.searchTerm) {
      fromSearch.setSearchTerm(initialFromLocation)
      const placeholderLocation: LocationResult = {
        id: 'from-location',
        name: initialFromLocation,
        locode: 'XXXXX',
        country: ''
      }
      fromSearch.setSelectedLocation(placeholderLocation)
    }
  }, [initialFromLocation]) // Remove fromSearch from dependencies to prevent re-initialization

  useEffect(() => {
    if (initialToLocation && !toSearch.selectedLocation && !toSearch.searchTerm) {
      toSearch.setSearchTerm(initialToLocation)
      const placeholderLocation: LocationResult = {
        id: 'to-location',
        name: initialToLocation,
        locode: 'XXXXX',
        country: ''
      }
      toSearch.setSelectedLocation(placeholderLocation)
    }
  }, [initialToLocation]) // Remove toSearch from dependencies to prevent re-initialization

  // Handle location selection callbacks
  const handleFromLocationSelect = (location: LocationResult) => {
    fromSearch.handleLocationSelect(location)
    onFromLocationChange?.(location)
  }

  const handleToLocationSelect = (location: LocationResult) => {
    toSearch.handleLocationSelect(location)
    onToLocationChange?.(location)
  }

  const handleFromLocationClear = () => {
    fromSearch.clearLocation()
    onFromLocationChange?.(null)
  }

  const handleToLocationClear = () => {
    toSearch.clearLocation()
    onToLocationChange?.(null)
  }

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (fromSearch.showResults && !target.closest('.from-location-search-container')) {
        fromSearch.setShowResults(false)
      }
      if (toSearch.showResults && !target.closest('.to-location-search-container')) {
        toSearch.setShowResults(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [fromSearch.showResults, toSearch.showResults, fromSearch, toSearch])

  if (readOnly) {
    return (
      <div className={`space-y-4 ${className}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">{fromLabel}</p>
            <div className="p-3 bg-gray-50 border rounded-md">
              {fromSearch.selectedLocation?.name || initialFromLocation || 'Not selected'}
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">{toLabel}</p>
            <div className="p-3 bg-gray-50 border rounded-md">
              {toSearch.selectedLocation?.name || initialToLocation || 'Not selected'}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* From Location Search */}
      <LocationSearchInput
        label={fromLabel}
        placeholder={fromPlaceholder}
        value={fromSearch.searchTerm}
        onChange={fromSearch.handleInputChange}
        isSearching={fromSearch.isSearching}
        results={fromSearch.results}
        showResults={fromSearch.showResults}
        onSelect={handleFromLocationSelect}
        selectedLocation={fromSearch.selectedLocation}
        onClear={handleFromLocationClear}
        type="from"
      />

      {/* To Location Search */}
      <LocationSearchInput
        label={toLabel}
        placeholder={toPlaceholder}
        value={toSearch.searchTerm}
        onChange={toSearch.handleInputChange}
        isSearching={toSearch.isSearching}
        results={toSearch.results}
        showResults={toSearch.showResults}
        onSelect={handleToLocationSelect}
        selectedLocation={toSearch.selectedLocation}
        onClear={handleToLocationClear}
        type="to"
      />

      {/* Display errors */}
      {(fromSearch.error || toSearch.error) && (
        <div className="text-red-500 text-sm space-y-1">
          {fromSearch.error && <p>From location: {fromSearch.error}</p>}
          {toSearch.error && <p>To location: {toSearch.error}</p>}
        </div>
      )}
    </div>
  )
}

export default LocationSelector 