import { useEffect, useLayoutEffect } from 'react'
import { isBrowser } from 'src/data/environments'

export const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect
