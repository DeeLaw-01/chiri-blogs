import { Box, BoxProps, HStack } from '@chakra-ui/react'
import theme from 'src/styles/theme'

interface BaseCardProps extends BoxProps {
  icon: JSX.Element
  children?: React.ReactNode
}

const BaseCard = ({ icon, children, ...rest }: BaseCardProps) => {
  return (
    <Box
      m={2}
      p="0"
      borderRadius={'full'}
      overflow="hidden"
      fontSize="xs"
      boxShadow={'md'}
      w={{ md: 'full' }}
      maxW={{ md: '170' }}
      bgGradient={theme.gradients.primary}
      color={'_white'}
      {...rest}
    >
      <HStack pl="2" alignItems={'center'} minH={'30px'}>
        <Box>{icon}</Box>
        <Box maxW="150px">{children}</Box>
      </HStack>
    </Box>
  )
}

export default BaseCard
