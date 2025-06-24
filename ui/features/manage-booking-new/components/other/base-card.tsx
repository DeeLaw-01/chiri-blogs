import { HStack, VStack } from '@chakra-ui/react'
import Card from 'ui/primitives/Card'
import Text from 'ui/primitives/Text'
import Button from 'ui/primitives/Button'
import { AllTranslationKeys } from 'src/shared-types/all-translations-keys'
import { CardProps } from 'ui/primitives/Card/card.type'

type BaseCardProps = {
  title: AllTranslationKeys
  description: AllTranslationKeys
} & Omit<CardProps, 'title'>

export default function BaseCard({
  title,
  description,
  ...rest
}: BaseCardProps) {
  return (
    <Card
      px={4}
      py={6}
      role="group"
      _hover={{
        cursor: 'pointer',
        boxShadow: 'rgba(0, 0, 0, 0.18) 0px 1px 9px',
      }}
      display="flex"
      justify="space-around"
      flex={1}
      {...rest}
    >
      <HStack w="full" justify="space-between">
        <VStack alignItems="flex-start" gap="0.2rem">
          <Text
            color="primary"
            fontSize={{ base: 'md', md: 'md' }}
            st={title}
          />
          <Text
            color="_gray"
            fontSize={{ base: 'sm', md: 'sm' }}
            st={description}
          />
        </VStack>
        <Button
          role="group"
          id="add-luggage"
          alignSelf="center"
          minW="unset"
          asLink
          arrow
          fontSize="2xl"
        />
      </HStack>
    </Card>
  )
}
