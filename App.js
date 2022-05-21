import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/navigation/tabs'
export default class App extends Component   {
    render() {
        return (

          <NavigationContainer>
            <Tabs/>
          </NavigationContainer>
    
  );
}
}