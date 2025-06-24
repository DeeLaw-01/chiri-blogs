import { useManageBookingAtoms } from 'ui/features/manage-booking-new/hooks/useManageBookingAtoms'
import TransportCardBookingDesktop from './transport-card-desktop'

import { useMediaQuery } from '@chakra-ui/react'
import TransportCardBookingMobile from './transport-card-mobile'
import { TransportBookingData } from 'ui/features/manage-booking-new/types/itinerary.type'
import isDetailsDisabled from 'ui/features/manage-booking-new/utils/isDetailsDisabled'

type TransportCardBookingProps = {
  transport: TransportBookingData
}

export default function TransportCardBooking({
  transport,
}: TransportCardBookingProps) {
  const { booking, setShowBoardingPass } = useManageBookingAtoms()
  const [minBreakCard] = useMediaQuery('(min-width: 30em)')
  const isDisabled = isDetailsDisabled(booking?.trip.status)

  const handleBoardingPass = () => {
    if (transport.booking_data.boarding_documents_link)
      window.open(transport.booking_data.boarding_documents_link)
    else setShowBoardingPass({ transport: transport })
  }

  return (
    <>
      {!minBreakCard && (
        <TransportCardBookingMobile
          transport={transport}
          onClick={handleBoardingPass}
          isDisabled={isDisabled}
        />
      )}
      {minBreakCard && (
        <TransportCardBookingDesktop
          transport={transport}
          onClick={handleBoardingPass}
          isDisabled={isDisabled}
        />
      )}
    </>
  )
}
