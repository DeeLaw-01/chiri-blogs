export enum RedirectStatus {
  FAILED = 'failed',
  SUCCESS = 'succeeded',
}

export enum PaymentStatus {
  SUCCESS = 'true',
  PENDING = 'false',
}

export enum PaymentTypes {
  CHECKOUT = 'checkout',
  GIFT_CARD = 'giftcard',
  MARKETPLACE = 'marketplace',
}

export type PaymentType = 'stripe' | 'quidkey' | null

export type CurrentSelectionType = {
  source: PaymentType
  method?: string | null
}

export type SuccessPaymentData = {
  direct_bank?: string | null
  stripe?: string
}
