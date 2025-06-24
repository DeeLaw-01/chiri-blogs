type Badge = {
  id: number
  type: number
  title: string
  description: string
}

export type AllBadges = {
  'BASIC EXPLORER': Badge[]
  BEGINNER: Badge[]
  LUXURY: Badge[]
  SUSTAINABLE: Badge[]
  'ADVANCED EXPLORER': Badge[]
}

export type GamificationData = {
  username: string
  level: number
  coins: number
  badges: Array<number>
  discount: number
}
