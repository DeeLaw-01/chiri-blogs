'use client'

import { useHomeAtoms } from '../useHomeAtoms'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { HomeState } from '../useHomeAtoms/types'

export function useHomeEffects () {
  const searchParams = useSearchParams()
  const { setState } = useHomeAtoms()
  const type = searchParams?.get('type') || HomeState.TRIP

  useEffect(() => {
    setState(type as HomeState)
  }, [type])
}
