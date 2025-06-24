import {
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react'
import { useState } from 'react'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import Heading from 'ui/primitives/Heading'
import useTranslation from 'src/hooks/useTranslation'
import { useRouter } from 'src/i18n/router'

export default function BookingDetailsForm() {
  const { t } = useTranslation()
  const [bookingNumber, setBookingNumber] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()

  const handleSubmit = async () => {
    setIsLoading(true)
    router.push(`/manage-booking?email=${email}&bid=${bookingNumber}`)
  }

  return (
    <>
      <VStack spacing="4">
        <Heading
          textAlign="center"
          as="h2"
          st="new-manage-booking-page.enter.your.booking.id"
        />
        <Text
          color="_darkgray"
          textAlign="center"
          st="new-manage-booking-page.you.can.find.this"
        />
      </VStack>
      <Stack mt="8" spacing="6" direction={{ base: 'column', md: 'row' }}>
        <FormControl id="tryp-booking-number" isRequired>
          <FormLabel display={'flex'}>
            <Text st="common.booking.id" />
          </FormLabel>
          <Input
            type="text"
            placeholder={t('new-manage-booking-page.booking.id.placeholder')}
            value={bookingNumber}
            onChange={(e) => setBookingNumber(e.target.value)}
          />
        </FormControl>
        <FormControl id="contact-last-name" isRequired>
          <FormLabel display={'flex'}>
            <Text st="common.email" />
          </FormLabel>
          <Input
            type="email"
            placeholder={t('common.email.placeholder')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
      </Stack>
      <HStack mt="4" justify="flex-end">
        <Button
          id="submit-manage-booking"
          primary
          onClick={() => handleSubmit()}
          isLoading={isLoading}
          w={{ base: 'full', md: 'auto' }}
        >
          <Text notag st="common.general.continue" />
        </Button>
      </HStack>
    </>
  )
}
