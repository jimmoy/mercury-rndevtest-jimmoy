import { initialState, peopleReducer as reducer } from '../peopleReducer'
import * as people from '../../actions/peopleActions'
import { merge } from 'ramda'

describe('people reducer', () => {

  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('returns successful state', () => {
    const testCase = reducer(initialState, {
      type: people.PEOPLE_DATA_REQUEST,
    })
    const expected = {
      data: {
        status: 'request'
      },
    }
    expect(testCase).toEqual(expected)
  })

  it('returns error state', () => {
  })
})
