// HomeView.js

import React, { Component } from 'react'

import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  peopleContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  personContainerEven: {
    backgroundColor: '#dddddd',
  },
  personContainerOdd: {
    backgroundColor: '#ffffff',
  },
  person: {
    fontSize: 18,
  },
  button: {
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
  },
})

export const OnePerson = ({ person }) =>
  <View style={styles.personContainer}>
    <Text style={styles.person}>{person.name}</Text>
  </View>

const rowStyleSuffix = n => (n % 2 === 0) ? 'Even' : 'Odd'

export const PeopleList = ({ people }) =>
  people.map((person, index) => {
    const styleName = `personContainer${rowStyleSuffix(index)}`
    return (
      <View key={person.name} style={styles[styleName]}>
        <Text style={styles.person}>{person.name}</Text>
      </View>
      )
  })

export const HomeView  = ({ data, onClick }) =>
  <View style={styles.root}>
    <View style={styles.peopleContainer}>
      <PeopleList people={data} />
    </View>
    <TouchableOpacity onPress={onClick}>
      <Text style={styles.button}>Button</Text>
    </TouchableOpacity>
  </View>
