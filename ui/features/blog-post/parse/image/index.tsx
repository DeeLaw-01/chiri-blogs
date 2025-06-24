import { Box } from '@chakra-ui/react'
import FullScreenCarousel from 'ui/features/full-screen-carousel'
import Image from 'ui/primitives/Image'

type BlogImageProps = {
  attribs: { [name: string]: string }
}

export default function BlogImage({ attribs }: BlogImageProps) {
  return (
    <Box justifyContent={'center'} my={3}>
      <FullScreenCarousel
        images={[attribs.src]}
        _hover={{ cursor: 'initial' }}
        borderRadius="lg"
        overflow={'hidden'}
      >
        <Image
          src={attribs.src}
          alt={attribs.alt}
          width={0}
          height={0}
          sizes="(max-width: 768px) 100vw, 20rem"
          style={{
            width: '100%',
            maxHeight: '300px',
            objectFit: 'cover',
          }}
        />
      </FullScreenCarousel>
    </Box>
  )
}
