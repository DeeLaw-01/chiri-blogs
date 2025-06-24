import theme from 'src/styles/theme'
import Button from 'ui/primitives/Button'
import ArrowDownIcon from 'ui/icons/navbar/arrow-down.svg'
import Text from 'ui/primitives/Text'
import { renderTrimmedString } from 'src/utils/renderUtils'
import { Box, Skeleton, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { useAccommodationDetailsAtoms } from './useAccommodationDetailsAtoms'

const TRIM_DEFAULT_LENGTH = 380

export default function PropertyDescription() {
  const { isRoomsDataLoading, roomsData } = useAccommodationDetailsAtoms()
  const [viewMoreExpanded, setViewMoreExpanded] = useState<boolean>(false)

  if (isRoomsDataLoading || !roomsData)
    return (
      <VStack w="full" spacing={2} alignItems="flex-start">
        <Skeleton w="full" h="1rem" endColor="gray.300" />
        <Skeleton w="full" h="1rem" endColor="gray.300" />
        <Skeleton w="full" h="1rem" endColor="gray.300" />
        <Skeleton w="50%" h="1rem" endColor="gray.300" />
      </VStack>
    )

  const description = roomsData?.hotel_description
  return (
    <Box>
      <Text fontSize={'sm'}>
        {viewMoreExpanded
          ? description
          : renderTrimmedString(description, TRIM_DEFAULT_LENGTH, false)}
      </Text>

      {description.length > TRIM_DEFAULT_LENGTH && (
        <Button
          id="view-full-hotel-description"
          asLink
          fontWeight="normal"
          mt="2"
          fontSize="sm"
          onClick={() => setViewMoreExpanded(!viewMoreExpanded)}
          rightIcon={
            <Box transform={viewMoreExpanded ? 'rotate(180deg)' : 'initial'}>
              <ArrowDownIcon
                stroke={theme.colors.primary}
                width="10px"
                height="10px"
                transform="rotate(180deg)"
              />
            </Box>
          }
        >
          <Text
            st={viewMoreExpanded ? 'common.view.less' : 'common.view.more'}
          />
        </Button>
      )}
    </Box>
  )
}
