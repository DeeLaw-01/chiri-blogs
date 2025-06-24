import { VStack } from '@chakra-ui/react'
import { TabSections } from 'app/[locale]/packages/[id]/package-page'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'

type OtherSectionsProps = {
  handleTabsChange: (index: number) => void
  tabIndex: number
}

export default function OtherSections({
  handleTabsChange,
  tabIndex,
}: OtherSectionsProps) {
  return (
    <VStack alignItems="flex-start">
      {TabSections.map((section, idx) => {
        if (idx === tabIndex) return
        else
          return (
            <Button
              role="group"
              key={section.name}
              id="stays-bottom-nav"
              asLink
              arrow
              fontWeight="normal"
              fontSize="sm"
              onClick={() => handleTabsChange(section.id)}
            >
              <Text notag st={section.name} />
            </Button>
          )
      })}
    </VStack>
  )
}
