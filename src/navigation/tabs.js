import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Searchbar} from 'react-native-paper';
import Chapter from '../screens/chapter';
import Qnbank from '../screens/qnbank';
import Resources from '../screens/resources';
import Videos from '../screens/videos';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Tab = createMaterialTopTabNavigator();

export default class Tabs extends Component {
  render() {
    return (
      <View style={{height: '100%', width: '100%'}}>
        <EvilIcons
          name="navicon"
          size={28}
          onPress={() => this.props.navigation.openDrawer()}
          style={{top: '4%'}}
        />
        <Searchbar
          style={styles.searchStyle}
          placeholder="Search for a service"
        />

        <Tab.Navigator
          screenOptions={{
            tabBarPressOpacity: '1',
            tabBarPressColor: '#748c94',
            tabBarActiveTintColor: 'red',

            tabBarIndicatorStyle: {
              backgroundColor: 'red',
            },
          }}>
          <Tab.Screen
            name="Videos"
            component={Videos}
            options={{
              tabBarLabel: ({focused}) => (
                <Text style={{color: focused ? 'red' : '#748c94'}}>Videos</Text>
              ),
            }}
          />

          <Tab.Screen
            name="Chapter"
            component={Chapter}
            options={{
              tabBarLabel: ({focused}) => (
                <Text style={{color: focused ? 'red' : '#748c94'}}>
                  Chapter
                </Text>
              ),
            }}
          />
          <Tab.Screen
            name="Resources"
            component={Resources}
            options={{
              tabBarLabel: ({focused}) => (
                <Text style={{color: focused ? 'red' : '#748c94'}}>
                  Resources
                </Text>
              ),
            }}
          />
          <Tab.Screen
            name="Qnbank"
            component={Qnbank}
            options={{
              tabBarLabel: ({focused}) => (
                <Text style={{color: focused ? 'red' : '#748c94'}}>
                  QN Bank
                </Text>
              ),
            }}
          />
        </Tab.Navigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchStyle: {
    height: 40,
    left: '3%',
    width: '87%',
    borderRadius: 10,
    marginTop: 0,
    marginBottom: 15,
    marginStart: 10,
    marginEnd: 15,
  },
});
