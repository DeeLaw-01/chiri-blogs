'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/ui/shadcn/ui/button'
import { Label } from '@/ui/shadcn/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/ui/shadcn/ui/popover'
import { Calendar } from '@/ui/shadcn/ui/calendar'
import { CalendarIcon, Users, Minus, Plus, Search, MapPin, X, Loader2, SlidersHorizontal } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/ui/shadcn/ui/sheet'
import { Separator } from '@/ui/shadcn/ui/separator'
import { format } from 'date-fns'
import { cn } from '@/src/utils/shadcn/cn'
import { Input } from '@/ui/shadcn/ui/input'
import { DateRange } from 'react-day-picker'
import { useLocationSearch } from '@/src/hooks/blog/useLocationSearch'
import { LocationResult } from '@/ui/shadcn/blog/types'
import { useToast } from '@/src/hooks/use-toast'

interface FlightSearchFilterProps {
  onFilterChange?: (filters: FlightFilters) => void
  className?: string
  hidden?: boolean
  widthMode?: 'fit' | 'full'
  initialOrigin?: LocationResult | null
  initialDestinations?: LocationResult[]
}

interface FlightFilters {
  dateRange: DateRange | undefined
  origin: LocationResult | null
  destinations: LocationResult[]
  adults: number
  children: number
  infants: number
  maxStops: 'any' | 'direct' | '1' | '2'
  travelStyle: 'comfort' | 'budget' | null
}

