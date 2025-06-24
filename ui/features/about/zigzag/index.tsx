import { Box } from '@chakra-ui/react'
import ThirdSection from './sections/third'
import FirstSection from './sections/first'
import SecondSection from './sections/second'

export default function ZigZag() {
  return (
    <Box mt={{ base: 4, md: 16 }} fontSize={{ base: 'sm', md: 'md' }}>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </Box>
  )
}
