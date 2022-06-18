import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export const Todo = ({ todo, onRemove, onOpen }) => {
  return (
    <TouchableOpacity
      activeOpacity={.5}
      onPress={onOpen.bind(null, todo.id)}
      onLongPress={() => onRemove(todo.id)}

    >
      <View style={styles.todo}>
        <Text style={styles.title}>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todo: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#eee',
    marginBottom: 10
  },
  title: {
    fontFamily: 'roboto-bold'
  }
})
