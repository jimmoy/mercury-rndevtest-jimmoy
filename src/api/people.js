import { path, uniq } from 'ramda'

import {
  peopleRequest,
  peopleComplete,
} from '../actions'

import {
  fetchSpecies,
} from './species'

export const fetchData = async (dispatch) => {
  try {
    const url = 'https://swapi.co/api/people/?page=1'
    dispatch(peopleRequest())
    const response = await fetch(url)
    const json = await response.json()
    dispatch(peopleComplete(json, null))
    // Send requests for species
    const speciesUrls = json && json.results && json.results.reduce((prev, val) => {
      return prev.concat(val.species)
    }, [])
    if (speciesUrls && speciesUrls.length > 0) {
      uniq(speciesUrls).forEach(url => fetchSpecies(dispatch, url))
    }
  } catch (err) {
    dispatch(peopleComplete(null, err))
  }
}
