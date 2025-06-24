import { Mode } from 'src/shared-types/transport.type'
import FlightIcon from '@/icons/transport/flight-icon.svg'
import TrainIcon from '@/icons/transport/train-icon.svg'
import BusIcon from '@/icons/transport/bus-icon.svg'
import FerryIcon from '@/icons/transport/ferry-icon.svg'

function getTransportIcon(mode: Mode) {
  switch (mode) {
    case 'bus':
      return BusIcon
    case 'aircraft':
      return FlightIcon
    case 'train':
      return TrainIcon
    case 'ferry':
      return FerryIcon
    default:
      return null
  }
}

export default getTransportIcon
