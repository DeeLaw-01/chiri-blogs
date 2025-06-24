export const getColor = (rating: number): string[] => {
  if (rating >= 7) return ['green.100', '_green']
  else if (rating >= 6) return ['yellow.100', '_orange']
  else return ['_lightred', '_red']
}

export const getReviewText = (score: number): string => {
  if (score >= 9) return 'hotel-info:review.superb'
  else if (score >= 8) return 'hotel-info:review.verygood'
  else if (score >= 7) return 'hotel-info:review.good'
  else return 'hotel-info:review.pleasant'
}
