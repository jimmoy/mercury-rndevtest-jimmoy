// peopleSelectors.js

import { createSelector } from 'reselect'

// Selector names are assembled, roughly, camel case according to
// its dot-notation in the state tree, so
//
//   state.people.data.response.results
//
// Translates to selectPeopleDataResponseResults().

export const selectPeople = (state) => state.people

export const selectPeopleData = createSelector(
  selectPeople,
  (people) => {
    return people && people.data
  }
)

export const selectPeopleDataResponse = createSelector(
  selectPeopleData,
  (people) => {
    return people && people.response
  }
)

export const selectPeopleDataResponseResults = createSelector(
  selectPeopleDataResponse,
  (response) => {
    return response && response.results
  }
)
