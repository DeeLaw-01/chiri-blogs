import { useState } from 'react'

export function useLocation() {
  const [loc, setLoc] = useState()

  return [loc, setLoc]
}
