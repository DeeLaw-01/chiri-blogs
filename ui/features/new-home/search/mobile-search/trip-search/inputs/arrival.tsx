import Tag from 'ui/primitives/Tag'
import { useSearchModalsAtoms } from '../../../hooks/useSearchModals'
import BaseInputBox from './base-input-box'
import PillSearchIcon from '@/icons/new-homepage/pill-search.svg'
import { Wrap } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import { useSearchAtoms } from '../../../hooks/useSearchAtoms/useSearchAtoms'

export default function ArrivalInput() {
  const { setShowArrival } = useSearchModalsAtoms()
  const { tripSearch } = useSearchAtoms()

  return (
    <BaseInputBox
      icon={PillSearchIcon}
      label="home-page.arrival.view.mobile.heading"
      onClick={() => setShowArrival(true)}
    >
      <Wrap>
        {tripSearch?.includeLocations?.map((loc) => (
          <Tag primary key={loc.locode}>
            {loc.value}
          </Tag>
        ))}
        {!tripSearch?.includeLocations?.length && (
          <Text st="home-page.region.anywhere" />
        )}
        {!!tripSearch?.includeLocations?.length && (
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
