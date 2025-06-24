import { StaticImageData } from 'next/image'
import { useRouter } from 'app/router'
import { Box } from '@chakra-ui/react'
import NextImage from 'next/image'
import Text from 'ui/primitives/Text'

type InfluencerCardProps = {
  pic: StaticImageData
  id: string
  followers: string
  profileLink: string
}

const InfluencerCard = ({
  pic,
  id,
  followers,
  profileLink,
}: InfluencerCardProps) => {
  const router = useRouter()
  return (
    <Box
      mb={5}
      cursor={'pointer'}
      onClick={() => router.push(`${profileLink}`)}
    >
      <Box h={'40'} pos={'relative'} borderRadius="md" overflow="hidden">
        <NextImage fill src={pic} alt="Influencer image" />
      </Box>
      <Box
        p="5"
        mt={2}
        h="10rem"
        w="full"
        border="1px solid"
        borderColor="_lightgray"
        borderRadius="lg"
      >
        <Text fontWeight={'medium'}>{id}</Text>
        <Text fontSize="4xl" as="b">
          {`${followers}+`}
        </Text>
        <Text mt="1" st="partners-page.followers" />
      </Box>
    </Box>
  )
}

export default InfluencerCard
