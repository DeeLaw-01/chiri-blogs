export enum TravelerCategory {
  Adults = 'adults',
  Children = 'children',
  Infants = 'infants',
}

export type TravelerForm = {
  [key in TravelerCategory]: number
}
