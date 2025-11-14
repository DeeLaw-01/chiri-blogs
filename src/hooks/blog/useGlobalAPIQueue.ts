import { useEffect, useRef, useCallback } from 'react'
import { globalAPICache, CACHE_TTL } from '@/src/services/apiCache'

// Global request queue interface
interface QueuedRequest {
  id: string
  priority: number
  component: string
  requestFn: () => Promise<unknown>
  resolve: (value: unknown) => void
  reject: (error: unknown) => void
  timestamp: number
}

// Priority levels for different component types
export const REQUEST_PRIORITIES = {
  RoundTripEstimate: 1,      // Highest priority - quick price insights
  PackageSearchSection: 2,   // Medium-high priority - user likely to interact
  CheapestAirline: 3,        // Medium priority - comparison data
  AirlineFlights: 4,         // Medium-low priority - detailed data
  StopsAnalysisSection: 5    // Lowest priority - analytical data
} as const

// Global request queue manager
class GlobalAPIRequestQueue {
  private queue: QueuedRequest[] = []
  private activeRequests = 0
  private readonly maxConcurrentRequests = 2 // Conservative limit to prevent overload
  private readonly delayBetweenRequests = 1000 // 1 second delay between batches
  private isProcessing = false

  // Add request to queue with priority
  enqueue<T>(
    requestFn: () => Promise<T>,
    component: string,
    priority: number = 5,
    requestId?: string
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      const id = requestId || `${component}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
      
      const queuedRequest: QueuedRequest = {
        id,
        priority,
        component,
        requestFn,
        resolve: resolve as (value: unknown) => void,
        reject,
        timestamp: Date.now()
      }

      // Insert request in priority order (lower number = higher priority)
      const insertIndex = this.queue.findIndex(req => req.priority > priority)
      if (insertIndex === -1) {
        this.queue.push(queuedRequest)
      } else {
        this.queue.splice(insertIndex, 0, queuedRequest)
      }

      
      this.processQueue()
    })
  }

  // Process the queue
  private async processQueue(): Promise<void> {
    if (this.isProcessing || this.activeRequests >= this.maxConcurrentRequests || this.queue.length === 0) {
      return
    }

    this.isProcessing = true

    while (this.queue.length > 0 && this.activeRequests < this.maxConcurrentRequests) {
      const request = this.queue.shift()
      if (!request) break

      this.activeRequests++

      this.executeRequest(request)
        .finally(() => {
          this.activeRequests--
          
          // Add delay before processing next batch
          if (this.queue.length > 0) {
            setTimeout(() => {
              this.isProcessing = false
              this.processQueue()
            }, this.delayBetweenRequests)
          } else {
            this.isProcessing = false
          }
        })
    }

    this.isProcessing = false
  }

  // Execute individual request with error handling
  private async executeRequest(request: QueuedRequest): Promise<void> {
    try {
      const result = await request.requestFn()
      request.resolve(result)
    } catch (error) {
      console.error(`❌ GlobalAPIQueue: Request failed for ${request.component}:`, error)
      request.reject(error)
    }
  }

  // Get current queue status
  getStatus() {
    return {
      queueSize: this.queue.length,
      activeRequests: this.activeRequests,
      maxConcurrent: this.maxConcurrentRequests,
      isProcessing: this.isProcessing
    }
  }

  // Clear queue (for emergency situations)
  clear() {
    this.queue.forEach(request => {
      request.reject(new Error('Request cancelled - queue cleared'))
    })
    this.queue = []
  }
}

// Global singleton instance
const globalAPIQueue = new GlobalAPIRequestQueue()

// Hook for components to use the global queue
export const useGlobalAPIQueue = () => {
  const componentRef = useRef<string>()

  // Generate component identifier
  useEffect(() => {
    componentRef.current = `component-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  }, [])

  const enqueueRequest = useCallback(<T>(
    requestFn: () => Promise<T>,
    component: string,
    priority?: number,
    requestId?: string
  ): Promise<T> => {
    const actualPriority = priority ?? REQUEST_PRIORITIES[component as keyof typeof REQUEST_PRIORITIES] ?? 5
    return globalAPIQueue.enqueue(requestFn, component, actualPriority, requestId)
  }, [])

  const getQueueStatus = useCallback(() => {
    return globalAPIQueue.getStatus()
  }, [])

  const clearQueue = useCallback(() => {
    return globalAPIQueue.clear()
  }, [])

  return {
    enqueueRequest,
    getQueueStatus,
    clearQueue
  }
}

// Utility hook for component-specific queuing
export const useComponentAPIQueue = (componentType: string) => {
  const { enqueueRequest, getQueueStatus, clearQueue } = useGlobalAPIQueue()

  const queueRequest = useCallback(<T>(
    requestFn: () => Promise<T>,
    requestId?: string
  ): Promise<T> => {
    return enqueueRequest(requestFn, componentType, undefined, requestId)
  }, [enqueueRequest, componentType])

  return {
    queueRequest,
    getQueueStatus,
    clearQueue
  }
}

export default globalAPIQueue