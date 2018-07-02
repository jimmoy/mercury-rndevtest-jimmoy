import * as people from '../peopleActions'

describe('people actions', () => {
  it('makes a people data request action', () => {
    const screen = 'home'
    const expected = {
      type: people.PEOPLE_DATA_REQUEST,
    }
    expect(people.peopleRequest()).toEqual(expected)
  })
  it('makes a people data completion action', () => {
    const expected = {
      type: people.PEOPLE_DATA_COMPLETE,
      response: {
        hello: 'world',
      }
    }
    expect(people.peopleComplete({ hello: 'world' })).toEqual(expected)
  })
})
