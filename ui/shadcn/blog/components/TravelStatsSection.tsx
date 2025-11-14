'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { TravelStatsSection as TravelStatsSectionType } from '@/ui/shadcn/blog/types';
import { Input } from '@/ui/shadcn/ui/input';
import { Label } from '@/ui/shadcn/ui/label';
import { Button } from '@/ui/shadcn/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/shadcn/ui/card';
import { Loader2, BarChart3, Users, MapPin, DollarSign, Calendar, Plane, X, AlertCircle } from 'lucide-react';
import { fetchTripSuggestionsWithCache } from '@/src/services/tripSuggestionsService';

interface ApiResponse {
    id: number;
    price: {
        price_transports: number;
        price_hotels: number;
    };
    trip_length: number;
    locations: string[];
    passengers: {
        n_adults: number;
        n_children: number;
        n_babies: number;
        total_passengers: number;
    };
    avg_price: number;
    price_range: string;
    trip_currency_code: string;
    [key: string]: unknown;
}

interface LocationResult {
    id: string;
    name: string;
    locode: string;
    country?: string;
}

interface LocationApiItem {
    id?: string | number;
    value?: string;
    name?: string;
    title?: string;
    location?: string;
    locode?: string;
    code?: string;
    locationCode?: string;
    country?: string;
    countryName?: string;
    [key: string]: unknown;
}

interface LocationApiResponse {
    locations?: LocationApiItem[];
    results?: LocationApiItem[];
    [key: string]: unknown;
}

interface TravelStats {
    avgPrice: number;
    avgTripLength: number;
    avgPassengers: number;
    totalPackages: number;
    popularDestination: string;
    budgetPercentage: number;
    avgTransportCost: number;
    avgHotelCost: number;
    currency: string;
}

interface TravelStatsSectionProps {
    section: TravelStatsSectionType;
    index: number;
    onUpdate: (updates: Partial<TravelStatsSectionType>) => void;
    readOnly?: boolean;
}

