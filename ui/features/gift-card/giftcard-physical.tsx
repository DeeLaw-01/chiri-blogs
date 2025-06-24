import { Box, HStack, VStack, Divider, Center } from '@chakra-ui/react'

import { MotionBox } from 'ui/primitives/Motion'
import { AnimatePresence } from 'framer-motion'
import useCurrency from 'src/hooks/useCurrency'
import useTranslation from 'src/hooks/useTranslation'

import Text from 'ui/primitives/Text'
import Heading from 'ui/primitives/Heading'
import NextImage from 'next/image'
import HorizontalSlider from 'ui/shared/horizontal-slider'
import { theme } from 'src/styles/theme'
import { useResponsiveSizes } from 'src/contexts/responsive'

import LogoIcon from '@/icons/logo.svg'
import InstagramIcon from '@/icons/shared/instagram-icon.svg'
import HappyHolidaySVG from '@/icons/giftcard/happy-holiday.svg'

import { GiftType, getCityImageCode } from 'ui/features/gift-card/utils/shared'

import type { ReactNode } from 'react'
import { CONFIG_COMPANY } from 'src/config'

const GiftCardPageTemplate = ({
  bg,
  topHalf,
  bottomHalf,
}: {
  bg?: ReactNode
  topHalf: ReactNode
  bottomHalf: ReactNode
}) => {
  return (
    <Box h="full" pos="relative">
      <Box>{bg}</Box>
      <VStack pos="relative" zIndex={1} h="full" spacing={0}>
        <Box w="full" h="32rem" pos="relative">
          {topHalf}
        </Box>
        <Divider h="1px" bg="_white" w="full" />
        <Box w="full" h="full" px="4">
          {bottomHalf}
        </Box>
      </VStack>
    </Box>
  )
}

type PreviewCardProps = {
  code: string
  name: string
  giftType: GiftType
  customMessage: string
  showMobilePreview: boolean
  value: number
}

export default function GiftcardPhysical({
  code,
  name,
  value,
  giftType,
  customMessage,
  showMobilePreview,
}: PreviewCardProps): JSX.Element {
  const { t } = useTranslation()
  const { isMobile, isDesktop } = useResponsiveSizes()

  const FrontPage = (): JSX.Element => {
    return (
      <GiftCardPageTemplate
        bg={
          <>
            {giftType === 'general' ? (
              <Box pos="absolute" inset={0} bg="primary" />
            ) : (
              <>
                <Box pos="absolute" inset={0} bg="blackAlpha.400" zIndex={1} />
                <Box pos="absolute" inset={0}>
                  <NextImage
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                    alt="Gift card preview"
                    src={getCityImageCode(giftType)}
                  />
                </Box>
              </>
            )}
            <Box
              w="full"
              h="full"
              right="0"
              left="0"
              pos="absolute"
              mixBlendMode="overlay"
              backgroundImage={'url(/static/home-page/newnoise.png)'}
            />
          </>
        }
        topHalf={
          <>
            <HStack justify="flex-end" pr="4" pt="4" color="_white">
              <HappyHolidaySVG />
            </HStack>

            <VStack
              w="full"
              zIndex={1}
              pos="absolute"
              top="55%"
              left="52%"
              transform="translate(-50%, -50%)"
              color="_white"
            >
              <LogoIcon height="30" />
              <Text st="gift-card.preview.card.front.sub.heading" />
            </VStack>
          </>
        }
        bottomHalf={<></>}
      />
    )
  }

  const BackPage = (): JSX.Element => {
    const { getConvertedCurrency } = useCurrency()

    return (
      <GiftCardPageTemplate
        topHalf={
          <VStack w="full" align="flex-start" spacing={4}>
            <HStack px="4" pt="4" w="full" justify="space-between">
              <VStack color="primary">
                <LogoIcon />
                <Text
                  fontSize="xx-small"
                  st="gift-card.preview.card.front.sub.heading"
                />
              </VStack>
              <HStack justify="flex-end" color="primary">
                <HappyHolidaySVG />
              </HStack>
            </HStack>

            <Center w="full">
              <VStack w="full" maxW="80%" textAlign="center">
                <Text
                  fontWeight="medium"
                  fontSize="lg"
                  sd={{ name: name }}
                  st="gift-card.preview.card.back.name"
                />
                <Text fontSize="sm">
                  {customMessage.length > 0
                    ? customMessage
                    : t('gift-card.preview.card.back.default.custom.msg')}
                </Text>
                <Text fontSize="sm" st="gift-card.preview.card.back.end.text" />
              </VStack>
            </Center>
          </VStack>
        }
        bottomHalf={
          <>
            <VStack mt="4">
              <Text
                fontSize="2xl"
                textAlign="center"
                st="gift-card.preview.card.title"
                sd={{ company_name: CONFIG_COMPANY.COMPANY_NAME }}
              />
              <HStack
                px="4"
                py="2"
                mt="2"
                borderRadius="lg"
                color="primary"
                bg="secondary"
              >
                <Text
                  fontWeight="medium"
                  st="gift-card.preview.card.back.value"
                  sd={{ amount: getConvertedCurrency(value) }}
                />
              </HStack>
            </VStack>

            <Box fontSize="2xs" mt="3.2rem">
              <Text st="gift-card.preview.card.front.message.one" />
              <Text st="gift-card.preview.card.front.message.two" />
              <Text mb="2" st="gift-card.preview.card.front.message.three" />
              <Text
                display={'inline'}
                st="gift-card.preview.card.front.message.four"
              />
              <Text
                pl="3px"
                display={'inline'}
                st="gift-card.preview.card.front.message.five"
                sd={{ amount: getConvertedCurrency(value) }}
              />
            </Box>

            <HStack
              w="full"
              bottom="2"
              spacing={0.5}
              pr="8"
              align="center"
              justify={'space-between'}
              position={'absolute'}
            >
              <Text
                fontWeight="medium"
                sd={{ code: code }}
                st="gift-card.preview.card.back.code"
                fontSize="xs"
              />
            </HStack>
          </>
        }
      />
    )
  }

  const showBoolean = isDesktop || (isMobile && showMobilePreview)

  return (
    <AnimatePresence>
      {showBoolean && (
        <MotionBox
          mt={{ base: 4, md: 0 }}
          exit={{ opacity: 0 }}
          w={{ base: 'full', md: '28rem' }}
          initial={isDesktop ? false : { opacity: 0 }}
          animate={{ opacity: 1, transition: { type: 'tween' } }}
        >
          <HorizontalSlider
            heading={<Heading as="h2" st="common.general.preview" />}
          >
            <Box
              bg="_white"
              pos="relative"
              border="1px solid"
              borderColor="_lightgray"
              h={{ base: '40rem', md: '37rem' }}
              minW={{ base: 'full', md: '27rem' }}
            >
              <FrontPage />
            </Box>

            <Box
              bg="_white"
              pos="relative"
              border="1px solid"
              borderColor="_lightgray"
              h={{ base: '40rem', md: '37rem' }}
              minW={{ base: 'full', md: '27rem' }}
            >
              <BackPage />
            </Box>
          </HorizontalSlider>
        </MotionBox>
      )}
    </AnimatePresence>
  )
}
