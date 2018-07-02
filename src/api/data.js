import {
  networkRequest,
  networkComplete,
} from '../actions'

export const fetchData = async (dispatch) => {
  try {
    const url = 'https://swapi.co/api/people/?page=1'
    dispatch(networkRequest())
    const response = await fetch(url)
    const json = await response.json()
    dispatch(networkComplete(json, null))
  } catch (err) {
    dispatch(networkComplete(null, err))
  }
}
