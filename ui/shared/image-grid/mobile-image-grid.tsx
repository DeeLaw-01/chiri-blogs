import { Box, GridItem, VStack, Grid, GridProps } from '@chakra-ui/react'
import FullScreenCarousel from 'ui/features/full-screen-carousel'
import Button from 'ui/primitives/Button'
import VideoImage from 'ui/primitives/VideoImage'
import { Image } from './index'

type MobileImageGridProps = {
  images: Image[]
} & GridProps

export default function MobileImageGrid({
  images,
  ...rest
}: MobileImageGridProps) {
  return (
    <Grid
      h="28vh"
      maxH={'800px'}
      templateRows="repeat(3, 1fr)"
      templateColumns={`repeat(${Math.min(images.length, 3)}, 1fr)`}
      gap={2}
      pb={5}
      mt={2}
      {...rest}
    >
      {/* Map through all images except the last (needs a CTA) to create the image grid */}
      {images.map((image, idx) => {
        if (idx > 2) return
        return (
          <GridItem
            key={idx}
            rowSpan={images.length === 2 || idx === 0 ? 3 : 1}
            colSpan={idx === 0 && images.length > 2 ? 2 : 1}
            cursor={'pointer'}
          >
            <FullScreenCarousel
              images={images.map((img) => img.src)}
              h="full"
              currentImageIndex={idx}
            >
              <Box
                position="relative"
                h="full"
                borderRadius={'lg'}
                overflow="hidden"
                bg="gray.300"
                _hover={{ opacity: 0.95 }}
              >
                <VideoImage
                  priority
                  fill
                  alt={image.label}
                  style={{ objectFit: 'cover' }}
                  src={image.src}
                  sizes="100%"
                  quality={100}
                />
              </Box>
            </FullScreenCarousel>
          </GridItem>
        )
      })}
      {/* Last item needs darkened background and "See more images" CTA */}
      {images.length > 3 && (
        <GridItem colSpan={1}>
          <FullScreenCarousel
            images={images.map((img) => img.src)}
            h="full"
            currentImageIndex={0}
            role="group"
            _hover={{ opacity: 0.95, cursor: 'pointer' }}
          >
            <Box
              position="relative"
              h="full"
              borderRadius={'lg'}
              overflow="hidden"
              zIndex={-1}
              bg="gray.300"
            >
              <VStack
                position="absolute"
                top="0"
                left="0"
                zIndex="10"
                w="full"
                h="full"
                bg={'rgba(0, 0, 0, 0.5)'}
                _hover={{ opacity: 0.95 }}
                justifyContent={'space-around'}
                color="_white"
              >
                <Button
                  id="stays-bottom-nav"
                  asLink
                  arrow
                  color="_white"
                  _hover={{ textDecoration: 'none' }}
                  fontWeight="normal"
                />
              </VStack>
              <VideoImage
                fill
                style={{ objectFit: 'cover' }}
                alt={images[0]?.label}
                src={images[0]?.src}
                sizes="100%"
                quality={100}
              />
            </Box>
          </FullScreenCarousel>
        </GridItem>
      )}
    </Grid>
  )
}
