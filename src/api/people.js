import {
  peopleRequest,
  peopleComplete,
} from '../actions'

export const fetchData = async (dispatch) => {
  try {
    const url = 'https://swapi.co/api/people/?page=1'
    dispatch(peopleRequest())
    const response = await fetch(url)
    const json = await response.json()
    dispatch(peopleComplete(json, null))
  } catch (err) {
    dispatch(peopleComplete(null, err))
  }
}
