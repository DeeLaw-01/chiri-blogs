/**
 * API Configuration for blog components
 * 
 * Site B (chiri-blogs) fetches data from Site A (chiri-booking-app) APIs.
 * 
 * Environment Variables:
 * - NEXT_PUBLIC_SITE_A_URL: Base URL for Site A (defaults to https://chiri.pk)
 */

// Site A base URL - where the booking app APIs are hosted
const SITE_A_BASE_URL = process.env.NEXT_PUBLIC_SITE_A_URL || 'https://chiri.pk'

// API Configuration Constants
export const API_CONFIG = {
    // Site A APIs - Blog data, carriers, flights
    SITE_A: {
        BASE_URL: SITE_A_BASE_URL,
        BLOG_TEMPLATES: `${SITE_A_BASE_URL}/api/blog-templates`,
        BLOG_BY_SLUG: `${SITE_A_BASE_URL}/api/blog-templates/slug`,
        BLOG_BY_ID: `${SITE_A_BASE_URL}/api/blogs`,
        CARRIERS: `${SITE_A_BASE_URL}/api/carriers`,
        ONE_WAY_FLIGHTS: `${SITE_A_BASE_URL}/api/one-way-flights`,
    },
    
    TRIP_SUGGESTIONS: {
        DEFAULT_TRIPS_COUNT: 10,
        BASE_URL: 'https://88ziu4wklh.execute-api.eu-central-1.amazonaws.com/prod/trip_suggestions',
        CACHE_TTL: 60 * 60 * 1000, // 1 hour cache for trip suggestions
        HEADERS: {
            accept: '*/*',
            'accept-language': 'en',
            'content-type': 'application/json',
            'x-api-key': 'FFzpw3LeUc1Lvi6b0xPov4YFefmUQLsJa6WA1AcE',
            'user-id': '09718461-e5cd-42fc-8e4f-3f3145df17e7',
            origin: 'https://chiri.pk',
            referer: 'https://chiri.pk/'
        }
    },
    TRIP_DETAILS: {
        BASE_URL: 'https://rduu3i7qp8.execute-api.eu-central-1.amazonaws.com/prod/v1/trips/trip',
        RATE_LIMIT: {
            CONCURRENT_REQUESTS: 3, // Max concurrent requests
            DELAY_BETWEEN_BATCHES: 1000, // 1 second delay between batches
            RETRY_ATTEMPTS: 3,
            RETRY_DELAY: 2000 // 2 seconds between retries
        },
        CACHE_TTL: 30 * 60 * 1000, // 30 minutes cache (extended from 5 minutes)
        HEADERS: {
            accept: '*/*',
            'accept-language': 'en',
            'content-type': 'application/json',
            'x-api-key': 'FFzpw3LeUc1Lvi6b0xPov4YFefmUQLsJa6WA1AcE',
            'user-id': 'd07b5e73-ce6a-4afd-8a2b-6479400c06ad',
            origin: 'https://chiri.pk',
            referer: 'https://chiri.pk/'
        }
    }
}

