// speciesActions.js

import { mergeAll } from 'ramda'

export const SPECIES_DATA_REQUEST = 'SPECIES/DATA_REQUEST'
export const SPECIES_DATA_COMPLETE = 'SPECIES/DATA_COMPLETE'

export const speciesRequest = () => {
  return {
    type: SPECIES_DATA_REQUEST,
  }
}

export const speciesComplete = (response, error) => mergeAll([
  { type: SPECIES_DATA_COMPLETE },
  error && { error },
  response && { response },
])

