import { VStack, Box } from '@chakra-ui/react'
import NotificationWrapper from './notification-wrapper'
import { useNotification } from 'src/contexts/notification'
import { AnimatePresence } from 'framer-motion'
import React, { memo } from 'react'
import { useNotificationEffects } from './useNotificationEffects'

export default memo(function Notifications({ ...rest }) {
  const { notifications, setIsPaused } = useNotification()
  useNotificationEffects()

  return (
    <VStack position="fixed" bottom="4" right="4" zIndex="popover" {...rest}>
      <AnimatePresence>
        {notifications?.map((notification) => {
          return (
            <Box
              key={notification.id}
              onMouseEnter={() => setIsPaused(notification.id)}
              onMouseLeave={() => setIsPaused(undefined)}
            >
              <NotificationWrapper notification={notification} />
            </Box>
          )
        })}
      </AnimatePresence>
    </VStack>
  )
})
