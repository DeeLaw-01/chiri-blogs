/**
 * Global API Cache Service
 * Provides cross-component caching for API responses to prevent duplicate requests
 */

interface CacheEntry<T = any> {
  data: T
  timestamp: number
  expiresAt: number
}

interface CacheConfig {
  defaultTTL: number // Time to live in milliseconds
  maxSize: number    // Maximum number of entries
}

class GlobalAPICache {
  private cache = new Map<string, CacheEntry>()
  private config: CacheConfig

  constructor(config: Partial<CacheConfig> = {}) {
    this.config = {
      defaultTTL: 5 * 60 * 1000, // 5 minutes default
      maxSize: 100,
      ...config
    }
  }

  /**
   * Generate a cache key from parameters
   */
  private generateKey(operation: string, params: Record<string, any>): string {
    const sortedParams = Object.keys(params)
      .sort()
      .reduce((sorted, key) => {
        sorted[key] = params[key]
        return sorted
      }, {} as Record<string, any>)
    
    return `${operation}:${JSON.stringify(sortedParams)}`
  }

  /**
   * Clean up expired entries and enforce max size
   */
  private cleanup(): void {
    const now = Date.now()
    
    // Remove expired entries
    for (const [key, entry] of this.cache.entries()) {
      if (entry.expiresAt <= now) {
        this.cache.delete(key)
      }
    }

    // Enforce max size by removing oldest entries
    if (this.cache.size > this.config.maxSize) {
      const entries = Array.from(this.cache.entries())
      entries.sort((a, b) => a[1].timestamp - b[1].timestamp)
      
      const excess = this.cache.size - this.config.maxSize
      for (let i = 0; i < excess; i++) {
        this.cache.delete(entries[i][0])
      }
    }
  }

  /**
   * Get cached data if available and not expired
   */
  get<T>(operation: string, params: Record<string, any>): T | null {
    const key = this.generateKey(operation, params)
    const entry = this.cache.get(key)

    if (!entry) {
      return null
    }

    if (entry.expiresAt <= Date.now()) {
      this.cache.delete(key)
      return null
    }

    return entry.data as T
  }

  /**
   * Store data in cache
   */
  set<T>(
    operation: string, 
    params: Record<string, any>, 
    data: T, 
    ttl: number = this.config.defaultTTL
  ): void {
    const key = this.generateKey(operation, params)
    const now = Date.now()

    this.cache.set(key, {
      data,
      timestamp: now,
      expiresAt: now + ttl
    })

    this.cleanup()
  }

  /**
   * Clear cache for specific operation or all
   */
  clear(operation?: string): void {
    if (operation) {
      for (const [key] of this.cache.entries()) {
        if (key.startsWith(`${operation}:`)) {
          this.cache.delete(key)
        }
      }
    } else {
      this.cache.clear()
    }
  }

  /**
   * Get cache statistics
   */
  getStats() {
    const now = Date.now()
    let validEntries = 0
    let expiredEntries = 0

    for (const [, entry] of this.cache.entries()) {
      if (entry.expiresAt > now) {
        validEntries++
      } else {
        expiredEntries++
      }
    }

    return {
      totalEntries: this.cache.size,
      validEntries,
      expiredEntries,
      maxSize: this.config.maxSize
    }
  }

  /**
   * Wrapper for caching API calls
   */
  async cached<T>(
    operation: string,
    params: Record<string, any>,
    apiCall: () => Promise<T>,
    ttl?: number
  ): Promise<T> {
    // Try to get from cache first
    const cached = this.get<T>(operation, params)
    if (cached !== null) {
      return cached
    }

    // Cache miss - make API call
    const data = await apiCall()
    
    // Store in cache
    this.set(operation, params, data, ttl)
    
    return data
  }
}

// Global cache instance
export const globalAPICache = new GlobalAPICache({
  defaultTTL: 5 * 60 * 1000, // 5 minutes
  maxSize: 200
})

// Cache TTL constants for different operations
export const CACHE_TTL = {
  TRIP_SUGGESTIONS: 10 * 60 * 1000,    // 10 minutes for trip suggestions
  TRIP_DETAILS: 5 * 60 * 1000,         // 5 minutes for trip details
  CARRIERS: 15 * 60 * 1000,             // 15 minutes for carriers
  LOCATION_SEARCH: 30 * 60 * 1000,     // 30 minutes for location searches
  ONE_WAY_FLIGHTS: 5 * 60 * 1000       // 5 minutes for flight searches
} as const

export default globalAPICache
