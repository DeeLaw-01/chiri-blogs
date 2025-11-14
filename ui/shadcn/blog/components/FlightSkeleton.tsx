import React from 'react'
import { Card, CardContent } from '@/ui/shadcn/ui/card'
import { Skeleton } from '@/ui/shadcn/ui/skeleton'

interface FlightSkeletonProps {
  count?: number
}

export const FlightSkeleton: React.FC<FlightSkeletonProps> = ({ count = 1 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <Card key={index} className="w-full max-w-full overflow-hidden border border-gray-200">
          <CardContent className="p-3 sm:p-4">
            {/* Header with airline name and price skeleton */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <div className="min-w-0">
                <Skeleton className="h-6 w-32" />
              </div>
              <div className="text-right sm:self-auto self-start">
                <Skeleton className="h-6 w-20 mb-1" />
                <Skeleton className="h-4 w-12" />
              </div>
            </div>

            {/* Flight details skeleton */}
            <div className="space-y-3">
              {/* Route and time skeleton */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-5 w-12" />
                  <div className="flex items-center gap-1">
                    <Skeleton className="h-4 w-4 rounded-full" />
                    <Skeleton className="h-0.5 w-8" />
                    <Skeleton className="h-4 w-4 rounded-full" />
                  </div>
                  <Skeleton className="h-5 w-12" />
                </div>
                <Skeleton className="h-4 w-16" />
              </div>

              {/* Cities skeleton */}
              <div className="flex items-center justify-between text-xs">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-24" />
              </div>

              {/* Footer with duration and stops skeleton */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Skeleton className="h-4 w-4" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                  <div className="flex items-center gap-1">
                    <Skeleton className="h-4 w-4" />
                    <Skeleton className="h-4 w-12" />
                  </div>
                </div>
                <Skeleton className="h-6 w-16" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  )
}

export default FlightSkeleton
