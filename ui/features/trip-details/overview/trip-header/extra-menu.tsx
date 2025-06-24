import {
  MenuItem as ChakraMenuItem,
  Icon,
  useDisclosure,
} from '@chakra-ui/react'

import theme from 'src/styles/theme'
import { CONFIG_SITE } from 'src/config'
import { TripDetails } from 'src/shared-types/trip-details.type'

import ShareIcon from '@/icons/upload-icon.svg'
import MapIcon from '@/icons/map-icon.svg'
import PeopleIcon from '@/icons/checkout/people-icon.svg'
import HorizontalDots from '@/icons/shared/horizontal-dots.svg'

import CircleIconWrapper from 'ui/shared/circle-icon-wrapper'
import Menu from 'ui/primitives/Menu'
import Text from 'ui/primitives/Text'

import { useTripDetailsAtoms } from '../../useTripDetailsAtoms'
import { useRouter } from 'app/router'
import dynamic from 'next/dynamic'

const DynamicSharedModal = dynamic(() => import('ui/shared/modals/share-modal'))

type ExtraMenuProps = {
  trip: TripDetails
}

const ExtraMenu = ({ trip }: ExtraMenuProps) => {
  const router = useRouter()
  const {
    isOpen: isOpenShareModal,
    onOpen: onOpenShareModal,
    onClose: onCloseShareModal,
  } = useDisclosure()
  const { setShowMap, setShowChangeTravelers } = useTripDetailsAtoms()

  const buildSharedLink = () => {
    const { sessionId } = router.query
    let sharedLink = `${CONFIG_SITE.BASE_LINK}/packages/${trip.id}`

    // Append session ID if it exists
    if (sessionId) {
      sharedLink += `?sessionId=${sessionId}`
    }

    return sharedLink
  }

  const menuItems = [
    {
      labelIcon: <ShareIcon stroke={theme.colors._black} strokeWidth="1.3" />,
      label: 'new-trip-page:share.title',
      onClick: onOpenShareModal,
    },
    {
      labelIcon: <MapIcon stroke={theme.colors._black} strokeWidth="1.3" />,
      label: 'new-trip-page:overview.header.map',
      onClick: () => {
        setShowMap(true)
      },
    },
    {
      labelIcon: <PeopleIcon stroke={theme.colors._black} strokeWidth="1.3" />,
      label: 'new-trip-page:modal.travelers.title',
      onClick: () => {
        setShowChangeTravelers(true)
      },
    },
  ]

  return (
    <>
      <Menu
        isLazy
        menuButtonProps={{
          borderRadius: 'full',
          _hover: { bg: '_lightestgray' },
        }}
        button={
          <CircleIconWrapper bg={'_white'} _hover={{ bg: 'blue !important' }}>
            <HorizontalDots height="18" width="18" strokeWidth="1.1" />
          </CircleIconWrapper>
        }
        closeOnSelect={false}
      >
        {menuItems.map((menuItem, index) => {
          return (
            <ChakraMenuItem
              key={index}
              gap={2}
              onClick={menuItem.onClick}
              px={4}
              py={2}
            >
              <Icon width="18" height="18" stroke="_black">
                {menuItem.labelIcon}
              </Icon>
              <Text st={menuItem.label} />
            </ChakraMenuItem>
          )
        })}
      </Menu>

      {isOpenShareModal && (
        <DynamicSharedModal
          isOpen={isOpenShareModal}
          onClose={onCloseShareModal}
          link={buildSharedLink()}
          text={'new-trip-page:share.text'}
        />
      )}
    </>
  )
}

export default ExtraMenu
