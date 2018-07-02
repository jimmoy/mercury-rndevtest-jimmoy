// peopleActions.js

import { mergeAll } from 'ramda'

export const PEOPLE_DATA_REQUEST = 'PEOPLE/DATA_REQUEST'
export const PEOPLE_DATA_COMPLETE = 'PEOPLE/DATA_COMPLETE'

export const peopleRequest = () => {
  return {
    type: PEOPLE_DATA_REQUEST,
  }
}

export const peopleComplete = (response, error) => mergeAll([
  { type: PEOPLE_DATA_COMPLETE },
  error && { error },
  response && { response },
])
