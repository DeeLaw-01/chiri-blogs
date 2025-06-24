import useTranslation from 'src/hooks/useTranslation'
import useMarketPlaceAtoms from './atoms/useMarketPlaceAtoms'
import { MotionBox } from 'ui/primitives/Motion'
import { Box, Divider, HStack, IconButton, VStack } from '@chakra-ui/react'
import CountryFlag from 'ui/shared/country-flag'
import DeleteIcon from '@/icons/profile/delete-icon.svg'
import Text from 'ui/primitives/Text'
import theme from 'src/styles/theme'

export default function CartCard({
  uuid,
  type,
  title,
  location,
  country,
  image,
  price,
  isUnavailable,
  priceChange,
  displayOnly,
}) {
  const { t } = useTranslation()
  const { setCartItems } = useMarketPlaceAtoms()

  const showRedBox = isUnavailable || priceChange.status

  const deleteItemFromCart = () => {
    setCartItems((items) => {
      return items.filter((item) => item.uuid !== uuid)
    })
  }

  return (
    <MotionBox
      w="full"
      layout
      p={showRedBox && 4}
      bg={showRedBox && '_lightred'}
      borderRadius={showRedBox && '2xl'}
      animate={{
        x: 0,
        opacity: 1,
      }}
      exit={{ x: -20, opacity: 0 }}
    >
      <Text
        mb="2"
        color="_red"
        fontWeight="medium"
        display={showRedBox ? 'block' : 'none'}
      >
        {isUnavailable
          ? t('manage-booking-page.checkout.item.not.available')
          : priceChange.status &&
            t('manage-booking-page.checkout.item.price.changed', {
              beforePrice: priceChange.before_price,
              afterPrice: priceChange.after_price,
            })}
      </Text>

      <Box
        w="full"
        bg="_white"
        mt={!showRedBox && 4}
        px={showRedBox && 3}
        py={showRedBox && 2}
        borderRadius={showRedBox && '3xl'}
      >
        <HStack spacing={4}>
          <Box h="8rem" minW="8rem" pos="relative">
            {image}
          </Box>

          <VStack w="full" align="flex-start">
            <Box>
              <HStack>
                <Text color="_darkgray">{type}</Text>
                {location && (
                  <HStack
                    px="3"
                    py="1"
                    border="1px solid"
                    borderColor="_lightgray"
                    borderRadius="full"
                  >
                    <CountryFlag country={country} />
                    <Text fontSize="sm">{location}</Text>
                  </HStack>
                )}
              </HStack>
              <Text fontWeight="medium">{title}</Text>
            </Box>

            {price}

            {!displayOnly && (
              <IconButton
                aria-label="Delete"
                borderRadius="full"
                bg="_lightred"
                _hover={{ boxShadow: 'md' }}
                onClick={deleteItemFromCart}
                icon={
                  <Box>
                    <DeleteIcon
                      width="24"
                      height="24"
                      strokeWidth={1.5}
                      stroke={theme.colors._red}
                    />
                  </Box>
                }
              />
            )}
          </VStack>
        </HStack>

        {!showRedBox && !displayOnly && <Divider mt="6" w="full" />}
      </Box>
    </MotionBox>
  )
}
