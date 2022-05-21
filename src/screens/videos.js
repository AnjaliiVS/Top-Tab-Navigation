import React,{Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Text, View, StyleSheet,  } from 'react-native';


const Stack = createStackNavigator();



export default class Videos extends Component{
    render(){
  return (
    
    <View style={{width:'100%',height:'100%',backgroundColor:"blue",justifyContent:'center'}}>
    <Text style={{fontSize:20,fontWeight:"bold",textAlign:'center'}}>Videos</Text></View>
  )
}
}
