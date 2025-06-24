import { As } from '@chakra-ui/react'
import TicketIcon from '@/icons/new/travel/passport.svg'
import MessagesIcon from '@/icons/new/contact/messages.svg'
import LuggageIcon from '@/icons/new/luggage/cabin-bag.svg'
import UserPenIcon from '@/icons/new/people/user-pen.svg'
import Text from 'ui/primitives/Text'
import Heading from 'ui/primitives/Heading'

export type InfoBoxItem = {
  title: JSX.Element
  description: JSX.Element
  icon: As
}

export const data = [
  {
    title: (
      <Heading
        as="h5"
        st="new-manage-booking-page.unconfirmed.info.boxes.title.one"
      />
    ),
    description: (
      <Text
        color="_gray"
        st="new-manage-booking-page.unconfirmed.info.boxes.description.one"
      />
    ),
    icon: TicketIcon,
  },
  {
    title: (
      <Heading
        as="h5"
        st="new-manage-booking-page.unconfirmed.info.boxes.title.two"
      />
    ),
    description: (
      <Text
        color="_gray"
        st="new-manage-booking-page.unconfirmed.info.boxes.description.two"
      />
    ),
    icon: LuggageIcon,
  },
  {
    title: (
      <Heading
        as="h5"
        st="new-manage-booking-page.unconfirmed.info.boxes.title.three"
      />
    ),
    description: (
      <Text
        color="_gray"
        st="new-manage-booking-page.unconfirmed.info.boxes.description.three"
      />
    ),
    icon: MessagesIcon,
  },
  {
    title: (
      <Heading
        as="h5"
        st="new-manage-booking-page.unconfirmed.info.boxes.title.four"
      />
    ),
    description: (
      <Text
        color="_gray"
        st="new-manage-booking-page.unconfirmed.info.boxes.description.four"
      />
    ),
    icon: UserPenIcon,
  },
] as InfoBoxItem[]
