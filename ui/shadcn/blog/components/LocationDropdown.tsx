import React from 'react'
import { MapPin } from 'lucide-react'
import { LocationResult } from '@/ui/shadcn/blog/types'

interface LocationDropdownProps {
  results: LocationResult[]
  show: boolean
  onSelect: (location: LocationResult) => void
}

const LocationDropdown: React.FC<LocationDropdownProps> = ({ results, show, onSelect }) => {
  if (!show || results.length === 0) return null

  return (
    <div className='absolute z-10 w-full bg-white border rounded-md shadow-lg max-h-60 overflow-y-auto'>
      {results.map(location => (
        <div
          key={location.id}
          className='px-4 py-2 hover:bg-gray-100 cursor-pointer border-b last:border-b-0'
          onClick={() => onSelect(location)}
        >
          <div className='flex items-center gap-2'>
            <MapPin className='w-4 h-4 text-gray-400' />
            <div>
              <div className='font-medium'>{location.name}</div>
              {location.country && (
                <div className='text-sm text-gray-500'>{location.country}</div>
              )}
              <div className='text-xs text-gray-400'>Code: {location.locode}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LocationDropdown 