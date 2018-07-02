// networkReducer.js
// Reducer at <root>/network
//
// The network/data state has some state information as well as the precise form
// of the JSON response of the API request made to fetch data:
//
//   data: {
//     status: 'request'
//     response: {
//       response_code: 0,
//       results: [
//         { category: "...", question: "..." },
//         { category: "...", question: "..." },
//         ...
//       ]
//     }
//   }
//
// In more complex API situations, there would be other entries
// in the state tree such as network/profile, network/saved, other
// things dictated by the semantics of the API.

import { mergeDeepRight, path } from 'ramda'

import {
  NETWORK_DATA_REQUEST,
  NETWORK_DATA_COMPLETE,
} from '../actions'

export const initialState = {
  data: {},
}

export const networkReducer = (state = initialState, action) => {
  //
  // Handle all 'NETWORK/*' actions
  //
  switch (action.type) {
    case NETWORK_DATA_REQUEST:
      // Nothing but the message, indicating the network
      // request has been made and now we're waiting
      return mergeDeepRight(state, {
        data: {
          status: 'request'
        }
      })
    case NETWORK_DATA_COMPLETE: {
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



