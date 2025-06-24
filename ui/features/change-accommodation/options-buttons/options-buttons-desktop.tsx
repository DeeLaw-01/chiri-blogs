import SortItem from '../options/sort/sort-item'
import GridToggle from '../options/sort/grid-toggle'
import MapToggle from '../options/sort/map-toggle'
import { sortOptionsArray } from '../options/sort/sort-data'

export default function OptionsButtonsDesktop() {
  return (
    <>
      {sortOptionsArray.map((option) => (
        <SortItem type={option} key={option} />
      ))}
      <MapToggle />
      <GridToggle />
    </>
  )
}
