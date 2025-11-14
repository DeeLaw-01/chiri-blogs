import React from 'react'
import { Button } from '@/ui/shadcn/ui/button'
import { Plane, MapPin, X } from 'lucide-react'
import { LocationResult } from '@/ui/shadcn/blog/types'

interface SelectedLocationDisplayProps {
  location: LocationResult
  type: 'from' | 'to'
  onClear: () => void
}

const SelectedLocationDisplay: React.FC<SelectedLocationDisplayProps> = ({ location, type, onClear }) => {
  const bgColor = type === 'from' ? 'bg-emerald-50 border-emerald-200' : 'bg-green-50 border-green-200'
  const iconColor = type === 'from' ? 'text-emerald-600' : 'text-green-600'
  const textColor = type === 'from' ? 'text-emerald-800' : 'text-green-800'
  const Icon = type === 'from' ? Plane : MapPin

  return (
    <div className={`mb-4 p-3 ${bgColor} border rounded-md`}>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Icon className={`w-4 h-4 ${iconColor}`} />
          <span className={`text-sm font-medium ${textColor}`}>
            {type === 'from' ? 'From' : 'To'}: {location.name} ({location.locode})
          </span>
        </div>
        <Button
          type='button'
          variant='ghost'
          size='sm'
          onClick={onClear}
          className={`${iconColor} hover:${textColor} p-1`}
        >
          <X className='w-4 h-4' />
        </Button>
      </div>
    </div>
  )
}

export default SelectedLocationDisplay 