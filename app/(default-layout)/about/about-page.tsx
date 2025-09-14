import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import AboutHeader from 'ui/features/about/header'
import AboutNumbers from 'ui/features/about/numbers'
// import FeaturedSection from 'ui/features/about/featured'
import ZigZag from 'ui/features/about/zigzag'
import AboutHistory from 'ui/features/about/history'

const About: NextPage = () => {
  return (
    <Box minH="100vh">
      <AboutHeader />
      {/* <FeaturedSection /> */}
      <ZigZag />
      <AboutNumbers />
      <AboutHistory />
    </Box>
  )
}

export default About
