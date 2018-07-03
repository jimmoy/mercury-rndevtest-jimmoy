// reducers/index.js

import { combineReducers } from 'redux'

import {
  peopleReducer,
  initialState as peopleInitialState
} from './peopleReducer'

import {
  speciesReducer,
  initialState as speciesInitialState
} from './speciesReducer'

export const initialState = {
  people: peopleInitialState,
  species: speciesInitialState,
}

const combined = combineReducers({
  people: peopleReducer,
  species: speciesReducer,
})

export const rootReducer = (state = initialState, action) => {
  return combined(state, action)
}

