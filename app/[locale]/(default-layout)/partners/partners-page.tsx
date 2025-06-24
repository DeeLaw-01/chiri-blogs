'use client'

import {
  Box,
  VStack,
  Stack,
  Center,
  SimpleGrid,
  HStack,
} from '@chakra-ui/react'

import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import Container from 'ui/primitives/Container'
import Link from 'ui/primitives/Link'
import NextImage from 'next/image'
import { FyensLink, MaggLink, PublicoLink } from 'src/data/links'
import ArrowDownIcon from '@/icons/shared/arrow-down-icon.svg'
import IphoneBlurDesign from 'public/static/partners/iphone-blur.png'
import IncomeIcon from '@/icons/partners/dollar-icon.svg'
import CupIcon from '@/icons/partners/cup-icon.svg'
import TagIcon from '@/icons/partners/tag-icon.svg'
import FyensIcon from '@/icons/homepage/partners/fyens.svg'
import MaggIcon from '@/icons/homepage/partners/magg.svg'
import PnetflixIcon from '@/icons/homepage/partners/p-netflix.svg'
import AccelerateIcon from '@/icons/partners/accelerate.svg'
import Saraveigaa from 'public/static/partners/saraveigaa.png'
import Adventuresapiens from 'public/static/partners/adventuresapiens.png'
import Viajarmaiscommenos from 'public/static/partners/viajarmaiscommenos.png'
import Miguellmagalhaes from 'public/static/partners/miguellmagalhaes.png'
import Passaporteportugues from 'public/static/partners/passaporte_portugues.png'
import Lucaswithstrangers from 'public/static/partners/lucaswithstrangers.png'
import { theme } from 'src/styles/theme'
import Heading from 'ui/primitives/Heading'
import InfluencerCard from 'ui/features/partners/influencer-card'
import AnimateCounter from 'ui/shared/animate-counter'
import ScheduleButton from 'ui/features/navbar/schedule-button'

