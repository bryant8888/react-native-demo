import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { THEME } from '../theme'


export const Navbar = props => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>ToDo App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    paddingBottom: 10,
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: THEME.MAIN_COLOR
  },
  text: {
    color: '#fff',
    fontSize: 20
  }
})
