import React from 'react'
import { Text, TextInput, View, StyleSheet, Button } from 'react-native'

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:  15,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    alignSelf: 'stretch',
    marginBottom: 10,
    paddingHorizontal: 5,
  }
})

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesion</Text>
      <TextInput style={styles.input} placeholder='Email'/>
      <TextInput style={styles.input} placeholder='Password'/>
      <Button title='Iniciar sesion' onPress={() => {}}/>
      <Button title='Registrarse' onPress={() => navigation.navigate('Register')} />
    </View>
  )
}
