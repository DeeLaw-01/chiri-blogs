// import { TripDetails } from 'src/shared-types/trip-details.type'
import { isProduction } from '../../src/data/environments'
import { Contact } from 'ui/features/new-checkout/checkout.type'

type EecPurchaseData = {
  bid: string | null
  currency: string | null
  price: number | null
}

const EecPurchaseDataLayer = (data: EecPurchaseData): void => {
  if (window.dataLayer === undefined) return

  const contact = sessionStorage.getItem('contact')
  const contactDetails = contact ? (JSON.parse(contact) as Contact) : null

  // const passengers = sessionStorage.getItem('passenger')
  // const passengerDetails = passengers
  //   ? (JSON.parse(passengers) as Passenger[])
  //   : null

  // localStorage.setItem('user_email', contactDetails?.email ?? '')
  // localStorage.setItem('user_phone', passengerDetails?.[0]?.phone ?? '')
  // localStorage.setItem(
  //   'user_first_name',
  //   passengerDetails?.[0]?.firstname ?? ''
  // )
  // localStorage.setItem('user_last_name', passengerDetails?.[0]?.surname ?? '')
  // localStorage.setItem('user_birthday', passengerDetails?.[0]?.birthday ?? '')
  // localStorage.setItem('user_gender', passengerDetails?.[0]?.gender ?? '')
  // localStorage.setItem('user_country', passengerDetails?.[0]?.nationality ?? '')

  // event fired when totalPrice is not undefined
  window.dataLayer?.push({
    event: isProduction ? 'eec_purchase' : 'test_purchase',
    ecommerce: {
      currencyCode: data?.currency,
      purchase: {
        actionField: {
          step: 2,
          id: data?.bid,
          revenue: data?.price,
        },
        customer: {
          // first_name: passengerDetails?.[0].firstname,
          // last_name: passengerDetails?.[0].surname,
          // phone: passengerDetails?.[0].phone,
          // city: passengerDetails?.[0].firstname,
          // email: contactDetails?.email,
          // birthday: passengerDetails?.[0].birthday,
          // gender: passengerDetails?.[0].gender,
          // country: passengerDetails?.[0].nationality,
        },
        products: [
          {
            name: 'Trip', //trip?.title,
            // id: trip?.id,
            // price: trip?.price,
            // category: trip?.tags,
            // package_opt1: trip?.tags?.[0],
            // package_opt2: trip?.tags?.[1],
            // trip_departuredate: trip?.start_date,
            // trip_returndate: trip?.end_date,
            // trip_route: trip.locations.join(','),
            // trip_routenr: trip?.locations?.length,
            // adults_nr: trip?.passengers.n_adults,
            // children_nr: trip?.passengers.n_children,
            // babies_nr: trip?.passengers.n_babies,
            // travellers_nr: trip.passengers.total_passengers,
          },
        ],
      },
    },
  })
}
export { EecPurchaseDataLayer }
