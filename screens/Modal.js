import React from 'react';
import { View, Text } from 'react-native';
import useFetch from '../hooks/useFetch';

export default ({ navigation }) => {
  const { loadung, data } = useFetch()
  return (
    <View>
      <Text>Soy Modal</Text>
    </View>
  )
}
