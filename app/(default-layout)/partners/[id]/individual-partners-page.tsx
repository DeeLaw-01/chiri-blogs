'use client'

import { Box, Container, Center, Spinner } from '@chakra-ui/react'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'
import AccelerateIcon from '@/icons/partners/accelerate.svg'
import getPartnerInformationQuery from 'src/api/queries/get/partnerInformationQuery'
import { useState, useEffect } from 'react'
import useCurrency from 'src/hooks/useCurrency'
import useChatBot from 'src/hooks/useChatBot'
import { useFetch } from 'src/api/useFetch'

export default function IndividualPartner({ id }: { id: string }): JSX.Element {
  const [commision, setCommision] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)
  const [sales, setSales] = useState<number>(0)
  const { showAndOpen } = useChatBot()
  const { getConvertedCurrency } = useCurrency()

  const { data, error } = useFetch(getPartnerInformationQuery(id))

  useEffect(() => {
    if (data) {
      setCommision(data.commission)
      setSales(data.sales_count)
      setLoading(false)
    }
    if (error) {
      setLoading(false)
    }
  }, [data, error])

  return (
    <Container mt="8" mb="8">
      <Center>
        <Box w={{ base: '90%', md: '60ch' }} mb="20" mt="10">
          <AccelerateIcon w="90%" />
        </Box>
      </Center>
      <Box
        borderRadius={5}
        border="1px solid"
        borderColor="_lightgray"
        p={5}
        textAlign={'center'}
      >
        {loading && (
          <Center>
            <Spinner />
          </Center>
        )}
        {!loading && !error && (
          <>
            <Text fontSize={'xl'}>
              You have <b>{sales}</b> sale(s)!
            </Text>
            <Text fontSize={'normal'}>
              This has generated {getConvertedCurrency(commision)} in total
              revenue
            </Text>
          </>
        )}
        {error && (
          <Text>
            An error has occured. Please try again or contact support.
          </Text>
        )}
      </Box>
      <Center>
        <Button
          my="2"
          size="lg"
          minW="8.5rem"
          primary
          onClick={showAndOpen}
          disabled={loading || error}
          id="claim-funds-button"
        >
          Claim your funds
        </Button>
      </Center>
      <Text color="_gray" fontSize={'xs'}>
        Funds can be claimed when more than 100 euros revenue is accummulated.
        Please invoice us by clicking “Claim your funds” and refer to your
        individual promocode.
      </Text>
    </Container>
  )
}
