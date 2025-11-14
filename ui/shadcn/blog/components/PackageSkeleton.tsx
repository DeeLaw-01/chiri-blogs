import React from 'react'
import { Card, CardContent } from '@/ui/shadcn/ui/card'
import { Skeleton } from '@/ui/shadcn/ui/skeleton'

interface PackageSkeletonProps {
  count?: number
}

export const PackageSkeleton: React.FC<PackageSkeletonProps> = ({ count = 3 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <Card key={index} className="w-full overflow-hidden hover:shadow-lg transition-shadow duration-200">
          <CardContent className="p-0">
            {/* Package Image Skeleton */}
            <div className="relative">
              <Skeleton className="w-full h-48" />
              <div className="absolute top-3 right-3">
                <Skeleton className="h-6 w-16 bg-white/20" />
              </div>
            </div>

            {/* Package Content Skeleton */}
            <div className="p-4 space-y-3">
              {/* Title */}
              <Skeleton className="h-5 w-3/4" />

              {/* Subtitle */}
              <Skeleton className="h-4 w-1/2" />

              {/* Duration & Details */}
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

              {/* Features/Highlights */}
              <div className="space-y-2">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-4/5" />
                <Skeleton className="h-3 w-3/5" />
              </div>

              {/* Price and Button */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <div>
                  <Skeleton className="h-6 w-20 mb-1" />
                  <Skeleton className="h-3 w-16" />
                </div>
                <Skeleton className="h-8 w-24" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  )
}

export default PackageSkeleton
