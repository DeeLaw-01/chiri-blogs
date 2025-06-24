import { LocType } from 'src/api/queries/get/locationQuery/location.type'
import GlobeIcon from '@/icons/new/travel/globe.svg'
import CityIcon from '@/icons/new/travel/city.svg'
import MapPinIcon from '@/icons/new/map/map-location-dot.svg'

export default function getLocationIcon(
  type: LocType
): React.FunctionComponent<React.SVGProps<SVGSVGElement>> {
  switch (type) {
    case 'city':
      return CityIcon
    case 'country':
      return GlobeIcon
    case 'region':
      return GlobeIcon
    case 'state':
      return MapPinIcon
  }
}
