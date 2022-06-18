import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native'
import { THEME } from '../theme'

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState('')
  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value)
      setValue('')
    } else {
      Alert.alert('Название задачи не может быть пустой')
    }
  }
  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        placeholder="Введите название задачи..."
        value={value}
        autoCorrect={false}
        autoCapitalize='none'
        // onChangeText={text => setValue(text)}
        onChangeText={setValue}

      />
      <Button title="Добавить" onPress={pressHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    padding: 10,
    width: '70%',
    borderBottomWidth: 2,
    borderStyle: 'solid',
    borderBottomColor: THEME.MAIN_COLOR

  }
})
