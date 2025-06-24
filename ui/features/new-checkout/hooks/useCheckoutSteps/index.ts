import { useCheckoutAtoms } from '../../useCheckoutAtoms'
import { Step } from './step.type'

export default function useCheckoutSteps() {
  const { step, steps, setStep } = useCheckoutAtoms()

  const handleNextStep = () => {
    setStep(step + 1)
    scrollToElementById(step + 1)
  }

  const scrollToElementById = (id: number) => {
    const element = document.getElementById(`section-${id}`)
    if (!element) return

    setTimeout(() => {
      const top = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: top - 90,
        behavior: 'smooth',
      })
    }, 60)
  }

  const getStepIndex = (step: Step, idx?: number) => {
    if (idx === undefined) return steps.indexOf(step)
    return steps.slice(0, idx + 1).filter((s) => s === step).length + 1
  }

  const isCurrentIndex = (curr: Step, idx?: number) => {
    return step === getStepIndex(curr, idx)
  }

  return { getStepIndex, isCurrentIndex, handleNextStep }
}
