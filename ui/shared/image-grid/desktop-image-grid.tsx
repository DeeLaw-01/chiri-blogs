import { Box, GridItem, VStack, Grid } from '@chakra-ui/react'
import FullScreenCarousel from 'ui/features/full-screen-carousel'
import Text from 'ui/primitives/Text'
import Button from 'ui/primitives/Button'
import VideoImage from 'ui/primitives/VideoImage'
import { Image } from './index'

type DesktopImageGridProps = {
  images: Image[]
}

export default function DesktopImageGrid({ images }: DesktopImageGridProps) {
  return (
    <Grid
      h="45ch"
      maxH={'800px'}
      templateRows="repeat(2, 1fr)"
      templateColumns={`repeat(${Math.min(images.length, 4)}, 1fr)`}
      gap={2}
      pb={5}
      mt={2}
    >
      {/* Map through all images except the last (needs a CTA) to create the image grid */}
      {images.map((image, idx) => {
        if (idx > 3) return
        return (
          <GridItem
            key={idx}
            rowSpan={images.length === 2 || idx === 0 ? 2 : 1}
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
                borderRadius={12}
                overflow="hidden"
                bg="gray.300"
                _hover={{ opacity: 0.95 }}
              >
                <VideoImage
                  fill
                  alt="city-image"
                  priority
                  sizes="100vw"
                  quality={100}
                  style={{ objectFit: 'cover' }}
                  placeholder={image.placeholder}
                  src={image.src}
                />
              </Box>
              {image.label && (
                <Box
                  pos="absolute"
                  left="2"
                  bottom="2"
                  bg="rgba(0,0,0,0.5)"
                  px="2"
                  py="0.5"
                  borderRadius="md"
                >
                  <Text color="_white" fontSize="xs">
                    {image.label}
                  </Text>
                </Box>
              )}
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
              borderRadius={12}
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
                >
                  <Text st="common:photos.see.more" />
                </Button>
              </VStack>
              <VideoImage
                fill
                playing={false}
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
