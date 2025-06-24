type LocationDataItem = {
  image: any
  locode: string
  value: string
}

export const data = [
  {
    image: '/static/regions/world.png',
    locode: '',
    value: 'Anywhere',
  },
  {
    image: '/static/regions/europe.png',
    locode: 'europe',
    value: 'Europe',
  },
  {
    image: '/static/regions/australia.png',
    locode: 'AU',
    value: 'Australia',
  },
  {
    image: '/static/regions/portugal.png',
    locode: 'PT',
    value: 'Portugal',
  },
  {
    image: '/static/regions/france.png',
    locode: 'FR',
    value: 'France',
  },
  {
    image: '/static/regions/thailand.png',
    locode: 'TH',
    value: 'Thailand',
  },
] as LocationDataItem[]