const TravelStatsSection: React.FC<TravelStatsSectionProps> = ({
    section,
    onUpdate,
    readOnly = false
}) => {
    const [title, setTitle] = useState(section.title || 'Travel Statistics');
    const [locationSearchTerm, setLocationSearchTerm] = useState('');
    const [selectedLocation, setSelectedLocation] = useState<LocationResult | null>(null);
    const [locationResults, setLocationResults] = useState<LocationResult[]>([]);
    const [isSearchingLocations, setIsSearchingLocations] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [stats, setStats] = useState<TravelStats | null>(section.stats || null);
    const [showLocationResults, setShowLocationResults] = useState(false);

    const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
    const abortControllerRef = useRef<AbortController | null>(null);

    // Debounced search function
    const debouncedSearch = useCallback((searchTerm: string) => {
        if (debounceTimerRef.current) {
            clearTimeout(debounceTimerRef.current);
        }

        debounceTimerRef.current = setTimeout(() => {
            if (searchTerm.trim()) {
                searchLocations(searchTerm);
            } else {
                setLocationResults([]);
                setShowLocationResults(false);
            }
        }, 500); // 500ms debounce delay
    }, []);

    // Cleanup function
    useEffect(() => {
        return () => {
            if (debounceTimerRef.current) {
                clearTimeout(debounceTimerRef.current);
            }
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
        };
    }, []);

    const transformLocationData = (item: LocationApiItem, index: number): LocationResult => ({
        id: item.id?.toString() || `location-${index}`,
        name: item.value || item.name || item.title || item.location || 'Unknown Location',
        locode: item.locode || item.code || item.locationCode || '',
        country: item.country || item.countryName || ''
    });

    const searchLocations = async (searchTerm: string) => {
        if (!searchTerm.trim()) {
            setLocationResults([]);
            setShowLocationResults(false);
            return;
        }

        // Cancel previous request if it exists
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }

        abortControllerRef.current = new AbortController();
        setIsSearchingLocations(true);
        setError(null);

        try {
            const response = await fetch(
                `https://0t25sv78k2.execute-api.eu-central-1.amazonaws.com/prod?initial_location=INICD&query=${encodeURIComponent(searchTerm)}&page=0&pageSize=10&all=true`,
                {
                    headers: {
                        'accept': '*/*',
                        'accept-language': 'en',
                        'content-type': 'application/json',
                        'x-api-key': 'FFzpw3LeUc1Lvi6b0xPov4YFefmUQLsJa6WA1AcE',
                        'user-id': 'c3cef6a8-0d53-4d87-9d6d-7e1102c8003b',
                        'origin': process.env.NEXT_PUBLIC_APP_URL || 'https://chiri.pk',
                        'referer': process.env.NEXT_PUBLIC_APP_URL || 'https://chiri.pk/'
                    },
                    signal: abortControllerRef.current.signal
                }
            );

            if (!response.ok) {
                throw new Error('Failed to search locations');
            }

            const data: LocationApiItem[] | LocationApiResponse = await response.json();

            let locations: LocationResult[] = [];

            if (Array.isArray(data)) {
                locations = data.map((item: LocationApiItem, index: number) => transformLocationData(item, index));
            } else if (data.locations && Array.isArray(data.locations)) {
                locations = data.locations.map((item: LocationApiItem, index: number) => transformLocationData(item, index));
            } else if (data.results && Array.isArray(data.results)) {
                locations = data.results.map((item: LocationApiItem, index: number) => transformLocationData(item, index));
            }

            // Filter out locations without locode
            locations = locations.filter(location => location.locode);

            setLocationResults(locations);
            setShowLocationResults(locations.length > 0);
        } catch (err) {
            if (err instanceof Error && err.name === 'AbortError') {
                // Request was cancelled, don't update state
                return;
            }
            console.error('Error searching locations:', err);
            setError('Failed to search locations. Please try again.');
            setLocationResults([]);
            setShowLocationResults(false);
        } finally {
            setIsSearchingLocations(false);
        }
    };

    const handleLocationInputChange = (value: string) => {
        setLocationSearchTerm(value);
        if (!value.trim()) {
            setSelectedLocation(null);
            onUpdate({ locode: '' });
        }
        debouncedSearch(value);
    };

    const handleLocationSelect = (location: LocationResult) => {
        setSelectedLocation(location);
        setLocationSearchTerm(location.name);
        setShowLocationResults(false);
        onUpdate({ locode: location.locode });
        setError(null);
    };

    const clearSelectedLocation = () => {
        setSelectedLocation(null);
        setLocationSearchTerm('');
        setShowLocationResults(false);
        onUpdate({ locode: '' });
        setError(null);
        setStats(null);
        onUpdate({ stats: undefined });
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Element;
            if (showLocationResults && !target.closest('.location-search-container')) {
                setShowLocationResults(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [showLocationResults]);

    const calculateStats = (data: ApiResponse[]): TravelStats => {
        if (!data.length) {
            return {
                avgPrice: 0,
                avgTripLength: 0,
                avgPassengers: 0,
                totalPackages: 0,
                popularDestination: 'N/A',
                budgetPercentage: 0,
                avgTransportCost: 0,
                avgHotelCost: 0,
                currency: 'EUR'
            };
        }

        // Calculate averages
        const totalPrice = data.reduce((sum, pkg) => sum + ((pkg.price?.price_transports || 0) + (pkg.price?.price_hotels || 0)), 0);
        const avgPrice = totalPrice / data.length;

        const avgTripLength = data.reduce((sum, pkg) => sum + (pkg.trip_length || 0), 0) / data.length;
        const avgPassengers = data.reduce((sum, pkg) => sum + (pkg.passengers?.total_passengers || 1), 0) / data.length;

        // Find most popular destination
        const destinationCounts: Record<string, number> = {};
        data.forEach(pkg => {
            pkg.locations?.forEach(location => {
                destinationCounts[location] = (destinationCounts[location] || 0) + 1;
            });
        });
        const popularDestination = Object.keys(destinationCounts).reduce((a, b) =>
            destinationCounts[a] > destinationCounts[b] ? a : b, 'N/A'
        );

        // Calculate budget percentage
        const budgetPackages = data.filter(pkg => pkg.price_range === 'budget').length;
        const budgetPercentage = (budgetPackages / data.length) * 100;

        // Calculate average transport and hotel costs
        const avgTransportCost = data.reduce((sum, pkg) => sum + (pkg.price?.price_transports || 0), 0) / data.length;
        const avgHotelCost = data.reduce((sum, pkg) => sum + (pkg.price?.price_hotels || 0), 0) / data.length;

        const currency = data[0]?.trip_currency_code || 'EUR';

        return {
            avgPrice,
            avgTripLength,
            avgPassengers,
            totalPackages: data.length,
            popularDestination,
            budgetPercentage,
            avgTransportCost,
            avgHotelCost,
            currency
        };
    };

    const fetchAndAnalyzeData = async () => {
        const locode = selectedLocation?.locode;
        if (!locode) {
            setError('Please select a location first');
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            // Note: This endpoint uses only includeLocations parameter
            // We'll use the cache service with empty fromLocode for general destination stats
            const data: ApiResponse[] = await fetchTripSuggestionsWithCache({
                fromLocode: '', // Empty for general destination stats
                toLocode: locode,
                adults: 1,
                children: 0,
                babies: 0
            });

            const calculatedStats = calculateStats(data);
            setStats(calculatedStats);
            onUpdate({ stats: calculatedStats });
        } catch (err) {
            console.error('Error fetching travel data:', err);
            setError('Failed to fetch travel statistics. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    if (readOnly) {
        return (
            <div className="space-y-6">
                <div className="text-center">
                    <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
                        <BarChart3 className="w-6 h-6" />
                        {title}
                    </h2>
                </div>

                {stats ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Average Price</CardTitle>
                                <DollarSign className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    {stats.currency} {Math.round(stats.avgPrice)}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Based on {stats.totalPackages} packages
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Average Trip Length</CardTitle>
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    {Math.round(stats.avgTripLength)} days
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Typical duration
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Average Passengers</CardTitle>
                                <Users className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    {Math.round(stats.avgPassengers * 10) / 10}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Per booking
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Popular Destination</CardTitle>
                                <MapPin className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    {stats.popularDestination}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Most visited
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Budget Options</CardTitle>
                                <Plane className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    {Math.round(stats.budgetPercentage)}%
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Budget-friendly packages
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Transport vs Hotels</CardTitle>
                                <BarChart3 className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-sm">
                                    <div className="flex justify-between">
                                        <span>Transport:</span>
                                        <span className="font-bold">{stats.currency} {Math.round(stats.avgTransportCost)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Hotels:</span>
                                        <span className="font-bold">{stats.currency} {Math.round(stats.avgHotelCost)}</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ) : (
                    <div className="text-center py-8">
                        <div className="flex flex-col items-center gap-4">
                            <BarChart3 className="w-12 h-12 text-gray-400" />
                            <div className="text-gray-500">
                                <p className="text-lg font-medium">No statistics available</p>
                                <p className="text-sm">Travel statistics will appear here when data is analyzed.</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="space-y-6 p-4 border rounded-lg bg-white">
            <div className="text-sm text-gray-500 mb-4">
                Travel Statistics Section - Configure travel analytics
            </div>

            <div>
                <Label htmlFor="stats-title">Section Title</Label>
                <Input
                    id="stats-title"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                        onUpdate({ title: e.target.value });
                    }}
                    placeholder="Enter section title"
                    className="mb-4"
                />
            </div>

            <div className="relative location-search-container">
                <Label htmlFor="location-search">Search Location</Label>
                <div className="relative">
                    <Input
                        id="location-search"
                        value={locationSearchTerm}
                        onChange={(e) => handleLocationInputChange(e.target.value)}
                        placeholder="Start typing to search locations (e.g., Paris, France)"
                        className="mb-4 pr-8"
                    />
                    {(isSearchingLocations || selectedLocation) && (
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 mb-4">
                            {isSearchingLocations ? (
                                <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
                            ) : selectedLocation ? (
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    onClick={clearSelectedLocation}
                                    className="p-0 h-4 w-4 hover:bg-gray-100"
                                >
                                    <X className="w-3 h-3" />
                                </Button>
                            ) : null}
                        </div>
                    )}
                </div>

                {showLocationResults && locationResults.length > 0 && (
                    <div className="absolute z-10 w-full bg-white border rounded-md shadow-lg max-h-60 overflow-y-auto">
                        {locationResults.map((location) => (
                            <div
                                key={location.id}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b last:border-b-0"
                                onClick={() => handleLocationSelect(location)}
                            >
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-gray-400" />
                                    <div>
                                        <div className="font-medium">{location.name}</div>
                                        {location.country && (
                                            <div className="text-sm text-gray-500">{location.country}</div>
                                        )}
                                        <div className="text-xs text-gray-400">Code: {location.locode}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {selectedLocation && (
                    <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-md">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-green-600" />
                                <span className="text-sm font-medium text-green-800">
                                    Selected: {selectedLocation.name} ({selectedLocation.locode})
                                </span>
                            </div>
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={clearSelectedLocation}
                                className="text-green-600 hover:text-green-800 p-1"
                            >
                                <X className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                )}

                <Button
                    onClick={fetchAndAnalyzeData}
                    disabled={isLoading || !selectedLocation}
                    className="w-full"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin mr-2" />
                            Analyzing Data...
                        </>
                    ) : (
                        <>
                            <BarChart3 className="w-4 h-4 mr-2" />
                            Analyze Travel Data
                        </>
                    )}
                </Button>

                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>

            {stats && !stats.totalPackages && (
                <div className="text-center py-8">
                    <div className="flex flex-col items-center gap-4">
                        <AlertCircle className="w-12 h-12 text-orange-400" />
                        <div className="text-gray-500">
                            <p className="text-lg font-medium">No travel data found</p>
                            <p className="text-sm">We couldn&apos;t find any travel data for the selected location. Try searching for a different destination.</p>
                        </div>
                    </div>
                </div>
            )}

            {stats && stats.totalPackages > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Average Price</CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {stats.currency} {Math.round(stats.avgPrice)}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Based on {stats.totalPackages} packages
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Average Trip Length</CardTitle>
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {Math.round(stats.avgTripLength)} days
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Typical duration
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Popular Destination</CardTitle>
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {stats.popularDestination}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Most visited
                            </p>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    );
};

export default TravelStatsSection; 