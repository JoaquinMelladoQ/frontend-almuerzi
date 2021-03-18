import React from 'react';
import { View, Text } from 'react-native';
import useFetch from '../hooks/useFetch';

export default ({ navigation }) => {
  const id = navigation.getParam('_id')
  const { loading, data } = useFetch(`https://serverless-nlm4it9xw-joaquinmelladoq.vercel.app/api/meals${id}`)
  return (
    <View>
      <Text>{data._id}</Text>
      <Text>{data.name}</Text>
      <Text>{data.desc}</Text>
    </View>
  )
}
