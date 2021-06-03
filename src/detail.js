import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet,DeviceEventEmitter, TouchableOpacity } from 'react-native';
function DetailsScreen ({navigation, route}) {
    const  [item, setItem] = useState(route.params.item)
    let data = route.params.item;
    
    
    
    const updatevalue = () => {
      setItem({...item,title:"updated"})
      navigation.goBack();
      DeviceEventEmitter.emit("imagechange",{...data,title:"updated this value"});
     // route.params.onSelect({...data,title:"updated this value"});
    }

    // useEffect(() => {
    //   return () => {
    //       DeviceEventEmitter.removeAllListeners()
    //     };
    //   }, []);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{item.title}</Text>
        
        <TouchableOpacity style={styles.button} onPress={() => updatevalue()}>
           <Text style={{color:"#fff"}}>Update Value</Text>
        </TouchableOpacity>
      </View>
    );
  }

export default DetailsScreen

const styles  = StyleSheet.create({
  button:{
    marginTop:20,
    backgroundColor:"#333333", 
    borderRadius:10, 
    paddingHorizontal:20, 
    paddingVertical:5,
  }
})