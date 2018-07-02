// reducers/index.js

import { combineReducers } from 'redux'

import {
  peopleReducer,
  initialState as peopleInitialState
} from './peopleReducer'

export const initialState = {
  people: peopleInitialState,
}

const combined = combineReducers({
  people: peopleReducer,
})

export const rootReducer = (state = initialState, action) => {
  return combined(state, action)
}

