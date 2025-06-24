import { Box, HStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import ChatIcon from '@/icons/support-button/chat-bubble.svg'
import { MotionBox } from 'ui/primitives/Motion'
import useChatBot from 'src/hooks/useChatBot'
import Card from 'ui/primitives/Card'
import Button from 'ui/primitives/Button'

export default function SupportCard() {
  const { showAndOpen } = useChatBot()
  return (
    <Card
      p={5}
      onClick={() => showAndOpen()}
      role="group"
      _hover={{
        cursor: 'pointer',
        boxShadow: 'rgba(0, 0, 0, 0.18) 0px 1px 9px',
      }}
    >
      <HStack gap={2} justify="space-between">
        <HStack position="relative">
          <Box minW="45px" position="relative">
            <ChatIcon height="50" width="50px" />
            <Box position="absolute" top="35px" left="30px">
              <HStack
                w="25px"
                h="25px"
                justifyContent="space-around"
                alignItems="center"
                textAlign="center"
              >
                <MotionBox
                  borderRadius="full"
                  border="0.5px solid"
                  borderColor="green.100"
                  animate={{ padding: ['1px', '3px'] }}
                  transition={{
                    duration: 1.5,
                    ease: 'easeIn',
                    repeat: Infinity,
                    repeatType: 'loop',
                  }}
                >
                  <Box
                    borderRadius="full"
                    border="3px solid"
                    borderColor="green.200"
                  ></Box>
                </MotionBox>
              </HStack>
            </Box>
          </Box>

          <Box maxW={'sm'} pl="2">
            <Text
              fontSize={{ sm: 'md', md: 'lg' }}
              fontWeight="medium"
              st="new-trip-page:faqs.support.title"
            />
            <Text secondary st="new-trip-page:faqs.support.description" />
          </Box>
        </HStack>

        <Button id="support" asLink arrow fontSize="3xl" />
      </HStack>
    </Card>
  )
}
