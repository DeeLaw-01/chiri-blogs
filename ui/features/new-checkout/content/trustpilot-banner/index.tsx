import { Flex, BoxProps, HStack, Link } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import TrustpilotIcon from '@/icons/new-homepage/trustpilot-review.svg'
import TrustpilotStar from '@/icons/new-homepage/trustpilot-star.svg'
import { TRUSTPILOT_REVIEW_LINK } from 'src/data/links'
import { CONFIG_REVIEWS } from 'src/config'
import { useResponsiveSizes } from 'src/contexts/responsive'

type TrustpilotBannerProps = {} & BoxProps

export default function TrustpilotBanner({ ...rest }: TrustpilotBannerProps) {
  const { isMobile } = useResponsiveSizes()
  return (
    <Flex textAlign="center" {...rest}>
      <Link
        isExternal
        href={TRUSTPILOT_REVIEW_LINK}
        _hover={{ textDecor: 'none' }}
      >
        <HStack spacing={2}>
          <TrustpilotStar height={isMobile ? 14 : 20} />
          <TrustpilotIcon
            height={isMobile ? 14 : 20}
            fill="black"
            style={{ verticalAlign: 'middle', display: 'inline-block' }}
          />
        </HStack>
        <Text
          color="_gray"
          fontSize={{ base: '2xs', md: 'xs' }}
          display="inline-block"
          mt={{ base: 0, md: 2 }}
        >
          Trustscore <b>{CONFIG_REVIEWS.TRUSTPILOT_RATING}</b> |{' '}
          <u>
            {CONFIG_REVIEWS.TRUSTPILOT_REVIEWS}{' '}
            <Text
              st="common.general.reviews"
              textTransform={'lowercase'}
              notag
            />
          </u>
        </Text>
      </Link>
    </Flex>
  )
}
