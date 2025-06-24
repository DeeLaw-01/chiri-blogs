import { Box, Spinner, VStack } from '@chakra-ui/react'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'src/i18n/router'
import Button from 'ui/primitives/Button'
import Modal from 'ui/primitives/Modal'
import Text from 'ui/primitives/Text'

export default function PaymentLoadingModal() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('sessionId')
  const [warning, setWarning] = useState<boolean>(false)

  const handleRoute = () => {
    let route = pathname
    if (sessionId) route += `?sessionId=${sessionId}`
    router.push(route)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setWarning(true)
    }, 10000) // 10 sec

    return () => clearTimeout(timer)
  }, [])

  return (
    <Modal
      isOpen={true}
      onClose={() => {}}
      isBgBlured={true}
      addCloseButton={false}
    >
      <VStack w="full" p={3}>
        <Box w="100px" h="100px" p="5">
          <Spinner h="full" w="full" color="_gray" />
        </Box>
        <Text color="_gray" st="common.general.loading" />
      </VStack>
      {warning && (
        <>
          <Text
            color="_gray"
            fontSize={'sm'}
            st="payment.taking.long.message"
          />

          <Button
            my={2}
            w={'full'}
            id="payment-status-loading-reload-button"
            secondary
            onClick={handleRoute}
          >
            <Text st="common.timer.timeout.button" />
          </Button>
        </>
      )}
    </Modal>
  )
}
