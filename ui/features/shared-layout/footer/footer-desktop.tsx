import IataIcon from '@/icons/homepage/iata.svg'
import LogoIcon from '@/icons/logo.svg'
import {
  Box,
  Divider,
  HStack,
  SimpleGrid,
  Stack,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { theme } from 'src/styles/theme'
import Link from 'ui/primitives/Link'
import NextLink from 'next/link'
import Text from 'ui/primitives/Text'

import {
  FOOTER_LINKS,
  FooterLinkType,
  PAYMENT_METHODS,
} from 'src/data/footer-data'
import Heading from 'ui/primitives/Heading'

type FooterDesktopProps = {
  phone: string
}

export default function FooterDesktop({ phone }: FooterDesktopProps) {
  return (
    <VStack w="full">
      <HStack alignItems="flex-start" w="full">
        <Box color="_darkgray" fontSize="xs" pr={5}>
          <LogoIcon height="40px" />
          {/* <Text
            mt={2}
            st="footer.company.information"
            sd={{ company_name: CONFIG_COMPANY.COMPANY_NAME }}
          /> */}
          <Text mt={2}>
            Copyright 2025 Chiri.pk Private Limited. All rights reserved.
          </Text>
          {/* <Text st="footer.contact.address" /> */}
          {/* <Link
            isExternal
            aria-label={`${CONFIG_COMPANY.COMPANY_NAME} phone ${phone}`}
            href={`tel:${phone}`}
          >
            <Text st="footer.contact.phone" />
          </Link> */}
          <IataIcon height="40" fill={theme.colors._black} />
        </Box>
        <SimpleGrid columns={4} spacing={10} w="full">
          {Object.keys(FOOTER_LINKS).map((key) => {
            return (
              <VStack key={key} alignItems={'flex-start'}>
                <Heading as="h3" st={key} />
                {FOOTER_LINKS[key].map((link: FooterLinkType) => {
                  return <FooterLink key={link.path} link={link} />
                })}
              </VStack>
            )
          })}
        </SimpleGrid>
      </HStack>
      <VStack w="full">
        <Divider pt={2} />
        <Stack direction="row" py={2} pb={5} w="full">
          <Box flexGrow="1" flexBasis="0">
            <HStack justifyContent="flex-start">
              {/* <HStack>
                {SOCIAL_MEDIA_LINKS.map((link) => {
                  return (
                    <Link
                      isExternal
                      aria-label={`${CONFIG_COMPANY.COMPANY_NAME} ${link.name}`}
                      href={link.href}
                      key={link.name}
                    >
                      <CircleIconWrapper>{link.icon}</CircleIconWrapper>
                    </Link>
                  )
                })}
              </HStack> */}
            </HStack>
          </Box>
          {/* <Box flexGrow="1" flexBasis="0">
            <Link
              href={TRUSTPILOT_REVIEW_LINK}
              aria-label={`${CONFIG_COMPANY.COMPANY_NAME} Trustpilot link`}
              isExternal
            >
              <HStack
                spacing={1}
                justifyContent="space-around"
                display={'initial'}
              >
                <HStack>
                  <TrustpilotSVG
                    width="80"
                    height="20"
                    fill={theme.colors._black}
                  />
                  <TrustpilotStar width="60" height="18" />
                  <HStack spacing={1} align={'flex-end'} whiteSpace={'nowrap'}>
                    <Text fontWeight={'600'} fontSize="sm">
                      {CONFIG_REVIEWS.TRUSTPILOT_RATING}
                    </Text>
                    <Text fontSize="xs" marginInlineStart={'0 !important'}>
                      /5
                    </Text>
                  </HStack>
                </HStack>
              </HStack>
            </Link>
          </Box> */}
          <Box flexGrow="1" flexBasis="0">
            <Wrap justifyContent={'flex-end'} w="full">
              {PAYMENT_METHODS.map((p) => {
                return (
                  <WrapItem
                    maxH="2rem"
                    borderRadius="5"
                    p={2}
                    border="1px solid"
                    borderColor="_darkgray"
                    key={p.name}
                  >
                    {p.icon}
                  </WrapItem>
                )
              })}
            </Wrap>
          </Box>
        </Stack>
      </VStack>
    </VStack>
  )
}

export const FooterLink = ({ link }: { link: FooterLinkType }) => {
  // Special handling for /blogs link - use NextLink to avoid locale prefix
  if (link.path === '/blogs') {
    return (
      <NextLink href="/blogs" style={{ textDecoration: 'none' }}>
        <Text notag st={link.key} fontSize="sm" color="_gray" />
      </NextLink>
    )
  }

  // Use regular intl Link for all other links
  return (
    <Link href={link.path} fontSize="sm" color="_gray">
      <Text notag st={link.key} />
    </Link>
  )
}
