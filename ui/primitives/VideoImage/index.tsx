'use client'

import Video from '../Video'
import Image from '../Image'
import { CustomImageProps } from '../Image/image.type'
import { CustomVideoProps } from '../Video/video.type'
import { CustomVideoImageProps } from './videoimage.type'

const extensions = ['.mp4', '.webm', '.ogg']

export default function VideoImage({ src, ...rest }: CustomVideoImageProps) {
  const isVideo = () => {
    return extensions.some((ext) => src.toLowerCase().endsWith(ext))
  }

  return isVideo() ? (
    <Video {...(rest as CustomVideoProps)} src={src} />
  ) : (
    <Image fill {...(rest as CustomImageProps)} src={src} />
  )
}
