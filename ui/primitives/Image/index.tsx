'use client'

import NextImage from 'next/image'
import { CustomImageProps } from './image.type'

export default function Image({ src, ...rest }: CustomImageProps) {
  return (
    <NextImage
      src={src ? src : '/static/image-not-found.png'}
      onError={(event) => {
        const target = event.target as HTMLImageElement
        target.id = '/static/image-not-found.png'
        target.srcset = '/static/image-not-found.png'
      }}
      {...rest}
    />
  )
}
