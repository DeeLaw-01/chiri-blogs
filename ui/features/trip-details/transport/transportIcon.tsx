import CircleIconWrapper from 'ui/shared/circle-icon-wrapper'
import getTransportIcon from './get-transport-icon'
import { Icon, IconProps } from '@chakra-ui/react'
import { Mode } from 'src/shared-types/transport.type'

type TransportIconProps = {
  modes: Mode[]
  addCircle?: boolean
} & IconProps

function TransportIcon({
  modes,
  addCircle,
  ...rest
}: TransportIconProps): JSX.Element {
  const getIconElement = (mode: Mode, key?: number) => {
    return (
      <Icon
        key={key}
        as={getTransportIcon(mode)}
        width="20px"
        height="20px"
        stroke={'_gray'}
        marginInlineStart={'0 !important'}
        fill={'white'}
        {...rest}
      />
    )
  }

  return (
    <>
      {modes?.map((mode, idx) => {
        if (addCircle)
          return (
            <CircleIconWrapper key={idx} p={0}>
              {getIconElement(mode)}
            </CircleIconWrapper>
          )
        else return getIconElement(mode, idx)
      })}
    </>
  )
}

export default TransportIcon