export default function Partners() {
  return (
    <>
      <Container mt="8">
        <Box
          textAlign={'center'}
          h={40}
          transform={{ base: 'scale(1)', md: 'scale(2.5)' }}
          pos={'relative'}
          mt={{ base: 8, md: '15%' }}
          zIndex={-1}
        >
          <NextImage
            fill
            src={IphoneBlurDesign}
            alt="Fancy Design"
            style={{ objectFit: 'contain' }}
          />
        </Box>
        <Box mt={{ base: '0', md: '10%' }} textAlign={'center'} w={'full'}>
          <Heading as="h1" st="partners-page.hero.image.heading" />
          <HStack py={4} w={'full'} justifyContent={'center'}>
            <Text st="partners-page.hero.image.subheading" />
            <ArrowDownIcon
              height="20"
              width="20"
              stroke={theme.colors.primary}
            />
          </HStack>
          <ScheduleButton />
        </Box>
        <Box mt={{ base: '25%', md: '15%' }} textAlign="center">
          <Heading as="h2" st="partners-page.partner.program" />
          <Center>
            <Box w={{ base: '90%', md: '60ch' }} mb="20" mt="10">
              <AccelerateIcon w="90%" />
            </Box>
          </Center>
          <Text
            fontSize="lg"
            fontWeight="medium"
            st="partners-page.danish.travel.company"
          />

          <Text fontSize="sm" mt="2" st="partners-page.for.us.travel.is.to" />

          <Link
            isExternal
            href="https://calendly.com/trypcom-partner-scouts/20min"
          >
            <Button primary size="lg" w="20rem" mt="10" id="get-started-button">
              <Text notag st="partners-page.schedule.a.meeting" />
            </Button>
          </Link>
        </Box>
        <Box textAlign="center" mt="20">
          <Heading as="h2" st="partners-page.program.benefits" />
        </Box>
        <Stack
          mt={{ base: 10, md: 10 }}
          spacing={{ base: '10', xl: '32' }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack
            align={'center'}
            direction={'column'}
            w="full"
            textAlign={'center'}
          >
            <Center
              mb="4"
              bg="_black"
              p={3}
              borderRadius={'lg'}
              transform={{ base: 'scale(.8)', md: 'scale(1)' }}
            >
              <IncomeIcon />
            </Center>
            <Text
              fontSize="xl"
              fontWeight="medium"
              st="partners-page.generate.income.heading"
            />
            <Text
              mt="2"
              mx="auto"
              color="_darkgray"
              maxW={{ base: '90%', md: 'full' }}
              st="partners-page.generate.income.description"
            />
          </Stack>
          <Stack
            align={'center'}
            direction={'column'}
            w="full"
            textAlign={'center'}
          >
            <Center
              mb="4"
              bg="_black"
              p={3}
              borderRadius={'lg'}
              transform={{ base: 'scale(.8)', md: 'scale(1)' }}
            >
              <TagIcon />
            </Center>
            <Text
              fontSize="xl"
              fontWeight="medium"
              st="partners-page.travel.for.free.heading"
            />
            <Text
              mt="2"
              mx="auto"
              color="_darkgray"
              maxW={{ base: '90%', md: 'full' }}
              st="partners-page.travel.for.free.description"
            />
          </Stack>
          <Stack
            align={'center'}
            direction={'column'}
            w="full"
            textAlign={'center'}
          >
            <Center
              mb="4"
              bg="_black"
              p={3}
              borderRadius={'lg'}
              transform={{ base: 'scale(.8)', md: 'scale(1)' }}
            >
              <CupIcon />
            </Center>
            <Text
              fontSize="xl"
              fontWeight="medium"
              st="partners-page.grow.your.channel.heading"
            />
            <Text
              mt="2"
              mx="auto"
              color="_darkgray"
              maxW={{ base: '90%', md: 'full' }}
              st="partners-page.grow.your.channel.description"
            />
          </Stack>
        </Stack>

        <Box textAlign="center" mt="20">
          <Heading as="h2" st="partners-page.portfolio.overview" />
        </Box>
        <Stack
          mt={{ base: 10, md: 10 }}
          spacing={{ base: '5', xl: '5' }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Box
            border="1px solid"
            borderColor="_lightgray"
            borderRadius="lg"
            p="5"
            w="full"
          >
            <AnimateCounter
              to={18}
              as="b"
              suffix="M+"
              fontSize="4xl"
              roundBy={10}
            />
            <Text st="partners-page.2m.subheading" />
            <Text color="_darkgray" mt="6" st="partners-page.info.date" />
          </Box>
          <Box
            border="1px solid"
            borderColor="_lightgray"
            borderRadius="lg"
            p="5"
            w="full"
          >
            <AnimateCounter as="b" to={110} suffix="+" fontSize="4xl" />
            <Text st="partners-page.110.subheading" />
            <Text color="_darkgray" mt="6" st="partners-page.info.date" />
          </Box>
          <Box
            border="1px solid"
            borderColor="_lightgray"
            borderRadius="lg"
            p="5"
            w="full"
          >
            <AnimateCounter as="b" to={7000} suffix="+" fontSize="4xl" />
            <Text st="partners-page.6000.subheading" />
            <Text color="_darkgray" mt="6" st="partners-page.info.date" />
          </Box>
        </Stack>
        <Stack
          mt="5"
          spacing={{ base: '5', xl: '5' }}
          direction={{ base: 'column', md: 'row' }}
          mb="12"
        >
          <Box
            border="1px solid"
            borderColor="_lightgray"
            borderRadius="lg"
            p="5"
            w="full"
          >
            <AnimateCounter
              as="b"
              to={3}
              fontSize="4xl"
              suffix="M+"
              roundBy={10}
            />
            <Text st="partners-page.3m.subheading" />
            <Text color="_darkgray" mt="6" st="partners-page.info.date" />
          </Box>
          <Box
            border="1px solid"
            borderColor="_lightgray"
            borderRadius="lg"
            p="5"
            w="full"
          >
            <AnimateCounter
              to={1.5}
              fontSize="4xl"
              as="b"
              suffix="M+"
              roundBy={10}
            />
            <Text st="partners-page.150k.subheading" />
            <Text color="_darkgray" mt="6" st="partners-page.info.date" />
          </Box>
          <Box
            border="1px solid"
            borderColor="_lightgray"
            borderRadius="lg"
            p="5"
            w="full"
          >
            <AnimateCounter
              fontSize="4xl"
              as="b"
              to={28}
              suffix="M+"
              roundBy={10}
            />
            <Text st="partners-page.28m.subheading" />
            <Text color="_darkgray" mt="6" st="partners-page.info.date" />
          </Box>
        </Stack>
      </Container>

      <Box bg="_gray" py={10} mt={20}>
        <Container>
          <Text
            textAlign={'center'}
            color="_white"
            fontSize={'3xl'}
            st="partners-page.as.seen"
          />
          <Center>
            <Stack
              mt="8"
              spacing={{ base: '10', xl: '0' }}
              direction={{ base: 'column', md: 'row' }}
              align={'center'}
              maxW={{ base: '60%', md: '70%' }}
            >
              <Link isExternal href={PublicoLink}>
                <VStack w={'full'}>
                  <Box transform={{ base: 'scale(.8)', md: 'scale(.9)' }}>
                    <PnetflixIcon />
                  </Box>
                  <Text
                    fontSize={{ base: 'xs', md: 'sm' }}
                    color={'_white'}
                    textAlign={'center'}
                    st="common.p.icon.text"
                  />
                </VStack>
              </Link>

              <Link isExternal href={MaggLink} pl={{ base: 0, md: 50 }}>
                <VStack w={'full'}>
                  <Box transform={{ base: 'scale(.8)', md: 'scale(.9)' }}>
                    <MaggIcon />
                  </Box>
                  <Text
                    fontSize={{ base: 'xs', md: 'sm' }}
                    color={'_white'}
                    textAlign={'center'}
                    st="common.magg.icon.text"
                  />
                </VStack>
              </Link>

              <Link isExternal href={FyensLink}>
                <VStack w={'full'}>
                  <Box transform={{ base: 'scale(.8)', md: 'scale(.9)' }}>
                    <FyensIcon />
                  </Box>
                  <Text
                    fontSize={{ base: 'xs', md: 'sm' }}
                    color={'_white'}
                    textAlign={'center'}
                    st="common.fyens.icon.text"
                  />
                </VStack>
              </Link>
            </Stack>
          </Center>
        </Container>
      </Box>

      <Container>
        <VStack textAlign={'center'} mt={20}>
          <Heading as="h2" st="partners-page.application.process" />

          <Stack spacing={20} pt={{ base: 10, md: 10 }}>
            <VStack>
              <Center
                minW={10}
                minH={10}
                color={'_white'}
                backgroundColor={'primary'}
                borderRadius={'full'}
              >
                1
              </Center>
              <Text
                fontSize={'sm'}
                color={'_darkgray'}
                st="partners-page.screening.interview"
              />
              <Text
                fontSize={'xl'}
                fontWeight={'medium'}
                st="partners-page.interview"
              />
              <Text maxW={'85%'} st="partners-page.interview.info" />
            </VStack>

            <VStack>
              <Center
                minW={10}
                minH={10}
                color={'_white'}
                backgroundColor={'primary'}
                borderRadius={'full'}
              >
                2
              </Center>
              <Text
                fontSize={'sm'}
                color={'_darkgray'}
                st="partners-page.evaluation.selection"
              />
              <Text
                fontSize={'xl'}
                fontWeight={'medium'}
                st="partners-page.admissions.review"
              />
              <Text
                maxW={'85%'}
                pt={5}
                st="partners-page.admissions.review.info"
              />
              <Text
                fontSize={'sm'}
                color={'_darkgray'}
                pt={5}
                st="partners-page.evaluation.selection"
              />
              <Text
                fontSize={'xl'}
                fontWeight={'medium'}
                st="partners-page.acceptance.denial.notification"
              />
              <Text maxW={'85%'} st="partners-page.acceptance.info" />
            </VStack>

            <VStack>
              <Center
                minW={10}
                minH={10}
                color={'_white'}
                backgroundColor={'primary'}
                borderRadius={'full'}
              >
                3
              </Center>
              <Text
                fontSize={'sm'}
                color={'_darkgray'}
                st="partners-page.process.timeline"
              />
              <Text
                fontSize={'xl'}
                fontWeight={'medium'}
                st="partners-page.planning.traveling"
              />
              <Text pt={5} st="partners-page.planning.traveling.info" />
              <Text
                fontSize={'sm'}
                color={'_darkgray'}
                pt={5}
                st="partners-page.process.timeline"
              />
              <Text
                fontSize={'xl'}
                fontWeight={'medium'}
                st="partners-page.generate.income"
              />
              <Text st="partners-page.generate.income.info" />
            </VStack>
          </Stack>
        </VStack>

        <VStack mb={10}>
          <Box textAlign="center" mt="20">
            <Heading as="h2" st="partners-page.our.community" />
            <Text
              color="_darkgray"
              fontStyle="italic"
              st="partners-page.meet.influencers"
            />
          </Box>
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacingX={{ base: 0, md: '20' }}
            spacingY={{ base: 0, md: '5' }}
            w={'full'}
            px={{ base: 5, md: 0 }}
            pt={{ base: 10, md: 10 }}
          >
            <InfluencerCard
              pic={Lucaswithstrangers}
              id={'@Lucaswithstrangers'}
              followers={'2M'}
              profileLink={'https://www.tiktok.com/@lucaswithstrangers?lang=en'}
            />

            <InfluencerCard
              pic={Passaporteportugues}
              id={'@Passaporte_portugues'}
              followers={'17K'}
              profileLink={'https://www.instagram.com/passaporte_portugues/'}
            />

            <InfluencerCard
              pic={Adventuresapiens}
              id={'@Adventuresapiens'}
              followers={'18K'}
              profileLink={'https://www.instagram.com/adventuresapiens/'}
            />

            <InfluencerCard
              pic={Miguellmagalhaes}
              id={'@Miguellmagalhaes'}
              followers={'18K'}
              profileLink={'https://www.tiktok.com/@miguellmagalhaes'}
            />

            <InfluencerCard
              pic={Saraveigaa}
              id={'@Saraveigaa'}
              followers={'18K'}
              profileLink={'https://www.instagram.com/saraveigaa/'}
            />

            <InfluencerCard
              pic={Viajarmaiscommenos}
              id={'@Viajarmaiscommenos'}
              followers={'18K'}
              profileLink={'https://www.instagram.com/viajarmaiscommenos/'}
            />
          </SimpleGrid>
        </VStack>
      </Container>
    </>
  )
}
