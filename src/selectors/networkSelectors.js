// networkSelectors.js

import { createSelector } from 'reselect'

// Selector names are assembled, roughly, camel case according to
// its dot-notation in the state tree, so
//
//   state.network.data.response.results
//
// Translates to selectNetworkDataResponseResults().

export const selectNetwork = (state) => state.network

export const selectNetworkData = createSelector(
  selectNetwork,
  (network) => {
    return network && network.data
  }
)

export const selectNetworkDataResponse = createSelector(
  selectNetworkData,
  (network) => {
    return network && network.response
  }
)

export const selectNetworkDataResponseResults = createSelector(
  selectNetworkDataResponse,
  (response) => {
    return response && response.results
  }
)
