// Base interfaces for all templates
interface BaseSection {
  type: string;
  id: string;
}

interface BaseTemplateFormProps {
  initialData?: {
    sections?: Section[]
    title?: string
    id?: string
    metadata?: {
      description?: string;
      keywords?: string[];
      author?: string;
      ogImage?: string;
      ogTitle?: string;
      ogDescription?: string;
      canonicalUrl?: string;
      publishedDate?: Date;
      modifiedDate?: Date;
    }
    coverImage?: string
    draftId?: string
    [key: string]: unknown
  }
  isEditing?: boolean
}

export interface FAQSection extends BaseSection {
  type: 'FAQSection';
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export interface QuickFactsSection extends BaseSection {
  type: 'QuickFacts';
  title: string;
  subtitle: string;
  facts: Array<{
    label: string;
    value: string;
    description: string;
  }>;
}

export interface FlightListSection extends BaseSection {
  type: 'FlightList';
  title: string;
  subtitle: string;
  flights?: Array<{
    from: string;
    to: string;
    date: string;
    duration: string;
    price: string;
  }>;
}

export interface FeatureSection extends BaseSection {
  type: 'FeatureSection';
  features: Array<{
    title: string;
    description: string;
    image: string;
  }>;
}

export interface TextSection extends BaseSection {
  type: 'text';
  content: string;
}

export interface TableSection extends BaseSection {
  type: 'TableSection';
  title: string;
  headers: string[];
  data: string[][];
}

export interface InfoCardsSection extends BaseSection {
  type: 'InfoCardsSection';
  title: string;
  cards: Array<{
    id: string;
    title: string;
    data: string;
    description: string;
  }>;
}

export interface InsightTabsSection extends BaseSection {
  type: 'InsightTabsSection';
  title: string;
  tabs: Array<{
    id: string;
    title: string;
    content: string;
  }>;
}

export interface PriceInfoSection extends BaseSection {
  type: 'PriceInfoSection';
  title: string;
  prices: Array<{
    id: string;
    month: string;
    price: string;
    change: 'up' | 'down' | 'stable';
    percentage: string;
  }>;
}

export interface ReturnFlightSection extends BaseSection {
  type: 'ReturnFlightSection';
  title: string;
  flights?: Array<{
    id: string;
    departureDate: string;
    returnDate: string;
    price: string;
    airline: string;
  }>;
}

export interface ChartSection extends BaseSection {
  type: 'ChartSection';
  title: string;
  image: string;
  content: string;
}

export interface CheapFlightSection extends BaseSection {
  type: 'CheapFlightSection';
  title: string;
  flights?: Array<{
    id: string;
    from: string;
    to: string;
    price: string;
    date: string;
    airline: string;
  }>;
}

export interface PackageSearchSection extends BaseSection {
  type: 'PackageSearchSection';
  title: string;
  subtitle: string;
  locode: string;
  fromLocation?: string;
  toLocation?: string;
  apiUrl?: string; // Full API URL for fetching packages
  apiParams?: {
    includeLocations: string; // toLocode
    initialLocation: string;  // fromLocode
    n_adults: number;
    n_children: number;
    n_babies: number;
  };
  // Runtime packages (not stored in DB, fetched from API)
  packages?: Array<{
    id: string;
    title: string;
    description: string;
    price: string;
    duration: string;
    image: string;
    link: string;
    startDate?: string;
    endDate?: string;
  }>;
}

export interface TravelStatsSection extends BaseSection {
  type: 'TravelStatsSection';
  title: string;
  locode: string;
  stats?: {
    avgPrice: number;
    avgTripLength: number;
    avgPassengers: number;
    totalPackages: number;
    popularDestination: string;
    budgetPercentage: number;
    avgTransportCost: number;
    avgHotelCost: number;
    currency: string;
  };
}

export interface TravelStats {
  avgPrice: number
  avgTripLength: number
  avgPassengers: number
  totalPackages: number
  popularDestination: string
  budgetPercentage: number
  avgTransportCost: number
  avgHotelCost: number
  currency: string
}

export interface PriceEstimate {
  minPrice: number
  maxPrice: number
  currentPrice: number
  currency: string
  isLow: boolean
  trend: 'up' | 'down' | 'stable'
  priceRange: 'low' | 'medium' | 'high'
}

export interface AirlineInfo {
  id: string
  name: string
  logo?: string
  rating: number
  reviews: number
  priceFrom: number
  currency: string
  freeCancellation: boolean
  features: string[]
  flightDuration?: string
  popularity: 'high' | 'medium' | 'low'
}

export interface RoundTripEstimateSection {
  type: 'RoundTripEstimate'
  id: string
  title: string
  subtitle: string
  fromLocation?: string
  toLocation?: string
  priceEstimate?: PriceEstimate
  apiParams?: {
    fromLocation: string
    fromLocationLocode: string
    toLocation: string
    toLocationLocode: string
  }
}

export interface BestAirlinesSection {
  type: 'BestAirlines'
  id: string
  title: string
  subtitle: string
  fromLocation?: string
  toLocation?: string
  airlines?: AirlineInfo[]
}

export interface CheapestAirlineSection {
  type: 'CheapestAirline'
  id: string
  title: string
  subtitle: string
  fromLocation?: string
  toLocation?: string
  cheapestAirline?: string
  priceData?: PriceData[]
  apiParams?: ApiParams
}

export interface AirlineFlightsSection {
  type: 'AirlineFlights'
  id: string
  title: string
  subtitle: string
  fromLocation?: string
  toLocation?: string
  airlineName?: string
  selectedCarriers?: Array<{
    name: string
    logo: string
    code: string
  }>
  flights?: FlightInfo[]
  apiParams?: ApiParams
}

export interface StopsAnalysisSection {
  type: 'StopsAnalysisSection'
  id: string
  title: string
  subtitle: string
  fromLocation?: string
  toLocation?: string
  stopsData?: {
    direct: { count: number; averagePrice: number; minPrice: number; maxPrice: number }
    oneStop: { count: number; averagePrice: number; minPrice: number; maxPrice: number }
    twoStops: { count: number; averagePrice: number; minPrice: number; maxPrice: number }
    currency: string
  }
  apiParams?: ApiParams
}

export interface PriceData {
  airline: string
  price: number
  currency: string
  percentage: number
  flightCount?: number
}

export interface FlightLeg {
  departureTime: string
  arrivalTime: string
  departureDate: string
  arrivalDate: string
  departureAirport: string
  arrivalAirport: string
  duration: string
  stops: number
  carrier?: string
  layover?: string
  durationHours?: number
}

// New interfaces for one-way trip details response
export interface TripDetailsCarrier {
  name: string
  logo: string
}

export interface TripDetailsFlightLeg {
  origin: string
  destination: string
  departure_time: string
  arrival_time: string
  duration_hours?: number
  carrier: string
  layover?: string
  security_check?: boolean
}

export interface TripDetailsFlight {
  type: 'outbound' | 'return'
  legs: TripDetailsFlightLeg[]
}

export interface TripDetailsResponse {
  trip: {
    id: number
    title: string
    origin: string
    destination: string
    currency: string
    start_date: string
    end_date: string
    trip_length_days: number
    price: {
      transport: number
      hotels: number
      coins: number
    }
    seats: {
      available: number
      total: number
    }
    passengers: {
      adults: number
      children: number
      babies: number
      total: number
    }
    carriers: TripDetailsCarrier[]
    media?: Array<{
      type: string
      src: string
      placeholder?: string
      label?: string
    }>
  }
  flights: TripDetailsFlight[]
}

export interface FlightInfo {
  id: string
  flightNumber?: string
  price: number
  currency: string
  airlineName?: string
  airlineLogo?: string
  availableSeats?: number
  baggageIncluded: boolean
  isRoundTrip: boolean
  outboundLeg: FlightLeg
  returnLeg?: FlightLeg
  // Legacy fields for backward compatibility
  departureTime: string
  arrivalTime: string
  departureDate: string
  arrivalDate: string
  duration: string
  stops: number
  aircraft?: string
  departureAirport: string
  arrivalAirport: string
}

export interface LocationResult {
  id: string
  name: string
  locode: string
  country?: string
}

// API Parameters for dynamic components
export interface ApiParams {
  fromLocation?: string
  toLocation?: string
  fromLocationLocode?: string
  toLocationLocode?: string
  airlineName?: string
  // Enhanced API parameters for carrier-first flow
  flowType?: 'carrier-first' | 'direct-search' // Type of API flow to use
  carrierEndpoint?: string // URL for carrier API
  oneWayEndpoint?: string // URL for one-way trips API
  tripDetailsEndpoint?: string // URL for trip details API
  queryParams?: Record<string, string> // Additional query parameters
  // Array of selected carriers with their details
  selectedCarriers?: Array<{
    name: string
    code: string
    logo?: string
  }>
}

export interface LocationApiItem {
  id?: string | number
  value?: string
  name?: string
  title?: string
  location?: string
  locode?: string
  code?: string
  locationCode?: string
  country?: string
  countryName?: string
  [key: string]: unknown
}

export interface TripSuggestion {
  id?: string
  price?: {
    price_transports?: number
    price_hotels?: number
  }
  trip_currency_code?: string
  [key: string]: unknown
}

export interface TripDetails {
  id?: string
  itinerary?: ItineraryItem[]
  price?: {
    price_transports?: number
    price_hotels?: number
  }
  trip_currency_code?: string
  [key: string]: unknown
}

export interface ItineraryItem {
  type: string
  content?: unknown
  position?: number
  attractions?: unknown
  [key: string]: unknown
}

export interface SegmentData {
  segment_type?: string
  carriers?: CarrierData[]
  start_date_time?: string
  end_date_time?: string
  start_location_name?: string
  end_location_name?: string
  start_location_code?: string
  end_location_code?: string
  flight_number?: string
  aircraft_type?: string
  [key: string]: unknown
}

export interface CarrierData {
  carrier_name?: string
  carrier_iata_code?: string
  carrier_logo_url?: string
  [key: string]: unknown
}

export type Section =
  | FeatureSection
  | FlightListSection
  | TextSection
  | QuickFactsSection
  | FAQSection
  | TableSection
  | InfoCardsSection
  | InsightTabsSection
  | PriceInfoSection
  | ReturnFlightSection
  | ChartSection
  | CheapFlightSection
  | PackageSearchSection
  | TravelStatsSection
  | RoundTripEstimateSection
  | BestAirlinesSection
  | CheapestAirlineSection
  | AirlineFlightsSection
  | StopsAnalysisSection;

export interface BlogTemplate {
  title: string;
  templateType: 'airline' | 'cities' | 'cityToCity' | 'countries';
  sections: Section[];
  authorId: string;
  theme?: {
    primaryColor?: string;
    secondaryColor?: string;
    fontFamily?: string;
  };
  userId?: string;
  published: boolean;
  slug: string;
  metadata: {
    description: string;
    keywords: string[];
    author: string;
    ogImage?: string;
    ogTitle?: string;
    ogDescription?: string;
    canonicalUrl?: string;
    publishedDate?: Date;
    modifiedDate?: Date;
  };
  coverImage: string;
  customURL: string;
}

export interface CitiesTemplateFormProps extends BaseTemplateFormProps {
  initialData?: BaseTemplateFormProps['initialData'] & {
    cityName?: string
  }
}

export interface AirlinesTemplateFormProps extends BaseTemplateFormProps {
  initialData?: BaseTemplateFormProps['initialData'] & {
    airlineName?: string
  }
}

export interface CityToCityTemplateFormProps extends BaseTemplateFormProps {
  initialData?: BaseTemplateFormProps['initialData'] & {
    fromCity?: string
    toCity?: string
  }
}

export interface CountriesTemplateFormProps extends BaseTemplateFormProps {
  initialData?: BaseTemplateFormProps['initialData'] & {
    countryName?: string
  }
}
