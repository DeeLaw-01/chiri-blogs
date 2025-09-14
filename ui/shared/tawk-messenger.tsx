'use client'

import TawkMessengerReact from '@tawk.to/tawk-messenger-react'

interface TawkMessengerProps {
  propertyId?: string
  widgetId?: string
}

export default function TawkMessenger({
  propertyId,
  widgetId,
}: TawkMessengerProps) {
  // Only render if both IDs are available
  if (!propertyId || !widgetId) {
    return null
  }

  return (
    <div className="z-[999]">
      <TawkMessengerReact propertyId={propertyId} widgetId={widgetId} />
    </div>
  )
}
