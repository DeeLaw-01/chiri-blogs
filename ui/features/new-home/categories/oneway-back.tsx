import useSearch from '../search/hooks/useSearch'
import { useOnewayAtoms } from '../content/oneway/useOnewayAtoms'
import { useSearchAtoms } from '../search/hooks/useSearchAtoms/useSearchAtoms'
import { mapOnewaySearch } from 'ui/features/new-home/utils/search/mappers/oneway-search/mapOnewaySearch'
import CircleIconWrapper from 'ui/shared/circle-icon-wrapper'
import theme from 'src/styles/theme'
import LeftIcon from '@/icons/shared/left-icon.svg'
import { OnewayResponseType } from 'src/api/queries/ws/onewayWs/oneway.type'

export default function OnewayBackButton() {
  const { searchType } = useOnewayAtoms()
  const { makeSearch } = useSearch()
  const { setOnewaySearch, onewayFilters } = useSearchAtoms()

  if (searchType !== OnewayResponseType.ONEWAY) return <></>

  return (
    <>
      <CircleIconWrapper
        bg="_white"
        onClick={() => {
          setOnewaySearch((prev) => {
            delete prev?.includeLocations
            const query = {
              ...prev,
              ...onewayFilters,
            }
            makeSearch(mapOnewaySearch(query))
            return query
          })
        }}
      >
        <LeftIcon width="18" height="18" stroke={theme.colors._darkgray} />
      </CircleIconWrapper>
    </>
  )
}
