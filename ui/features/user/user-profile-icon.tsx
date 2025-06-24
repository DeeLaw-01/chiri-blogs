import { Flex, FlexProps, Box } from '@chakra-ui/react'
import React from 'react'
import Text from 'ui/primitives/Text'

interface UserProfileIconProps extends FlexProps {
  attributes: any
  color?: string
}

const UserProfileIcon: React.FC<UserProfileIconProps> = ({
  attributes,
  color,
  ...rest
}) => {
  if (!attributes) return null
  return (
    <Box bg="secondary" p={1} borderRadius={'full'} shadow={'sm'} as="span">
      <Flex
        borderRadius={'full'}
        bg="white"
        alignItems={'center'}
        justifyContent={'center'}
        as="span"
        {...rest}
      >
        <Text
          color={color}
          verticalAlign={'middle'}
          textTransform={'uppercase'}
          as="span"
        >
          {attributes.initials}
        </Text>
      </Flex>
    </Box>
  )
}

export default UserProfileIcon
