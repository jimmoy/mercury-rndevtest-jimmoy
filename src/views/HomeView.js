// HomeView.js

import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { path } from 'ramda'

import {
  Dimensions,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native'

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  scroll: {
    width: deviceWidth,
    // backgroundColor: '#ee8888',
  },
  peopleContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  personInfo: {
    marginLeft: 8,
    flexDirection: 'column',
  },
  personMeta: {
    flexDirection: 'row',
  },
  personContainerEven: {
    padding: 12,
    flexDirection: 'row',
    backgroundColor: '#dddddd',
  },
  personContainerOdd: {
    padding: 12,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  icon: {
    paddingTop: 6,
    paddingLeft: 10,
    paddingRight: 10,
  },
  person: {
    fontSize: 30,
    marginBottom: 10,
  },
  meta: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  button: {
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
  },
})

export const OnePerson = ({ person, speciesIcon, styleName }) =>
  <View style={styles[styleName]}>
    <View style={styles.icon}>
      <Icon name={speciesIcon} color='#333333' size={30} />
    </View>
    <View style={styles.personInfo}>
      <Text style={styles.person}>{person.name}</Text>
      <View style={styles.personMeta}>
        <Text style={styles.meta}>HEIGHT: {person.height} {'\u2022'}&nbsp;</Text>
        <Text style={styles.meta}>MASS: {person.mass} {'\u2022'}&nbsp;</Text>
        <Text style={styles.meta}>GENDER: {person.gender.toUpperCase()}</Text>
      </View>
    </View>
  </View>

const rowStyleSuffix = n => (n % 2 === 0) ? 'Odd' : 'Even'

export const PeopleList = ({ people, species }) =>
  people.map((person, index) => {
    const styleName = `personContainer${rowStyleSuffix(index)}`
    const speciesUrl = path(['species', 0], person)
    const speciesName = path([speciesUrl, 'name'], species)
    const speciesIcon = (speciesName === 'Human')
      ? 'android'
      : ((speciesName === 'Droid')
        ? 'user-circle'
        : 'question'
      )
    return (
      <OnePerson styleName={styleName} person={person} 
        speciesIcon={speciesIcon} key={person.name}
      />
    )
  })

export const HomeView  = ({ data, species, onClick }) =>
  <View style={styles.root}>
    <View style={styles.peopleContainer}>
      <ScrollView style={styles.scroll}>
        <PeopleList people={data} species={species} />
      </ScrollView>
    </View>
    <TouchableOpacity onPress={onClick}>
      <Text style={styles.button}>Button</Text>
    </TouchableOpacity>
  </View>
