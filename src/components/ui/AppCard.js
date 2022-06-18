import React from 'react'
import {View, StyleSheet} from 'react-native'

export const AppCard = props => (
  <View style={{...styles.default, ...props.style}}>
    {props.children}
  </View>
)

const styles = StyleSheet.create({
  default: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOpacity: .3,
    shadowOffset: { width: 2, height: 2 },
    elevation: 8
  }
})
