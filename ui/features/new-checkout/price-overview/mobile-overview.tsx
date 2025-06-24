import { Box, HStack, useDisclosure, Divider } from '@chakra-ui/react'
import TotalPrice from './total-price'
import ChevronUp from '@/icons/new/arrow/chevron-up.svg'
import PriceDetails from './price-details'
import { AnimatePresence } from 'framer-motion'
import { MotionBox } from 'ui/primitives/Motion'
// import PromocodeInput from '../content/promocode-input'
// import CoinsBanner from './coins-banner'

export default function MobilePriceOverview() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <MotionBox
            pos="fixed"
            zIndex={999}
            inset={0}
            bg="blackAlpha.500"
            onClick={onToggle}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <MotionBox
            pos="fixed"
            bottom="3.5rem"
            left="0"
            w="full"
            bg="white"
            boxShadow="md"
            borderTop="1px solid"
            borderColor="_lightgray"
            zIndex={1000}
            p={5}
            borderTopRadius="3xl"
            initial={{ y: '100%' }}
            animate={{ y: '0' }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <PriceDetails />
            {/* 
            <CoinsBanner /> */}
            <Divider my="3" w="85%" ml="7%" />
            {/* <PromocodeInput /> */}
          </MotionBox>
        )}
      </AnimatePresence>

      <Box
        pos="fixed"
        bottom="0"
        left="0"
        bg="_white"
        w="full"
        h="3.5rem"
        borderTop="1px solid"
        borderColor="_lightgray"
        zIndex={1001}
        py="2"
        px={5}
        onClick={onToggle}
        cursor="pointer"
      >
        <HStack justify="space-between">
          <TotalPrice />
          <Box
            w="1rem"
            transform={`rotate(${isOpen ? '180deg' : '0deg'})`}
            transition="transform 0.3s"
          >
            <ChevronUp />
          </Box>
        </HStack>
      </Box>
    </>
  )
}
