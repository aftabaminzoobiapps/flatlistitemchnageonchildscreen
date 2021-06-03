import React from 'react';
import { useState } from 'react';
import { SafeAreaView,  FlatList, StyleSheet,DeviceEventEmitter, Text, StatusBar, TouchableOpacity } from 'react-native';
const App = ({navigation}) => {
  
  DeviceEventEmitter.addListener("imagechange", (eventData) => {
      onSelect(eventData)
  })

  const [data , setData] = useState([
    {id: '1',title: 'First Item'},
    {id: '2',title: 'Second Item'},
    {id: '3',title: 'Third Item'},
    {id: '4',title: 'Fourth Item'},
    {id: '5',title: 'Fifth Item'},
    {id: '6',title: 'Sixth Item'},
    {id: '7',title: 'seventh Item'},
    {id: '8',title: 'eight Item'},
    {id: '9',title: 'nineth Item'},
  ])
  
const onSelect = item => {
 // let id = data.findIndex((obj => obj.id == item.id));
  // const newstate =  {...data,data[id].title = item.title}
  const newState = data.map(obj =>
    obj.id === item.id ? { ...obj, title: item.title } : obj
  );
  setData(newState)
  };

const  onPress = (item) => {
    navigation.navigate("Details", {item});
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} 
      onPress={() => onPress(item)}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;