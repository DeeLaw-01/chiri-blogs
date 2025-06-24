import NextLink from 'next/link'
import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'

const ScheduleButton = () => {
  return (
    <NextLink href="https://calendly.com/trypcom-partner-scouts/20min">
      <Button primary aria-label="Schedule meeting" size="sm" h="auto" py="3">
        <Text notag st="common.navbar.schedule.meeting.button" />
      </Button>
    </NextLink>
  )
}

export default ScheduleButton
