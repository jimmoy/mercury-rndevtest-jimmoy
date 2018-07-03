// speciesSelectors.js

import { createSelector } from 'reselect'

// Selector names are assembled, roughly, camel case according to
// its dot-notation in the state tree, so
//
//   state.species.data.response.results
//
// Translates to selectSpeciesDataResponseResults().

export const selectSpecies = (state) => state.species

export const selectSpeciesData = createSelector(
  selectSpecies,
  (species) => {
    return species && species.data
  }
)

export const selectSpeciesDataResponse = createSelector(
  selectSpeciesData,
  (species) => {
    return species && species.response
  }
)

export const selectSpeciesDataResponseResults = createSelector(
  selectSpeciesDataResponse,
  (response) => {
    return response && response.results
  }
)

export const selectSpeciesByUrl = createSelector(
  selectSpecies,
  (species) => {
    return species && species.byurl
  }
)
