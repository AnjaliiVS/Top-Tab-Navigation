import React,{Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {createNativeStackNavigator } from '@react-navigation/native-stack'
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';




export default class Qnbank extends Component{
    render(){
  return (

<View style={{width:'100%',height:'100%',backgroundColor:"green",justifyContent:'center'}}>
    <Text style={{fontSize:20,fontWeight:"bold",textAlign:'center'}}>Question Bank</Text>
</View>


  );}}