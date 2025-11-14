import React from 'react'
import { Input } from '@/ui/shadcn/ui/input'
import { Label } from '@/ui/shadcn/ui/label'
import { Button } from '@/ui/shadcn/ui/button'
import { Loader2, X } from 'lucide-react'
import { LocationResult } from '@/ui/shadcn/blog/types'
import LocationDropdown from '@/ui/shadcn/blog/components/LocationDropdown'
import SelectedLocationDisplay from '@/ui/shadcn/blog/components/SelectedLocationDisplay'

interface LocationSearchInputProps {
  label: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  isSearching: boolean
  results: LocationResult[]
  showResults: boolean
  onSelect: (location: LocationResult) => void
  selectedLocation: LocationResult | null
  onClear: () => void
  type: 'from' | 'to'
}

const LocationSearchInput: React.FC<LocationSearchInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  isSearching,
  results,
  showResults,
  onSelect,
  selectedLocation,
  onClear,
  type
}) => {
  const containerClass = type === 'from' ? 'from-location-search-container' : 'to-location-search-container'

  return (
    <div className={`relative ${containerClass}`}>
      <Label htmlFor={`${type}-location-search`}>{label}</Label>
      <div className='relative'>
        <Input
          id={`${type}-location-search`}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          className='mb-4 pr-8'
        />
        {(isSearching || selectedLocation) && (
          <div className='absolute right-2 top-1/2 transform -translate-y-1/2 mb-4'>
            {isSearching ? (
              <Loader2 className='w-4 h-4 animate-spin text-gray-400' />
            ) : selectedLocation ? (
              <Button
                type='button'
                variant='ghost'
                size='sm'
                onClick={onClear}
                className='p-0 h-4 w-4 hover:bg-gray-100'
              >
                <X className='w-3 h-3' />
              </Button>
            ) : null}
          </div>
        )}
      </div>

      <LocationDropdown
        results={results}
        show={showResults}
        onSelect={onSelect}
      />

      {selectedLocation && (
        <SelectedLocationDisplay
          location={selectedLocation}
          type={type}
          onClear={onClear}
        />
      )}
    </div>
  )
}

export default LocationSearchInput 