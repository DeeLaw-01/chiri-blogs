'use client'

import { Box, Center, HStack, Spinner, VStack } from '@chakra-ui/react'

import { useState } from 'react'
import Heading from 'ui/primitives/Heading'
import Badge from 'ui/primitives/Badge'
import Text from 'ui/primitives/Text'

import BadgeSection from 'ui/features/gamification/badge-section'
import UserProgressReport from 'ui/features/gamification/user-progress-report'

import {
  AllBadges,
  GamificationData,
} from 'ui/features/gamification/gamification.types'

import { useSignedFetch } from 'src/api/useSignedFetch'
import getUserProfileGamificationDataQuery from 'src/api/queries/get/gamfication/getUserProfileGamficationDataQuery'
import getUserProfileGamficationBadgesQuery from 'src/api/queries/get/gamfication/getUserProfileGamficationBadgesQuery'

export default function Rewards() {
  const { data: gamificationData, isLoading: gamificationDataLoading } =
    useSignedFetch<GamificationData>(getUserProfileGamificationDataQuery())

  const { data } = useSignedFetch(getUserProfileGamficationBadgesQuery(), {
    onSuccess: (data) => {
      callbackGamificationBadges(data)
    },
    onError: () => {
      callbackGamificationBadgesError()
    },
  })
  const [allBadges, setAllBadges] = useState<AllBadges>(null)
  const [allBadgesLoading, setAllBadgesLoading] = useState<boolean>(null)

  const callbackGamificationBadges = (data) => {
    let transformedData = {} as AllBadges

    data.forEach((item) => {
      let key = item[2]
      let badge = {
        id: item[0],
        type: item[1],
        title: item[3],
        description: item[4],
      }

      if (transformedData[key]) {
        transformedData[key].push(badge)
      } else {
        transformedData[key] = [badge]
      }
    })

    setAllBadges(transformedData)
    setAllBadgesLoading(false)
  }

  const callbackGamificationBadgesError = () => {
    setAllBadgesLoading(false)
  }

  const totalBadges = () => {
    if (!allBadges) return 0

    let total = 0
    Object.keys(allBadges).forEach((key) => {
      total += allBadges[key].length
    })

    return total
  }

  return gamificationDataLoading || allBadgesLoading ? (
    <Center mt="10vh">
      <Spinner size="xl" color="primary" />
    </Center>
  ) : (
    <VStack spacing={8} alignItems={'flex-start'} p={{ base: 0, md: 5 }}>
      <Box w="full">
        {gamificationData && !gamificationDataLoading && (
          <UserProgressReport
            gamificationData={gamificationData}
            progress={(gamificationData.badges.length / totalBadges()) * 100}
          />
        )}

        <HStack mt="7" spacing={3}>
          <Heading
            as="h2"
            fontWeight="normal"
            st="rewards-page.badges.heading"
          />

          <Badge bg="_lightestgray">
            <Text color="_darkgray" as={'span'}>
              {gamificationData?.badges.length}/{totalBadges()}{' '}
            </Text>
            <Text st="common.complete" as={'span'} />
          </Badge>
        </HStack>

        {allBadges &&
          Object.keys(allBadges).map((key) => (
            <BadgeSection
              key={key}
              category={key}
              data={allBadges[key]}
              gamificationData={gamificationData}
            />
          ))}
      </Box>
    </VStack>
  )
}
