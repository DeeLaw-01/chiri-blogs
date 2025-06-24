import { VStack, HStack, useDisclosure, Box } from '@chakra-ui/react'

import Text from 'ui/primitives/Text'
import Button from 'ui/primitives/Button'
import CountryFlag from 'ui/shared/country-flag'
import dynamic from 'next/dynamic'

import { getBritishDateFromISO } from 'src/utils/dateUtils'
import { renderTrimmedString } from 'src/utils/renderUtils'
import { useResponsiveSizes } from 'src/contexts/responsive'

const DynamicEditTravelerDrawer = dynamic(() => {
  return import('./edit-traveler-drawer')
})

export default function TravelersButton({ passenger }) {
  const { isMobile } = useResponsiveSizes()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button
        p={5}
        w="full"
        h="auto"
        bg="transparent"
        fontWeight="normal"
        onClick={onOpen}
        borderRadius="lg"
        border="1px solid"
        role="group"
        borderColor="_lightgray"
        _hover={{ bg: '_lightestgray' }}
      >
        <VStack align="flex-start" w="full" spacing={4}>
          <HStack w="full" justify="space-between">
            <HStack spacing={4}>
              <Box pt={1} minW={6}>
                <CountryFlag
                  country={passenger.nationality}
                  height={22}
                  width={32}
                />
              </Box>
              <Text>
                {renderTrimmedString(
                  `${passenger.firstname} ${passenger.surname}`,
                  isMobile ? 12 : 40
                )}
              </Text>

              {passenger.birthday && (
                <Text color="_darkgray">
                  {getBritishDateFromISO(passenger.birthday)}
                </Text>
              )}
            </HStack>
            <Text
              color="primary"
              fontSize={'sm'}
              fontWeight="medium"
              onClick={onOpen}
              st="common.general.edit"
              _groupHover={{ textDecoration: 'underline' }}
            ></Text>
          </HStack>
        </VStack>
      </Button>

      <DynamicEditTravelerDrawer
        isOpen={isOpen}
        onClose={onClose}
        passenger={passenger}
      />
    </>
  )
}
