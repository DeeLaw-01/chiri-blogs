import { Box, VStack, HStack, WrapItem } from '@chakra-ui/react'
import { usePathname } from 'src/i18n/router'
import Heading from 'ui/primitives/Heading'
import Link from 'ui/primitives/Link'
import Text from 'ui/primitives/Text'
import { backlinks } from './data'

export default function Backlinks() {
  const pathname = usePathname()

  return (
    <Box bg={'_lightestgray'} p={{ base: '1rem', md: '3rem' }} mt="12">
      <VStack
        pb={{ base: '2', md: '' }}
        alignContent={'center'}
        textAlign="center"
      >
        <Box maxW={{ base: '100vw', md: '80ch' }} px={4}>
          <Heading as={'h2'} st={'home-page.category.header'} />
          <Text fontSize="sm" st="home-page.backlinks.description" my="2" />
          <HStack
            as="ul"
            w={'100%'}
            h={{ base: '2.5rem' }}
            gap={'1.5rem'}
            justifyContent={{ base: 'flex-start', md: 'center' }}
            overflowX={{ base: 'auto', md: 'visible' }}
          >
            {backlinks.map((link, idx) => {
              if (pathname === link.url) return
              return (
                <WrapItem key={idx}>
                  <Link href={link.url}>
                    <Text as="span" st={link.st} whiteSpace="nowrap" />
                  </Link>
                </WrapItem>
              )
            })}
          </HStack>
        </Box>
      </VStack>
    </Box>
  )
}
