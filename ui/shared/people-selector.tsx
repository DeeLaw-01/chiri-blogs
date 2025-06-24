import { VStack, Divider, Flex, Spacer } from '@chakra-ui/react'

import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import { useEffect, useState } from 'react'
import { useResponsiveSizes } from 'src/contexts/responsive'
import Incrementer from './incrementer'

export default function PeopleSelector(nextProps: {
  adults: number
  children: number
  babies: number
  setNoOfAdults: (num: number) => void
  setNoOfChildren: (num: number) => void
  setNoOfBabies: (num: number) => void
  totalPeople: number
  setTotalPeople: (total: number) => void
  submitPeopleSelector?: () => void
  callbackError?: boolean
}): JSX.Element {
  const [submitLoading, setSubmitLoading] = useState<boolean>(false)
  const [touched, setTouched] = useState<boolean>(false)
  const { isMobile } = useResponsiveSizes()

  useEffect(() => {
    // keep the range inbound
    if (nextProps.adults < 0 || nextProps.adults > 9) {
      nextProps.setNoOfAdults(1)
    }
    if (nextProps.children < 0 || nextProps.children > 9) {
      nextProps.setNoOfChildren(0)
    }
    if (nextProps.babies < 0 || nextProps.babies > 9) {
      nextProps.setNoOfBabies(0)
    }

    // update the total state
    setTotalPeopleState()
  }, [nextProps.adults, nextProps.children, nextProps.babies])

  const setTotalPeopleState = () => {
    nextProps.setTotalPeople(
      nextProps.adults + nextProps.children + nextProps.babies
    )
  }

  const decrement = (num: number, type: string): number => {
    nextProps.submitPeopleSelector && setTouched(true)

    if (type === 'n_adults' && num === 1) return 1
    if (num === 0) return 0

    const decrementedNum = (num -= 1)

    return decrementedNum
  }

  const increment = (num: number, type: string): number => {
    num = parseInt(num)
    nextProps.submitPeopleSelector && setTouched(true)

    if (nextProps.totalPeople >= 9) return num

    const incrementedNum = parseInt((num += 1))

    return incrementedNum
  }

  const handleCallback = (
    num: number,
    type: string,
    increase: boolean
  ): number => {
    if (increase) {
      return increment(num, type)
    } else {
      return decrement(num, type)
    }
  }

  const handleClear = () => {
    nextProps.setNoOfAdults(1)
    nextProps.setNoOfChildren(0)
    nextProps.setNoOfBabies(0)

    setTouched(true)
  }

  return (
    <VStack spacing={4}>
      {/* ADULTS */}
      <Flex w="full">
        <Text color="_black" fontSize="lg" st="common.adults" />
        <Spacer />

        <Incrementer
          defaultValue={nextProps.adults}
          callback={(newCount) =>
            nextProps.setNoOfAdults(
              handleCallback(
                nextProps.adults,
                'n_adults',
                newCount > nextProps.adults
              )
            )
          }
          max={9}
          min={1}
          isDisabled={nextProps.totalPeople >= 9}
        />
      </Flex>

      <Divider />

      {/* CHILDREN */}
      <Flex w="full">
        <Flex direction="column" alignItems={'self-start'}>
          <Text color="_black" fontSize="lg" st="common.children" />
          <Text fontSize="xs" color="_gray" st="common.children.ages" />
        </Flex>
        <Spacer />

        <Incrementer
          defaultValue={nextProps.children}
          callback={(newCount) =>
            nextProps.setNoOfChildren(
              handleCallback(
                nextProps.children,
                'n_children',
                newCount > nextProps.children
              )
            )
          }
          max={9}
          min={0}
          isDisabled={nextProps.totalPeople >= 9}
        />
      </Flex>

      <Divider />

      {/* INFANTS */}
      <Flex w="full">
        <Flex direction="column" alignItems={'self-start'}>
          <Text color="_black" fontSize="lg" st="common.infants" />
          <Text fontSize="xs" color="_gray" st="common.infants.ages" />
        </Flex>
        <Spacer />
        <Incrementer
          defaultValue={nextProps.babies}
          callback={(newCount) =>
            nextProps.setNoOfBabies(
              handleCallback(
                nextProps.babies,
                'n_babies',
                newCount > nextProps.babies
              )
            )
          }
          max={9}
          min={0}
          isDisabled={nextProps.totalPeople >= 9}
        />
      </Flex>

      {/* SUBMIT BUTTON */}
      {nextProps.submitPeopleSelector && (
        <>
          <Divider />

          <Flex
            w="100%"
            justifyContent="space-between"
            position={isMobile && 'fixed'}
            bottom={isMobile && 25}
            px={isMobile && 5}
          >
            <Button
              id="clear-travelers-button"
              asLink
              color="_darkgray"
              onClick={() => handleClear()}
            >
              <Text notag st="common.general.clear" />
            </Button>
            <Button
              id="save-travelers-button"
              primary
              w="5rem"
              isDisabled={!touched}
              isLoading={submitLoading && !nextProps.callbackError}
              onClick={() => {
                setSubmitLoading(true)
                setTotalPeopleState()
                nextProps.submitPeopleSelector()
              }}
            >
              <Text notag st="common.general.save" />
            </Button>
          </Flex>
        </>
      )}
    </VStack>
  )
}
