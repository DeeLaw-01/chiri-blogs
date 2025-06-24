export const RateItemContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}
export const RateItem = {
  initial: { opacity: 0, marginTop: '-3rem' },
  animate: { opacity: 1, marginTop: 0, transition: { duration: 0.5 } },
}

export const StateTransition = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
}
