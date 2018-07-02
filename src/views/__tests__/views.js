import React from 'react'
import renderer from 'react-test-renderer'

import { HomeView } from '../HomeView'

describe('snapshot tests', () => {
  test('HomeView', () => {
    const rendered = renderer.create(<HomeView data={[]} />)
    expect(rendered.toJSON()).toMatchSnapshot()
  })
})
