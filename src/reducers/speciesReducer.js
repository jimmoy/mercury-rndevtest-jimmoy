// speciesReducer.js
// Reducer at <root>/species
//
// The species/data state has some state information as well as the precise form
// of the JSON response of the API request made to fetch data:
//
//   species: {
//     status: 'request'
//     response: {
//       response_code: 0,
//       results: [
//         { name: "...", classification: "..." },
//         { name: "...", classification: "..." },
//         ...
//       ]
//     }
//   }
//
// In more complex API situations, there would be other entries
// in the state tree such as species/profile, species/saved, other
// things dictated by the semantics of the API.

import { mergeDeepRight, path } from 'ramda'

import {
  SPECIES_DATA_REQUEST,
  SPECIES_DATA_COMPLETE,
} from '../actions'

export const initialState = {
  data: {
  },
  byurl: {
  },
}

export const speciesReducer = (state = initialState, action) => {
  //
  // Handle all 'SPECIES/*' actions
  //
  switch (action.type) {
    case SPECIES_DATA_REQUEST:
      // Nothing but the message, indicating the species
      // request has been made and now we're waiting
      return mergeDeepRight(state, {
        data: {
          status: 'request'
        }
      })
    case SPECIES_DATA_COMPLETE: {
      const response = path(['response'], action)
      return mergeDeepRight(state, {
        data: {
          status: 'complete',
          response: response,
        },
        byurl: {
          [response.url]: response,
        },
      })
    }
  }
  return state
}




