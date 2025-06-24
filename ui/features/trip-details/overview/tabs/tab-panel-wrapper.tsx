import { ReactNode } from 'react'
import { useResponsiveSizes } from 'src/contexts/responsive'
import { MotionBox } from 'ui/primitives/Motion'
import { TabPanel } from '@chakra-ui/react'

const TabPanelWrapper = ({
  children,
  tabIndex,
  left,
}: {
  children: ReactNode
  tabIndex: number
  left: boolean
}) => {
  const { isDesktop } = useResponsiveSizes()

  return (
    <TabPanel
      as={MotionBox}
      position="relative"
      initial={{
        left: left ? (isDesktop ? '-10%' : '-40%') : isDesktop ? '10%' : '40%',
        opacity: 0,
      }}
      animate={{
        left: 0,
        opacity: 1,
        transition: { duration: isDesktop ? 0.125 : 0.25 },
      }}
      exit={{
        left: left ? (isDesktop ? '10%' : '40%') : isDesktop ? '-10%' : '-40%',
        opacity: 0,
      }}
      tabIndex={tabIndex}
      display={'block !important'}
      maxW="100vw"
    >
      {children}
    </TabPanel>
  )
}

export default TabPanelWrapper
