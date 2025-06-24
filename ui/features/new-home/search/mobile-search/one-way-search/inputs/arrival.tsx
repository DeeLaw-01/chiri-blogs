import Tag from 'ui/primitives/Tag'
import { useSearchModalsAtoms } from '../../../hooks/useSearchModals'
import BaseInputBox from '../../trip-search/inputs/base-input-box'
import PillSearchIcon from '@/icons/new-homepage/pill-search.svg'
import { Wrap } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import { useSearchAtoms } from '../../../hooks/useSearchAtoms/useSearchAtoms'

export default function ArrivalInput() {
  const { setShowArrival } = useSearchModalsAtoms()
  const { onewaySearch } = useSearchAtoms()

  return (
    <BaseInputBox
      icon={PillSearchIcon}
      label="home-page.arrival.view.mobile.heading"
      onClick={() => setShowArrival(true)}
    >
      <Wrap>
        {onewaySearch?.includeLocations?.map((loc) => (
          <Tag primary key={loc.locode}>
            {loc.value}
          </Tag>
        ))}
        {!onewaySearch?.includeLocations?.length && (
          <Text st="home-page.region.anywhere" />
        )}
        {!!onewaySearch?.includeLocations?.length && (
          <Text
            color="_gray"
            fontSize="xs"
            lineHeight="2"
            st="common.general.add.more"
          />
        )}
      </Wrap>
    </BaseInputBox>
  )
}
