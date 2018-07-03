import {
  speciesRequest,
  speciesComplete,
} from '../actions'

export const fetchSpecies = async (dispatch, url) => {
  try {
    dispatch(speciesRequest())
    const response = await fetch(url)
    const json = await response.json()
    dispatch(speciesComplete(json, null))
  } catch (err) {
    dispatch(speciesComplete(null, err))
  }
}
