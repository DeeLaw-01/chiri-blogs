export type AccommodationSearch = {
  n_adults?: number
  n_children?: number
  n_babies?: number
}

export type AccommodationFilters = {
  testFilterAccommodation?: number
}

// Add all AccommodationFilters here as well.
// This is necessary to differentiate between search/filter when populating the states
// from query because you can't directly map from a typescript type, so we need an object.
export const AccommodationFilterItems: Array<keyof AccommodationFilters> = [
  'testFilterAccommodation',
]
