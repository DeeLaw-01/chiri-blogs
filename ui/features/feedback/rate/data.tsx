import HappyLottie from './lotties/data/happy.json'
import OkayLottie from './lotties/data/okay.json'
import AngryLottie from './lotties/data/angry.json'
import SadLottie from './lotties/data/sad.json'
import CoolLottie from './lotties/data/cool.json'

export type RateDataItem = {
  label: string
  value: RateValue
  icon: object
}

export type RateValue = number

export const RateData = [
  {
    label: 'feedback-page.feedback.horrible',
    value: 1,
    icon: AngryLottie,
  },
  {
    label: 'feedback-page.feedback.bad',
    value: 2,
    icon: SadLottie,
  },
  {
    label: 'feedback-page.feedback.okay',
    value: 3,
    icon: OkayLottie,
  },
  {
    label: 'feedback-page.feedback.good',
    value: 4,
    icon: HappyLottie,
  },
  {
    label: 'feedback-page.feedback.amazing',
    value: 5,
    icon: CoolLottie,
  },
] as RateDataItem[]
