import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ListItem from '../components/ListItem';

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  list: {
    alignSelf: 'stretch',
  }
})

const data = [
  { _id: 'lala', name: 'Churrasco', desc: 'Plate tipico, palta, mayonesa' },
]


const Meals = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList 
        style={styles.list}
        data={data}
        keyExtractor={x => x._id}
        renderItem={({ item }) =>
          <ListItem 
            onPress={() => navigation.navigate('Modal', { _id: item._id })}
            name={item.name}
          />}
      />
    </View>
  )
}

Meals.navigationOptions = ({
  title: 'Comidas disponibles',
})

export default Meals
