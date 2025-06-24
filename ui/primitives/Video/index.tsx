'use client'

import { Box } from '@chakra-ui/react'
import { CustomVideoProps } from './video.type'
import ReactPlayer from 'react-player/lazy'

export default function Video({ src, placeholder, ...rest }: CustomVideoProps) {
  return (
    <Box
      bgImage={placeholder ? placeholder : ''}
      bgSize={'cover'}
      w="full"
      h="full"
    >
      <ReactPlayer
        playing={true}
        width="100%"
        height="100%"
        playsinline={true}
        muted={true}
        loop={true}
        url={src}
        config={{
          file: {
            attributes: {
              playsInline: true,
              muted: true,
              controls: false,
            },
          },
        }}
        {...rest}
      />
    </Box>
  )
}
