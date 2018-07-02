// peopleReducer.js
// Reducer at <root>/people
//
// The people/data state has some state information as well as the precise form
// of the JSON response of the API request made to fetch data:
//
//   people: {
//     status: 'request'
//     response: {
//       response_code: 0,
//       results: [
//         { name: "...", species: "..." },
//         { name: "...", species: "..." },
//         ...
//       ]
//     }
//   }
//
// In more complex API situations, there would be other entries
// in the state tree such as people/profile, people/saved, other
// things dictated by the semantics of the API.

import { mergeDeepRight, path } from 'ramda'

import {
  PEOPLE_DATA_REQUEST,
  PEOPLE_DATA_COMPLETE,
} from '../actions'

export const initialState = {
  data: {},
}

export const peopleReducer = (state = initialState, action) => {
  //
  // Handle all 'PEOPLE/*' actions
  //
  switch (action.type) {
    case PEOPLE_DATA_REQUEST:
      // Nothing but the message, indicating the people
      // request has been made and now we're waiting
      return mergeDeepRight(state, {
        data: {
          status: 'request'
        }
      })
    case PEOPLE_DATA_COMPLETE: {
      return mergeDeepRight(state, {
        data: {
          status: 'complete',
          response: path(['response'], action),
        }
      })
    }
  }
  return state
}



