export type SendGiftCardType = 'email' | 'physical-card'
export type GiftType = 'general' | 'image-1' | 'image-2'

export const getCityImageCode = (giftType: GiftType) => {
  switch (giftType) {
    case 'image-1':
      return '/static/gift-card-preview/image-1.png'
    case 'image-2':
      return '/static/gift-card-preview/image-2.png'
  }
}
