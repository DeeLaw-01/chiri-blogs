import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { PackageDetails } from 'src/shared-types/package-details.type'
import { SortTripType } from '../../search/hooks/useSearchAtoms/types'

let priceAsc = true,
  priceDesc = true,
  citiesAsc = true,
  citiesDesc = true,
  daysAsc = true,
  daysDesc = true

export default function usePackagesSort(
  packageArr: PackageDetails[],
  setPackageArr: Dispatch<SetStateAction<PackageDetails[]>>
) {
  const [sortType, setSortType] = useState<any>()

  useEffect(() => {
    if (packageArr?.length === 0) return
    if (sortType) sort(sortType)
  }, [packageArr?.length])

  const sort = (input: SortTripType) => {
    let arr = [...packageArr]
    switch (input) {
      case SortTripType.PriceAsc:
        setSortType(SortTripType.PriceAsc)
        if (priceAsc)
          arr = [...packageArr].sort(
            (a, b) =>
              parseFloat(a.price.price_transports.toString()) -
              parseFloat(b.price.price_transports.toString())
          )

        break
      case SortTripType.CitiesDesc:
        setSortType(SortTripType.CitiesDesc)
        if (priceDesc)
          arr = [...packageArr].sort(
            (a, b) =>
              parseFloat(b.locations.length.toString()) -
              parseFloat(a.locations.length.toString())
          )
        break
      case SortTripType.CitiesAsc:
        setSortType('citiesAsc')
        if (citiesAsc)
          arr = [...packageArr].sort(
            (a, b) =>
              parseInt(a.locations.length.toString()) -
              parseInt(b.locations.length.toString())
          )
        break
    }
    setPackageArr(arr)
  }

  return { sortType, sort, setSortType }
}
