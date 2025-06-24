import {
  Divider,
  StackProps,
  Tab,
  TabList,
  Tabs,
  VStack,
} from '@chakra-ui/react'
import { RefObject, useCallback, useEffect, useState } from 'react'
import { MotionBox } from 'ui/primitives/Motion'

type TabNavigationProps = {
  containerRef: RefObject<HTMLDivElement>
  tabData: { label: JSX.Element; id: string }[]
} & StackProps

export default function TabsScrollNavigation({
  containerRef,
  tabData,
  ...rest
}: TabNavigationProps) {
  const [activeSection, setActiveSection] = useState(tabData[0]?.id || '')

  const handleTabChange = (elementId: string) => {
    const element = document.getElementById(elementId)
    const container = containerRef.current

    if (element && container) {
      const elementTop = element.offsetTop
      const offset = 10

      container.scrollTo({
        top: elementTop - offset,
        behavior: 'smooth',
      })

      setActiveSection(elementId)
    }
  }

  const handleScroll = useCallback(() => {
    document.querySelectorAll('[data-section]').forEach((section) => {
      const rect = section.getBoundingClientRect()
      if (rect.top <= 80 && rect.bottom <= window.innerHeight) {
        setActiveSection(section.id)
      }
    })
  }, [])

  useEffect(() => {
    const container = containerRef.current
    container?.addEventListener('scroll', handleScroll, { passive: true })
    return () => container?.removeEventListener('scroll', handleScroll)
  }, [containerRef])

  return (
    <VStack
      position="sticky"
      top={0}
      h="50px"
      zIndex="sticky"
      bg="_white"
      ml={{ base: '-1rem', md: 'initial' }}
      {...rest}
    >
      <Tabs
        variant="unstyled"
        h="50px"
        overflowX={{ base: 'auto', md: 'hidden' }}
        className="hide-scrollbar"
      >
        <TabList w="calc(100vw - 1rem)" h="50px">
          {tabData.map((tab, idx) => (
            <VStack key={idx}>
              <Tab
                w="max-content"
                onClick={() => handleTabChange(tab.id)}
                color={activeSection === tab.id ? 'primary' : 'initial'}
              >
                {tab.label}
              </Tab>
              {activeSection === tab.id && (
                <MotionBox
                  width="full"
                  outline="1px solid"
                  layoutId="active-tab"
                  outlineColor="primary"
                />
              )}
            </VStack>
          ))}
        </TabList>
      </Tabs>
      <Divider position="absolute" w="200vw" top="49px" left="-100vw" />
    </VStack>
  )
}
