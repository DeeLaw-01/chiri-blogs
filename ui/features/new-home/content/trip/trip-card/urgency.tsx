import { theme } from 'src/styles/theme'
import Text from 'ui/primitives/Text'
import BaseCard from 'ui/shared/base-card'

import CrownIcon from '@/icons/crown.svg'
import RankingIcon from '@/icons/ranking.svg'
import ClockIcon from '@/icons/manage-booking/clock.svg'
import PeopleIcon from '@/icons/checkout/people-icon.svg'
import GlassesIcon from '@/icons/glass.svg'

const BestSeller = () => {
  return (
    <BaseCard
      icon={
        <CrownIcon height="17px" width="17px" stroke={theme.colors._white} />
      }
    >
      <Text p={2} pl="0" st="common.urgency.bestseller" />
    </BaseCard>
  )
}

const LimitedSeats = ({ count }: { count: number }) => {
  return (
    <BaseCard
      icon={
        <PeopleIcon height="17px" width="17px" stroke={theme.colors._white} />
      }
    >
      <Text
        p={2}
        pl="0"
        st="common.urgency.limitedseats"
        sd={{ count: count }}
      />
    </BaseCard>
  )
}

const HighDemand = () => {
  return (
    <BaseCard
      icon={
        <RankingIcon height="17px" width="17px" stroke={theme.colors._white} />
      }
    >
      <Text p={2} pl="0" st="common.urgency.highdemand" />
    </BaseCard>
  )
}

const PeopleLooking = ({ count }: { count: number }) => {
  return (
    <BaseCard
      icon={
        <GlassesIcon height="17px" width="17px" stroke={theme.colors._white} />
      }
    >
      <Text
        p={2}
        pl="0"
        color="_purple"
        st="common.urgency.peoplelooking"
        sd={{ count: count }}
      />
    </BaseCard>
  )
}

const PayLessToday = ({ discount }: { discount: number }) => {
  return (
    <BaseCard
      icon={
        <ClockIcon height="17px" width="17px" stroke={theme.colors._white} />
      }
    >
      <Text p={2} pl="0" st="common.urgency.payless" sd={{ count: discount }} />
    </BaseCard>
  )
}

export { BestSeller, LimitedSeats, HighDemand, PeopleLooking, PayLessToday }
