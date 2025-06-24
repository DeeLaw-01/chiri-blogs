import { Box, HStack, VStack } from '@chakra-ui/react'
import Heading from 'ui/primitives/Heading'
import { TRUSTPILOT_REVIEW_LINK } from 'src/data/links'
import Text from 'ui/primitives/Text'
import Link from 'ui/primitives/Link'

import TrustpilotStar from '@/icons/new-homepage/trustpilot-star.svg'
import { CONFIG_REVIEWS } from 'src/config'
import Button from 'ui/primitives/Button'
import { useRef, useState } from 'react'
import Container from 'ui/primitives/Container'
import CircleIconWrapper from 'ui/shared/circle-icon-wrapper'
import theme from 'src/styles/theme'
import LeftArrowIcon from '@/icons/shared/left-icon.svg'
import useTranslation from 'src/hooks/useTranslation'

type Review = {
  name: string
  text: string
}
const reviewData = [
  {
    name: 'reviews:trust.pilot.review.one.name',
    text: 'reviews:trust.pilot.review.one.description',
  },
  {
    name: 'reviews:trust.pilot.review.two.name',
    text: 'reviews:trust.pilot.review.two.description',
  },
  {
    name: 'reviews:trust.pilot.review.three.name',
    text: 'reviews:trust.pilot.review.three.description',
  },
  {
    name: 'reviews:trust.pilot.review.four.name',
    text: 'reviews:trust.pilot.review.four.description',
  },
] as Review[]

export default function TrustpilotReviews() {
  const CARD_WIDTH = 300
  const THRESHOLD = 50
  const ref = useRef<HTMLDivElement | null>(null)
  const [scrollW, setScrollW] = useState<number>(0)

  const scroll = (scrollOffset: number) => {
    const newScrollW = ref.current.scrollLeft + scrollOffset
    ref.current.scrollLeft = newScrollW
  }

  return (
    <VStack
      bg="gray.100"
      w="100vw"
      overflow="hidden"
      position="relative"
      pt={'2rem'}
      pb={'8rem'}
      mt={8}
      mb={-8}
      alignContent="center"
    >
      <Container p={'0 !important'}>
        <Heading
          as="h2"
          fontWeight="normal"
          textAlign="center"
          pt={10}
          st="reviews:header"
        />
        <Box pos={'relative'} zIndex="0">
          <Box
            position="absolute"
            bgGradient="linear(to-r, transparent 0%, gray.100 60%)"
            w="50px"
            right={0}
            h="full"
            zIndex="99"
            display={'flex'}
            alignItems={'center'}
            justifyContent={'flex-end'}
          >
            <CircleIconWrapper
              transform="rotate(180deg)"
              bg="_white"
              onClick={() => scroll(CARD_WIDTH)}
              aria-label="Right Button"
              mr="2"
              display={
                scrollW + ref.current?.clientWidth + THRESHOLD >=
                ref.current?.scrollWidth
                  ? 'none'
                  : 'flex'
              }
            >
              <LeftArrowIcon
                width="18"
                height="18"
                stroke={theme.colors._black}
              />
            </CircleIconWrapper>
          </Box>
          <Box
            position="absolute"
            bgGradient="linear(to-l, transparent 0%, gray.100 60%)"
            w="50px"
            left={0}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            h="full"
            zIndex="1"
          >
            <CircleIconWrapper
              bg="_white"
              onClick={() => scroll(-CARD_WIDTH)}
              aria-label="Left Button"
              ml="2"
              display={scrollW - THRESHOLD > 0 ? 'block' : 'none'}
            >
              <LeftArrowIcon
                width="18"
                height="18"
                stroke={theme.colors._black}
              />
            </CircleIconWrapper>
          </Box>

          <HStack
            pos={'relative'}
            ref={ref}
            onScroll={() => {
              setScrollW(ref.current?.scrollLeft)
            }}
            spacing={5}
            mt={2}
            pl="5"
            pt="2.5rem"
            pb={5}
            scrollBehavior={'smooth'}
            position="relative"
            overflowX={{ base: 'scroll', md: 'hidden' }}
            scrollSnapType={'x mandatory'}
            pr="50px"
            alignContent="center"
          >
            {reviewData.map((review, idx) => {
              return <ReviewCard key={review.name} review={review} idx={idx} />
            })}
            <TrustpilotCTABanner />
          </HStack>
        </Box>
      </Container>
    </VStack>
  )
}

const ReviewCard = ({ review, idx }: { review: Review; idx: number }) => {
  const { t } = useTranslation()
  return (
    <Box
      key={review.name}
      scrollSnapAlign={'center'}
      borderRadius="lg"
      boxShadow="rgba(0, 0, 0, 0.18) 0px 1px 5px"
      position="relative"
      bg="_white"
      minW={{ base: '85%', md: '350px' }}
      ml={idx === 0 ? '25px' : 'initial'}
      h="12rem"
    >
      <Box
        position="absolute"
        top="-25px"
        borderRadius="full"
        left="calc(50% - 25px)"
        bg="_lightblue"
        border="4px solid white"
        outline={'2px solid'}
        outlineColor={'_lightgray'}
        h="50px"
        w="50px"
        overflow="hidden"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="lg"
        color="_gray"
      >
        {t(review.name)?.charAt(0)}
        {t(review.name)?.split(' ')[1]?.charAt(0)}
      </Box>
      <VStack p={5} mt={5} textAlign="center">
        <Text st={review.name} />
        <Text color="_gray" fontSize="xs" st={review.text} />

        <TrustpilotStar width="100" height="26" />
      </VStack>
    </Box>
  )
}
const TrustpilotCTABanner = () => {
  return (
    <Box
      scrollSnapAlign={'center'}
      borderRadius="lg"
      boxShadow="rgba(0, 0, 0, 0.18) 0px 1px 5px"
      minW={{ base: '85%', md: '350px' }}
      h="12rem"
      position="relative"
      bgGradient="linear(to-r, green.600, green.800)"
      color="white"
      p={5}
      textAlign="center"
    >
      <Heading as="h4" mt="2" st="reviews:cta.card.title" />
      <Text
        fontSize={{ base: '2xs', md: 'xs' }}
        mt="2"
        st="reviews:cta.card.description"
        sd={{
          count: CONFIG_REVIEWS.TRUSTPILOT_REVIEWS,
          rating: CONFIG_REVIEWS.TRUSTPILOT_RATING,
        }}
      />
      <HStack justifyContent={'space-around'} mt="2">
        <TrustpilotStar width="100" height="26" />
      </HStack>
      <HStack
        justifyContent="flex-end"
        position="absolute"
        bottom="5"
        right="5"
      >
        <Button id="see-more-reviews" asLink color="white" fontSize="xs" arrow>
          <Link isExternal href={TRUSTPILOT_REVIEW_LINK}>
            <Text notag st="reviews:see.more" />
          </Link>
        </Button>
      </HStack>
    </Box>
  )
}
