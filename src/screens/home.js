//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
export default class Home extends Component {
    render() {
      return (
        <View style={styles.container}>
          
            <Text style={{fontSize:20,fontWeight:"bold"}}>This is the Home page</Text>
        </View>
    );
};
}
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

