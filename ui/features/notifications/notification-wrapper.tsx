import { NotificationType } from './notification.type'
import React, { memo } from 'react'
import { MotionBox } from 'ui/primitives/Motion'

type NotificationProps = {
  notification: NotificationType
}
export default memo(function NotificationWrapper({
  notification,
}: NotificationProps) {
  const NotificationComponent = React.lazy(
    () => import(`./notifications/${notification.type}`)
  )

  return (
    <React.Suspense>
      <MotionBox
        key={notification.id}
        initial={{ opacity: 1, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        transition={{ duration: '0.1' }}
        borderRadius="lg"
        boxShadow="md"
        bg="_white"
      >
        <NotificationComponent notification={notification} />
      </MotionBox>
    </React.Suspense>
  )
})
