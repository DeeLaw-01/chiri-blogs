'use client'

import dynamic from 'next/dynamic'
import { LottieProps } from 'react-lottie-player'
const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false })

export default function LottiePlayer(props: LottieProps) {
  return <Lottie {...props} />
}
