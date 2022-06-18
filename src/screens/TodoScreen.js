import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { THEME } from '../theme'
import { AppCard } from '../components/ui/AppCard'
import { EditModal } from '../components/EditModal'

export const TodoScreen = ({ todo, goBack, onRemove, onSave }) => {
  const [modal, setModal] = useState(false)

  const saveHandler = title => {
    onSave(todo.id, title)
    setModal(false)
  }

  return (
    <View>
      <EditModal
        value={todo.title}
        visible={modal}
        onCancel={() => setModal(false)}
        onSave={saveHandler}
      />

      <AppCard style={styles.card}>
        <Text style={styles.title}>{todo.title}</Text>
        <Button
          title='Редактировать'
          onPress={() => setModal(true)}
        />
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button
            title='Назад'
            color={THEME.GRAY_COLOR}
            onPress={goBack}
          />
        </View>
        <View style={styles.button}>
          <Button
            title='Удалить'
            color={THEME.DANGER_COLOR}
            onPress={() => onRemove(todo.id)}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  card: {
    marginBottom: 20
  },
  button: {
    width: '40%'
  },
  title: {
    fontSize: 20
  }
})
