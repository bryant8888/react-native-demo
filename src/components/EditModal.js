import React, { useState } from 'react'
import {View, TextInput, Button, Modal, Alert, StyleSheet} from 'react-native'
import { THEME } from '../theme'

export const EditModal = ({ value, visible, onCancel, onSave }) => {
  const [title, setTitle] = useState(value)

  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert(
        'Ошибка',
        `Минимальная длинна названия 3 символа. Сейчас ${title.trim().length} символов.`
      )
    } else {
      onSave(title)
    }
  }
  return (
    <Modal
      visible={visible}
      animationType="slide"
    >
      <View style={styles.wrap}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          placeholder="Введите название задачи"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={64}
        />
        <View style={styles.buttons}>
          <Button
            title="Отменить"
            color={THEME.DANGER_COLOR}
            onPress={onCancel}
          />
          <Button
            title="Сохранить"
            onPress={saveHandler}
          />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 10,
    width: '80%',
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR,
  },
  buttons: {
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})
