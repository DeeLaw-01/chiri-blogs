import { Box, HStack, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import Text from 'ui/primitives/Text'
import Link from 'ui/primitives/Link'
import { theme } from 'src/styles/theme'
import IataIcon from '@/icons/homepage/iata.svg'
import LogoIcon from '@/icons/logo.svg'

import {
  SOCIAL_MEDIA_LINKS,
  PAYMENT_METHODS,
  FOOTER_LINKS,
  FooterLinkType,
} from 'src/data/footer-data'
import CircleIconWrapper from 'ui/shared/circle-icon-wrapper'
import { CONFIG_COMPANY } from 'src/config'
import Accordion from 'ui/primitives/Accordion'
import { FooterLink } from './footer-desktop'

export default function FooterMobile({ phone }: { phone: string }) {
  const mappedFooterLinks = Object.keys(FOOTER_LINKS).map((key) => ({
    title: <Text st={key} />,
    content: (
      <VStack py={2} w={'full'} alignItems={'flex-start'}>
        {FOOTER_LINKS[key as keyof typeof FOOTER_LINKS].map(
          (link: FooterLinkType) => {
            return <FooterLink key={link.path} link={link} />
          }
        )}
      </VStack>
    ),
  }))

  return (
    <VStack gap={5} alignItems={'flex-start'} w={'full'} pb={5}>
      {/* <HStack
        w="100vw"
        justifyContent="center"
        alignItems="center"
        bg="_lightestgray"
        h="20"
        ml="-4"
      >
        <Link
          href={TRUSTPILOT_REVIEW_LINK}
          aria-label={`${CONFIG_COMPANY.COMPANY_NAME} Trustpilot link`}
          isExternal
          display="flex"
          alignItems="center"
          textDecoration="none"
          gap={2}
        >
          <TrustpilotSVG width="80" height="20" fill={theme.colors._black} />
          <TrustpilotStar width="60" height="18" />
          <HStack spacing={1} align={'flex-end'} whiteSpace={'nowrap'}>
            <Text fontWeight={'600'} fontSize="sm">
              {CONFIG_REVIEWS.TRUSTPILOT_RATING}
            </Text>
            <Text fontSize="xs" marginInlineStart="0 !important">
              /5
            </Text>
          </HStack>
        </Link>
      </HStack> */}

      <Box color="_darkgray" fontSize="xs">
        <LogoIcon height="25" fill={theme.colors._black} />
        {/* <Text
          st="footer.company.information"
          sd={{ company_name: CONFIG_COMPANY.COMPANY_NAME }}
          mt={2}
        /> */}
        <Text mt={2} mb={4}>
          Chiri.pk is a company registered in Pakistan.
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
        <Text mt={2}>Chiri.pk is a company registered under IATA.</Text>

        {/* <HStack>
          <IataIcon height="30" fill={theme.colors._black} />
          <Text st="footer.iata.license.number" />
        </HStack> */}
      </Box>

      <Box w={'full'}>
        <Accordion AccordionButtonProps={{ px: 1 }} items={mappedFooterLinks} />
      </Box>

      <HStack width={'full'} alignItems={'center'} justifyContent={'center'}>
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
      </HStack>
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
      <Box w="full" display="flex" justifyContent="center">
        <Text mt={2} mb={4} fontSize="xs" textAlign={'center'} color={'_gray'}>
          Copyright 2025 Chiri Private Limited. All rights reserved.
        </Text>
      </Box>
    </VStack>
  )
}