const LocationSearchInput: React.FC<{
  placeholder: string
  selectedLocation: LocationResult | null
  onLocationSelect: (location: LocationResult) => void
  multiple?: boolean
  selectedLocations?: LocationResult[]
  onMultipleSelect?: (locations: LocationResult[]) => void
  styleVariant?: 'hero' | 'sticky'
  showIcon?: boolean
}> = ({
  placeholder,
  selectedLocation,
  onLocationSelect,
  multiple = false,
  selectedLocations = [],
  onMultipleSelect,
  styleVariant = 'sticky',
  showIcon = true
}) => {
    const locationSearch = useLocationSearch({ debounceMs: 300, pageSize: 10 })
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const handleLocationSelect = (location: LocationResult) => {
      if (multiple && onMultipleSelect) {
        const isSelected = selectedLocations.some(loc => loc.locode === location.locode)
        if (isSelected) {
          onMultipleSelect(selectedLocations.filter(loc => loc.locode !== location.locode))
        } else {
          onMultipleSelect([...selectedLocations, location])
          // Clear the search input after adding a location
          locationSearch.handleInputChange('')
        }
        // Don't close dropdown for multiple selections
      } else {
        onLocationSelect(location)
        setIsOpen(false)
      }
    }

    const removeDestination = (locationCode: string) => {
      if (onMultipleSelect) {
        onMultipleSelect(selectedLocations.filter(loc => loc.locode !== locationCode))
      }
    }

    const handleInputChange = (value: string) => {
      locationSearch.handleInputChange(value)
      if (!value.trim() && !multiple) {
        // For single selection, we can't pass null directly, so we rely on the parent to handle clearing
        // The parent component handles this by checking if selectedLocation is null
      }
    }

    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Element
        if (containerRef.current && !containerRef.current.contains(target)) {
          setIsOpen(false)
        }
      }

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [isOpen])

    const inputRef = useRef<HTMLInputElement>(null)

    const handleTriggerClick = () => {
      setIsOpen(true)
      // Focus the input after the popover opens
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }

    return (
      <div ref={containerRef} className="relative">
        <Popover open={isOpen} onOpenChange={(open) => {
          // Prevent automatic closing - we handle this manually
          if (open) {
            setIsOpen(true)
          }
        }}>
          <PopoverTrigger asChild>
            <Button
              variant={styleVariant === 'hero' ? 'ghost' : 'secondary'}
              onClick={handleTriggerClick}
              className={cn(
                "justify-start text-left font-normal",
                styleVariant === 'hero'
                  ? "bg-transparent hover:bg-transparent border-0 px-0 py-0 h-auto min-w-0 text-inherit"
                  : "bg-white/90 border-white/20 text-gray-700 min-w-[180px] max-w-[250px]",
                (!selectedLocation && selectedLocations.length === 0) && (styleVariant === 'hero' ? "opacity-80" : "text-gray-500")
              )}
            >
              {showIcon && <MapPin className="mr-2 h-4 w-4" />}
              <div className="flex flex-col items-start overflow-hidden">
                {multiple ? (
                  selectedLocations.length > 0 ? (
                    <div className="flex flex-wrap gap-1 max-w-full">
                      {selectedLocations.slice(0, 2).map(loc => (
                        <span key={loc.locode} className={cn(
                          "text-xs px-2 py-0.5 rounded-full",
                          styleVariant === 'hero' ? "bg-transparent text-gray-800 border-0" : "bg-primary/10 text-primary border border-primary/20"
                        )}>
                          {loc.name.split(' ')[0]}
                        </span>
                      ))}
                      {selectedLocations.length > 2 && (
                        <span className="text-xs text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">+{selectedLocations.length - 2}</span>
                      )}
                    </div>
                  ) : (
                    <span className="truncate">{placeholder}</span>
                  )
                ) : (
                  <span className="truncate">
                    {selectedLocation ? selectedLocation.name : placeholder}
                  </span>
                )}
              </div>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-80 p-0"
            align="start"
            onOpenAutoFocus={(e) => e.preventDefault()}
            onCloseAutoFocus={(e) => e.preventDefault()}
          >
            <div
              className="p-3"
              onClick={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Input
                  ref={inputRef}
                  placeholder="Search locations..."
                  value={locationSearch.searchTerm}
                  onChange={(e) => handleInputChange(e.target.value)}
                  onClick={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                  }}
                  onFocus={(e) => {
                    e.stopPropagation()
                  }}
                  onMouseDown={(e) => {
                    e.stopPropagation()
                  }}
                  className="mb-3"
                />
                {locationSearch.isSearching && (
                  <Loader2 className="absolute right-3 top-3 h-4 w-4 animate-spin text-gray-400" />
                )}
              </div>

              {locationSearch.error && (
                <div className="mb-3 p-2 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-sm text-red-600">{locationSearch.error}</p>
                </div>
              )}

              {multiple && selectedLocations.length > 0 && (
                <div className="mb-3">
                  <Label className="text-xs text-gray-600 mb-2 block font-medium">Selected destinations:</Label>
                  <div className="flex flex-wrap gap-2">
                    {selectedLocations.map(location => (
                      <div
                        key={location.locode}
                        className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs flex items-center gap-2 border border-primary/20 hover:bg-primary/15 transition-colors"
                      >
                        <span className="font-medium">{location.name}</span>
                        <X
                          className="h-3 w-3 cursor-pointer hover:text-red-500 transition-colors"
                          onClick={(e) => {
                            e.stopPropagation()
                            removeDestination(location.locode)
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="max-h-60 overflow-y-auto">
                {locationSearch.results.map((location) => (
                  <div
                    key={location.id}
                    className={cn(
                      "p-2 hover:bg-gray-100 cursor-pointer rounded-md border-b last:border-b-0 transition-colors",
                      multiple && selectedLocations.some(loc => loc.locode === location.locode) && "bg-primary/5 border-primary/20"
                    )}
                    onClick={() => handleLocationSelect(location)}
                  >
                    <div className="flex items-center gap-2">
                      <MapPin className={cn(
                        "w-4 h-4",
                        multiple && selectedLocations.some(loc => loc.locode === location.locode)
                          ? "text-primary"
                          : "text-gray-400"
                      )} />
                      <div className="flex-1">
                        <div className="font-medium text-sm flex items-center gap-2">
                          {location.name}
                          {multiple && selectedLocations.some(loc => loc.locode === location.locode) && (
                            <span className="text-xs text-primary">✓ Selected</span>
                          )}
                        </div>
                        {location.country && (
                          <div className="text-xs text-gray-500">{location.country}</div>
                        )}
                        <div className="text-xs text-gray-400">Code: {location.locode}</div>
                      </div>
                    </div>
                  </div>
                ))}
                {locationSearch.searchTerm && !locationSearch.isSearching && locationSearch.results.length === 0 && (
                  <div className="p-4 text-center text-gray-500">
                    <MapPin className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                    <p className="text-sm">No locations found</p>
                    <p className="text-xs">Try searching for a different location</p>
                  </div>
                )}
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    )
  }

const FlightSearchFilter: React.FC<FlightSearchFilterProps> = ({
  onFilterChange,
  className = "",
  hidden = false,
  widthMode = 'full',
  initialOrigin = null,
  initialDestinations = []
}) => {
  const { toast } = useToast()
  const initialFilters: FlightFilters = {
    dateRange: undefined,
    origin: initialOrigin,
    destinations: initialDestinations,
    adults: 1,
    children: 0,
    infants: 0,
    maxStops: 'any',
    travelStyle: null
  }

  const [filters, setFilters] = useState<FlightFilters>(initialFilters)

  const [showPassengerPopover, setShowPassengerPopover] = useState(false)
  const [showDateRangePopover, setShowDateRangePopover] = useState(false)
  const [showFiltersPopover, setShowFiltersPopover] = useState(false)
  const [showWherePopover, setShowWherePopover] = useState(false)
  const [mobileSheetOpen, setMobileSheetOpen] = useState(false)

  // Early return if component should be hidden
  if (hidden) {
    return null
  }

  const updateFilters = (newFilters: Partial<FlightFilters>) => {
    const updatedFilters = { ...filters, ...newFilters }
    setFilters(updatedFilters)
    onFilterChange?.(updatedFilters)
  }

  const handlePassengerChange = (type: 'adults' | 'children' | 'infants', increment: boolean) => {
    const currentValue = filters[type]
    const newValue = increment ? currentValue + 1 : Math.max(0, currentValue - 1)

    // Ensure at least 1 adult
    if (type === 'adults' && newValue < 1) return

    updateFilters({ [type]: newValue })
  }

  const getTotalPassengers = () => filters.adults + filters.children + filters.infants

  const getStopsLabel = () => {
    switch (filters.maxStops) {
      case 'direct':
        return 'Direct'
      case '1':
        return '1 stop'
      case '2':
        return '2 stops'
      default:
        return 'Any'
    }
  }

  const getTravelStyleLabel = () => {
    if (filters.travelStyle === 'comfort') return 'Comfort'
    if (filters.travelStyle === 'budget') return 'Budget'
    return 'Not selected'
  }

  const buildSearchUrl = () => {
    if (!filters.origin) {
      toast({
        title: "Missing Information",
        description: "Please select an origin location to search for flights.",
        variant: "destructive"
      })
      return null
    }

    const baseUrl = 'https://chiri.pk'
    const params = new URLSearchParams()

    // Date parameters (optional)
    if (filters.dateRange?.from) {
      params.set('windowStart', format(filters.dateRange.from, 'yyyy-MM-dd'))
      if (filters.dateRange.to) {
        params.set('windowEnd', format(filters.dateRange.to, 'yyyy-MM-dd'))
      } else {
        // If no end date selected, set end date same as start date
        params.set('windowEnd', format(filters.dateRange.from, 'yyyy-MM-dd'))
      }
    }

    // Location parameters - using locode instead of code
    params.set('initialLocation', filters.origin.locode)
    if (filters.destinations.length > 0) {
      const destinationCodes = filters.destinations.map(dest => dest.locode).join('%2C')
      params.set('includeLocations', destinationCodes)
    }

    // Passenger parameters
    if (filters.adults > 0) params.set('n_adults', filters.adults.toString())
    if (filters.children > 0) params.set('n_children', filters.children.toString())
    if (filters.infants > 0) params.set('n_babies', filters.infants.toString())

    // Max stops parameter
    const stopsMap = { any: null, direct: 0, '1': 1, '2': 2 } as const
    const stopsValue = stopsMap[filters.maxStops]
    if (stopsValue !== null) {
      params.set('max_stop_overs', String(stopsValue))
    }

    // Traveling style parameter
    if (filters.travelStyle) {
      params.set('travellingStyle', filters.travelStyle)
    }

    return `${baseUrl}?${params.toString()}`
  }

  const handleSearch = () => {
    const url = buildSearchUrl()
    if (url) {
      window.open(url, '_blank')
    }
  }

  const handleReset = () => {
    setFilters(initialFilters)
    onFilterChange?.(initialFilters)
  }

  type MaxStops = 'any' | 'direct' | '1' | '2'
  type TravelStyle = 'comfort' | 'budget' | null
  const stopOptions: { key: MaxStops; label: string }[] = [
    { key: 'any', label: 'Any' },
    { key: 'direct', label: 'Direct' },
    { key: '1', label: '1 stop' },
    { key: '2', label: '2 stops' }
  ]
  const styleOptions: { key: TravelStyle; label: string }[] = [
    { key: 'comfort', label: 'Comfort' },
    { key: 'budget', label: 'Budget' },
    { key: null, label: 'Not selected' }
  ]

  return (
    <div className={cn(
      widthMode === 'full' ? "w-full" : "w-fit mx-auto",
      className
    )}>
      {/* Mobile condensed trigger */}
      <div className="md:hidden mb-3">
        <Sheet open={mobileSheetOpen} onOpenChange={setMobileSheetOpen}>
          <SheetTrigger asChild>
            <button className="w-full rounded-full bg-white px-4 py-3 shadow-md text-left flex gap-10 items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <div className="text-sm">
                  <div className="font-medium">Plan your trip</div>
                  <div className="text-gray-600">
                    {filters.origin ? filters.origin.name : 'Origin'} · {filters.destinations[0]?.name || 'Anywhere'}{filters.destinations.length > 1 ? ` +${filters.destinations.length - 1}` : ''}
                  </div>
                </div>
              </div>
              <Button className="rounded-full bg-primary text-white"><Search className="h-5 w-5" /></Button>
            </button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[88vh] p-4 overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="text-left">Search</SheetTitle>
            </SheetHeader>
            <div className="mt-4 space-y-6">
              {/* Where - inline */}
              <div className="space-y-3">
                <div className="text-sm font-medium">Departing from</div>
                <LocationSearchInput
                  placeholder="Select origin"
                  selectedLocation={filters.origin}
                  onLocationSelect={(location) => updateFilters({ origin: location })}
                  styleVariant="sticky"
                />
                <div className="text-sm font-medium">Where do you want to go?</div>
                <LocationSearchInput
                  placeholder="Anywhere"
                  selectedLocation={null}
                  selectedLocations={filters.destinations}
                  onLocationSelect={() => { }}
                  multiple
                  onMultipleSelect={(locations) => updateFilters({ destinations: locations })}
                  styleVariant="sticky"
                />
              </div>

              <Separator />

              {/* Dates - inline calendar, single month on mobile */}
              <div className="space-y-3">
                <div className="text-sm font-medium">Dates</div>
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={filters.dateRange?.from}
                  selected={filters.dateRange}
                  onSelect={(range) => updateFilters({ dateRange: range })}
                  numberOfMonths={1}
                  disabled={(date) => date < new Date()}
                />
              </div>

              <Separator />

              {/* Passengers - inline */}
              <div className="space-y-4">
                <div className="text-sm font-medium">Travelers</div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Adults</Label>
                    <p className="text-sm text-muted-foreground">12+ years</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-full" onClick={() => handlePassengerChange('adults', false)} disabled={filters.adults <= 1}>
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center font-medium">{filters.adults}</span>
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-full" onClick={() => handlePassengerChange('adults', true)}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Children</Label>
                    <p className="text-sm text-muted-foreground">Ages 2-11</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-full" onClick={() => handlePassengerChange('children', false)} disabled={filters.children <= 0}>
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center font-medium">{filters.children}</span>
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-full" onClick={() => handlePassengerChange('children', true)}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Infants</Label>
                    <p className="text-sm text-muted-foreground">Under 2</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-full" onClick={() => handlePassengerChange('infants', false)} disabled={filters.infants <= 0}>
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center font-medium">{filters.infants}</span>
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-full" onClick={() => handlePassengerChange('infants', true)}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Filters - inline */}
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium mb-2">Max stops</div>
                  <div className="flex items-center gap-4 flex-wrap">
                    {stopOptions.map(opt => {
                      const selected = filters.maxStops === opt.key
                      return (
                        <button key={opt.key} className="flex items-center gap-2 text-sm px-1 py-1" onClick={() => updateFilters({ maxStops: opt.key })}>
                          <span className={cn('inline-flex items-center justify-center w-4 h-4 rounded-full border', selected ? 'border-primary bg-primary' : 'border-gray-300')}>
                            {selected && <span className="w-1.5 h-1.5 bg-white rounded-full" />}
                          </span>
                          {opt.label}
                        </button>
                      )
                    })}
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium">Your style of traveling</div>
                    <button className="inline-flex items-center justify-center w-8 h-8 rounded-full border text-gray-700 hover:text-primary" onClick={() => updateFilters({ travelStyle: null })} aria-label="Clear style">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    {styleOptions.filter(o => o.key !== null).map(opt => {
                      const selected = filters.travelStyle === opt.key
                      return (
                        <button key={`${opt.key}`} className={cn('px-4 py-2 rounded-xl border', selected ? 'bg-primary/10 text-primary border-primary/20' : 'bg-white hover:bg-gray-50')} onClick={() => updateFilters({ travelStyle: opt.key })}>
                          {opt.label}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex items-center gap-3">
                <Button variant="outline" className="h-11 flex-1" onClick={() => { setFilters(initialFilters); onFilterChange?.(initialFilters) }}>Reset</Button>
                <Button className="h-11 flex-1 bg-primary text-white" onClick={() => { handleSearch(); setMobileSheetOpen(false) }}>
                  Search
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className={cn(
        widthMode === 'full' ? "max-w-[1200px] mx-auto" : "w-fit",
        "px-3"
      )}>
        {/* Pill container matching screenshot */}
        <div className={cn(
          "hidden md:flex flex-col md:flex-row items-stretch gap-0 bg-[#F7F7F7] border border-white/40 shadow-xl",
          "rounded-2xl md:rounded-[999px] overflow-hidden",
          widthMode === 'full' ? "mx-auto" : "w-fit"
        )}>
          {/* Where */}
          <Popover open={showWherePopover} onOpenChange={setShowWherePopover}>
            <PopoverTrigger asChild>
              <button
                type="button"
                className={cn(
                  "group flex items-center gap-3 pl-4 md:pl-5 pr-4 md:pr-6 py-3 md:py-4 rounded-t-2xl md:rounded-none md:rounded-l-[999px] transition-colors w-full",
                  "hover:bg-white data-[state=open]:bg-white text-gray-800 hover:text-primary data-[state=open]:text-primary"
                )}
              >
                <MapPin className="h-5 w-5 text-primary" />
                <div className="flex flex-col text-gray-800 group-hover:text-primary text-left">
                  <div className="text-sm text-black leading-4">Where to?</div>
                  <div className="text-sm leading-5 text-left">
                    {filters.origin ? filters.origin.name : 'Select origin'} - {filters.destinations.length > 0 ? `${filters.destinations[0].name.split(' ')[0]}${filters.destinations.length > 1 ? ` +${filters.destinations.length - 1}` : ''}` : 'Anywhere'}
                  </div>
                </div>
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-[700px]" align="start">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-medium mb-2">Departing from:</div>
                  <LocationSearchInput
                    placeholder="Select origin"
                    selectedLocation={filters.origin}
                    onLocationSelect={(location) => updateFilters({ origin: location })}
                    styleVariant="sticky"
                    showIcon={true}
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium">Where do you want to go?</div>
                    {filters.destinations.length > 0 && (
                      <button
                        className="text-sm text-gray-600 hover:text-primary inline-flex items-center gap-1"
                        onClick={() => updateFilters({ destinations: [] })}
                      >
                        <X className="w-4 h-4" />
                        Clear
                      </button>
                    )}
                  </div>
                  <LocationSearchInput
                    placeholder="Anywhere"
                    selectedLocation={null}
                    selectedLocations={filters.destinations}
                    onLocationSelect={() => { }}
                    multiple
                    onMultipleSelect={(locations) => updateFilters({ destinations: locations })}
                    styleVariant="sticky"
                    showIcon={true}
                  />

                  {/* Location Grid */}
                  <div className="mt-4">
                    <div className="text-sm font-medium mb-3 text-gray-700">Popular destinations</div>
                    <div className="grid grid-cols-3 gap-3">
                      {/* Row 1 */}
                      <div
                        className={cn(
                          "cursor-pointer rounded-lg")}
                        onClick={() => {
                          // Just highlight border for "Anywhere"
                        }}
                      >
                        <div className="flex flex-col items-center">
                          <Image
                            src="/filterCountries/anywhere.png"
                            alt="Anywhere"
                            width={100}
                            height={100}
                            className={cn("object-cover border rounded mb-2 w-full h-full",
                              filters.destinations.length === 0
                                ? "border-primary bg-primary/5"
                                : "border-gray-200 hover:border-primary/50"
                            )}
                          />
                          <span className="text-sm font-medium text-gray-700">Anywhere</span>
                        </div>
                      </div>

                      <div
                        className={cn(
                          "cursor-pointer")}
                        onClick={() => {
                          const europeLocation: LocationResult = {
                            id: 'europe',
                            locode: 'europe',
                            name: 'Europe',
                            country: 'Europe'
                          }
                          const isSelected = filters.destinations.some(dest => dest.locode === 'europe')
                          if (isSelected) {
                            updateFilters({
                              destinations: filters.destinations.filter(dest => dest.locode !== 'europe')
                            })
                          } else {
                            updateFilters({
                              destinations: [...filters.destinations, europeLocation]
                            })
                          }
                        }}
                      >
                        <div className="flex flex-col items-center">
                          <Image
                            src="/filterCountries/europe.png"
                            alt="Europe"
                            width={100}
                            height={100}
                            className={cn("object-cover border rounded mb-2 w-full h-full",
                              filters.destinations.some(dest => dest.locode === 'europe')
                                ? "border-primary bg-primary/5"
                                : "border-gray-200 hover:border-primary/50"
                            )}
                          />
                          <span className="text-sm font-medium text-gray-700">Europe</span>
                        </div>
                      </div>

                      {/* Row 2 */}
                      <div
                        className={cn(
                          "cursor-pointer")}
                        onClick={() => {
                          const australiaLocation: LocationResult = {
                            id: 'australia',
                            locode: 'AU',
                            name: 'Australia',
                            country: 'Australia'
                          }
                          const isSelected = filters.destinations.some(dest => dest.locode === 'AU')
                          if (isSelected) {
                            updateFilters({
                              destinations: filters.destinations.filter(dest => dest.locode !== 'AU')
                            })
                          } else {
                            updateFilters({
                              destinations: [...filters.destinations, australiaLocation]
                            })
                          }
                        }}
                      >
                        <div className="flex flex-col items-center">
                          <Image
                            src="/filterCountries/australia.png"
                            alt="Australia"
                            width={100}
                            height={100}
                            className={cn("object-cover border rounded mb-2 w-full h-full",
                              filters.destinations.some(dest => dest.locode === 'AU')
                                ? "border-primary bg-primary/5"
                                : "border-gray-200 hover:border-primary/50"
                            )}
                          />
                          <span className="text-sm font-medium text-gray-700">Australia</span>
                        </div>
                      </div>

                      <div
                        className={cn(
                          "cursor-pointer")}
                        onClick={() => {
                          const portugalLocation: LocationResult = {
                            id: 'portugal',
                            locode: 'PT',
                            name: 'Portugal',
                            country: 'Portugal'
                          }
                          const isSelected = filters.destinations.some(dest => dest.locode === 'PT')
                          if (isSelected) {
                            updateFilters({
                              destinations: filters.destinations.filter(dest => dest.locode !== 'PT')
                            })
                          } else {
                            updateFilters({
                              destinations: [...filters.destinations, portugalLocation]
                            })
                          }
                        }}
                      >
                        <div className="flex flex-col items-center">
                          <Image
                            src="/filterCountries/portugal.png"
                            alt="Portugal"
                            width={100}
                            height={100}
                            className={cn("object-cover border rounded mb-2 w-full h-full",
                              filters.destinations.some(dest => dest.locode === 'PT')
                                ? "border-primary bg-primary/5"
                                : "border-gray-200 hover:border-primary/50"
                            )}
                          />
                          <span className="text-sm font-medium text-gray-700">Portugal</span>
                        </div>
                      </div>

                      {/* Row 3 */}
                      <div
                        className={cn(
                          "cursor-pointer")}
                        onClick={() => {
                          const franceLocation: LocationResult = {
                            id: 'france',
                            locode: 'FR',
                            name: 'France',
                            country: 'France'
                          }
                          const isSelected = filters.destinations.some(dest => dest.locode === 'FR')
                          if (isSelected) {
                            updateFilters({
                              destinations: filters.destinations.filter(dest => dest.locode !== 'FR')
                            })
                          } else {
                            updateFilters({
                              destinations: [...filters.destinations, franceLocation]
                            })
                          }
                        }}
                      >
                        <div className="flex flex-col items-center">
                          <Image
                            src="/filterCountries/france.png"
                            alt="France"
                            width={100}
                            height={100}
                            className={cn("object-cover border rounded mb-2 w-full h-full",
                              filters.destinations.some(dest => dest.locode === 'FR')
                                ? "border-primary bg-primary/5"
                                : "border-gray-200 hover:border-primary/50"
                            )}
                          />
                          <span className="text-sm font-medium text-gray-700">France</span>
                        </div>
                      </div>

                      <div
                        className={cn(
                          "cursor-pointer")}
                        onClick={() => {
                          const thailandLocation: LocationResult = {
                            id: 'thailand',
                            locode: 'TH',
                            name: 'Thailand',
                            country: 'Thailand'
                          }
                          const isSelected = filters.destinations.some(dest => dest.locode === 'TH')
                          if (isSelected) {
                            updateFilters({
                              destinations: filters.destinations.filter(dest => dest.locode !== 'TH')
                            })
                          } else {
                            updateFilters({
                              destinations: [...filters.destinations, thailandLocation]
                            })
                          }
                        }}
                      >
                        <div className="flex flex-col items-center">
                          <Image
                            src="/filterCountries/thailand.png"
                            alt="Thailand"
                            width={100}
                            height={100}
                            className={cn("object-cover border rounded mb-2 w-full h-full",
                              filters.destinations.some(dest => dest.locode === 'TH')
                                ? "border-primary bg-primary/5"
                                : "border-gray-200 hover:border-primary/50"
                            )}
                          />
                          <span className="text-sm font-medium text-gray-700">Thailand</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          {/* Divider */}
          <div className="hidden md:block w-px my-0 bg-gray-200/80" />
          <div className="block md:hidden h-px w-full bg-gray-200/80" />

          {/* When */}
          <div className="px-0 ">
            <Popover open={showDateRangePopover} onOpenChange={setShowDateRangePopover}>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className={cn(
                    "group flex items-center gap-3 px-4 md:px-6 py-3 md:py-4 md:pr-20 rounded-none transition-colors h-full w-full",
                    "hover:bg-white data-[state=open]:bg-white text-gray-800 hover:text-primary data-[state=open]:text-primary"
                  )}
                >
                  <CalendarIcon className="h-5 w-5 text-primary" />
                  <div className="flex flex-col">
                    <span className="text-sm text-black leading-4 text-left">When?</span>
                    <span className="text-sm leading-5">
                      {filters.dateRange?.from ? (
                        filters.dateRange.to ? (
                          <>
                            {format(filters.dateRange.from, "MMM dd")} - {format(filters.dateRange.to, "MMM dd")}
                          </>
                        ) : (
                          format(filters.dateRange.from, "MMM dd")
                        )
                      ) : (
                        "Anytime"
                      )}
                    </span>
                  </div>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={filters.dateRange?.from}
                  selected={filters.dateRange}
                  onSelect={(range) => updateFilters({ dateRange: range })}
                  numberOfMonths={2}
                  disabled={(date) => date < new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px my-0 bg-gray-200/80" />
          <div className="block md:hidden h-px w-full bg-gray-200/80" />

          {/* Travelers */}
          <div className="px-0">
            <Popover open={showPassengerPopover} onOpenChange={setShowPassengerPopover}>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className={cn(
                    "group flex items-center gap-3 px-4 md:px-6 py-3 md:py-4 md:pr-20 rounded-none transition-colors h-full w-full",
                    "hover:bg-white data-[state=open]:bg-white text-gray-800 hover:text-primary data-[state=open]:text-primary"
                  )}
                >
                  <Users className="h-5 w-5 text-primary" />
                  <div className="flex flex-col">
                    <span className="text-sm text-black leading-4">Travelers</span>
                    <span className="text-sm leading-5">
                      {getTotalPassengers()} {getTotalPassengers() === 1 ? 'traveler' : 'travelers'}
                    </span>
                  </div>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-80" align="start">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="font-medium">Adults</Label>
                      <p className="text-sm text-muted-foreground">12+ years</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full"
                        onClick={() => handlePassengerChange('adults', false)}
                        disabled={filters.adults <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-medium">{filters.adults}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full"
                        onClick={() => handlePassengerChange('adults', true)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="font-medium">Children</Label>
                      <p className="text-sm text-muted-foreground">Ages 2-11</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full"
                        onClick={() => handlePassengerChange('children', false)}
                        disabled={filters.children <= 0}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-medium">{filters.children}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full"
                        onClick={() => handlePassengerChange('children', true)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="font-medium">Infants</Label>
                      <p className="text-sm text-muted-foreground">Under 2</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full"
                        onClick={() => handlePassengerChange('infants', false)}
                        disabled={filters.infants <= 0}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-medium">{filters.infants}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full"
                        onClick={() => handlePassengerChange('infants', true)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px my-0 bg-gray-200/80" />
          <div className="block md:hidden h-px w-full bg-gray-200/80" />

          {/* Filters (Max stops + Traveling Style) */}
          <div className="px-0">
            <Popover open={showFiltersPopover} onOpenChange={setShowFiltersPopover}>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className={cn(
                    "group flex items-center gap-3 px-4 md:px-6 py-3 md:py-4 rounded-none transition-colors w-full h-full",
                    "hover:bg-white data-[state=open]:bg-white text-gray-800 hover:text-primary data-[state=open]:text-primary"
                  )}
                >
                  <SlidersHorizontal className="h-5 w-5 text-primary" />
                  <div className="flex flex-col">
                    <span className="text-sm text-black text-left md:leading-none">Filters</span>
                    <span className="text-xs text-muted-foreground md:leading-none md:whitespace-nowrap">{getStopsLabel()} • {filters.travelStyle ? getTravelStyleLabel() : 'No style'}</span>
                  </div>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-[320px]" align="start">
                <div className="space-y-4">
                  {/* Max stops */}
                  <div>
                    <div className="text-sm font-medium mb-2">Max stops</div>
                    <div className="flex items-center gap-4 flex-wrap">
                      {stopOptions.map(opt => {
                        const selected = filters.maxStops === opt.key
                        return (
                          <button
                            key={opt.key}
                            className="flex items-center gap-2 text-sm px-1 py-1"
                            onClick={() => updateFilters({ maxStops: opt.key })}
                          >
                            <span className={cn(
                              'inline-flex items-center justify-center w-4 h-4 rounded-full border',
                              selected ? 'border-primary bg-primary' : 'border-gray-300'
                            )}>
                              {selected && <span className="w-1.5 h-1.5 bg-white rounded-full" />}
                            </span>
                            {opt.label}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Travel style */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm font-medium">Your style of traveling</div>
                      <button
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full border text-gray-700 hover:text-primary"
                        onClick={() => updateFilters({ travelStyle: null })}
                        aria-label="Clear style"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center gap-3">
                      {styleOptions.filter(o => o.key !== null).map(opt => {
                        const selected = filters.travelStyle === opt.key
                        return (
                          <button
                            key={`${opt.key}`}
                            className={cn(
                              'px-4 py-2 rounded-xl border',
                              selected ? 'bg-primary/10 text-primary border-primary/20' : 'bg-white hover:bg-gray-50'
                            )}
                            onClick={() => updateFilters({ travelStyle: opt.key })}
                          >
                            {opt.label}
                          </button>
                        )
                      })}
                    </div>
                    <div className="pt-2 flex items-center justify-end">
                      <Button variant="ghost" className="h-8 px-3" onClick={handleReset}>Reset all</Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Reset and Search */}
          <div className="flex items-center pr-3 pl-3 md:pr-2 md:pl-4 gap-2 w-full md:w-auto py-3 md:py-0">
            <Button
              className="rounded-full bg-primary text-white px-6 h-12 shadow-md w-full md:w-auto"
              onClick={handleSearch}
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

export default FlightSearchFilter
export type { FlightFilters, LocationResult as Location } 