import {
  Box,
  TabList,
  Tabs,
  TabPanels,
  Tab,
  Divider,
  VStack,
} from '@chakra-ui/react'

import Text from 'ui/primitives/Text'
import Heading from 'ui/primitives/Heading'
import theme from 'src/styles/theme'

import { useState } from 'react'
import { MotionBox } from 'ui/primitives/Motion'
import { WithScrollData } from 'src/hooks/useScrollListener'
import { AnimatePresence } from 'framer-motion'
import { TabSections } from 'app/[locale]/packages/[id]/package-page'
import { TripDetailsResponseType } from 'src/api/queries/get/transportQuery/trip-details.type'
import useHistory from 'src/hooks/useHistory'
import useScrollToElement from 'src/hooks/useScrollToElement'

import TabPanelWrapper from './tab-panel-wrapper'
import OtherSections from 'ui/features/trip-details/other-sections'
import TripOverview from 'ui/features/trip-details/overview/trip-overview'
import TransportOverview from 'ui/features/trip-details/transport/transport-overview'
import FAQOverview from 'ui/features/trip-details/faqs/faqs-overview'
import AccommodationOverview from 'ui/features/trip-details/accommodation/accommodation-overview'

const TripTabs = ({ trip }: { trip: TripDetailsResponseType }) => {
  const { history } = useHistory()
  const { scrollToElement, elementToScrollRef } = useScrollToElement<any>(110)

  const [tabIndex, setTabIndex] = useState<number>(0)
  const [previousTabIndex, setPreviousTabIndex] = useState<number>(0)

  const handleTabsChange = (index: number) => {
    setPreviousTabIndex(tabIndex)
    setTabIndex(index)
    scrollToElement()
  }

  return (
    <>
      <Tabs
        index={tabIndex}
        onChange={handleTabsChange}
        variant="unstyled"
        mt={{ base: -2, md: 0 }}
      >
        <WithScrollData enableScrollBehavior>
          {({ isScrollingDown }) => {
            return (
              <Box
                position={'sticky'}
                top={{
                  base:
                    history.length <= 1
                      ? isScrollingDown
                        ? '0'
                        : '63px'
                      : '0',
                  md: isScrollingDown ? '0' : '63px',
                }}
                zIndex={2}
                transition={'all 0.2s'}
              >
                <Box
                  top={'49px'}
                  left={'-100vw'}
                  position={'absolute'}
                  width={'200vw'}
                >
                  <Divider />
                </Box>
                <TabList
                  maxW="100vw"
                  overflow="auto"
                  pb="0.5"
                  bg="_white"
                  h="50px"
                  justifyContent={{
                    base: 'space-between',
                    md: 'flex-start',
                  }}
                  className="hide-scrollbar"
                >
                  {TabSections.map((section, idx) => {
                    return (
                      <VStack
                        key={section.id}
                        gap={0}
                        height={'100%'}
                        spacing={0}
                        justifyContent={'space-between'}
                      >
                        <Tab
                          py="3"
                          key={section.id}
                          color={tabIndex === idx ? 'primary' : 'initial'}
                          textTransform={{
                            base: 'uppercase',
                            md: 'none',
                          }}
                          fontSize={{ base: 'sm', md: 'md' }}
                          whiteSpace="nowrap"
                        >
                          <Text notag st={section.name} />
                        </Tab>
                        {idx === tabIndex && (
                          <MotionBox
                            layoutId="active-tab"
                            outline="1px solid"
                            outlineColor={theme.colors.primary}
                            width={'full'}
                          />
                        )}
                      </VStack>
                    )
                  })}
                </TabList>
              </Box>
            )
          }}
        </WithScrollData>
        <Box ref={elementToScrollRef}>
          <TabPanels as={AnimatePresence} padding={0}>
            {tabIndex === 0 && (
              <TabPanelWrapper
                left={previousTabIndex > tabIndex ? true : false}
                tabIndex={0}
              >
                <TripOverview trip={trip} />
              </TabPanelWrapper>
            )}
            {tabIndex === 1 && (
              <TabPanelWrapper
                left={previousTabIndex > tabIndex ? true : false}
                tabIndex={1}
              >
                <TransportOverview />
              </TabPanelWrapper>
            )}
            {tabIndex === 2 && (
              <TabPanelWrapper
                left={previousTabIndex > tabIndex ? true : false}
                tabIndex={2}
              >
                <AccommodationOverview />
              </TabPanelWrapper>
            )}
            {tabIndex === 3 && (
              <TabPanelWrapper
                left={previousTabIndex > tabIndex ? true : false}
                tabIndex={3}
              >
                <FAQOverview />
              </TabPanelWrapper>
            )}
          </TabPanels>
        </Box>
      </Tabs>
      <Divider w="80%" ml="10vw" mt={8} />
      <Box p={4}>
        <Heading
          as="h4"
          mb="2"
          mt="1"
          fontWeight="normal"
          st="common:view.more"
        />
        <OtherSections
          tabIndex={tabIndex}
          handleTabsChange={handleTabsChange}
        />
      </Box>
    </>
  )
}

export default TripTabs
