import React from 'react'
import { AsyncStorage, Alert, Text, TextInput, View, StyleSheet, Button } from 'react-native'
import useForm from '../hooks/useForm'

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
  const initialState = {
    email: '',
    password: '',
  }
  const onSubmit = values => {
    fetch('https://serverless-nlm4it9xw-joaquinmelladoq.vercel.app/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json',
      },
      body: JSON.stringify(values),
    }) 
      .then(x => x.text())      
      .then(x => {
        try {
          return JSON.parse(x)
        } catch {
          throw x
        }
      })
      .then(x => {
        AsyncStorage.setItem('token', x.token)
        navigation.navigate('Meals')
      })
      .catch(e => Alert.alert('Error', e))
  }
  const { subscribe, inputs, handleSubmit } = useForm(initialState, onSubmit)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesion</Text>
      <TextInput 
        autoCapitalize='none'
        value={inputs.email}
        onChangeText={subscribe('email')}
        style={styles.input} 
        placeholder='Email'
      />
      <TextInput 
        autoCapitalize='none'
        value={inputs.password}
        onChangeText={subscribe('password')}
        style={styles.input} 
        placeholder='Password'
        secureTextEntry={true}
      />
      <Button title='Iniciar sesion' onPress={handleSubmit}/>
      <Button title='Registrarse' onPress={() => navigation.navigate('Register')} />
    </View>
  )
}
