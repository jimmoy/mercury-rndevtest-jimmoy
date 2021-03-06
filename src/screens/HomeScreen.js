// HomeScreen.js

import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { path } from 'ramda'

import { fetchData } from '../api'
import { BaseScreen } from './common'
import { HomeView } from '../views'
import {
  selectPeopleDataResponseResults,
  selectSpeciesByUrl,
} from '../selectors'

class HomeComponent extends BaseScreen {

  // Ensure BaseScreen initialization is complete
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.reset()
  }

  // Everything visual is inside HomeView
  render = () => <HomeView {...this.props} />
}

// Screen-specific selectors

const selectDisplayData = createSelector(
  selectPeopleDataResponseResults,
  (results) => {
    return results ? results : []
  }
)

export const mapStateToProps = (state, ownProps) => {
  const results = {
    data: selectDisplayData(state),
    species: selectSpeciesByUrl(state),
  }
  return results
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // This is where the people request to swapi gets kicked off
    reset: () => fetchData(dispatch),

    onClick: () => {
      console.log('HomeScreen: onClick')
    }
  }
}

export const HomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps
) (HomeComponent)
