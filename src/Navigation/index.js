import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import Splash from '../Screens/Splash/index';

import DzikirPagi from '../Screens/DzikirPagi';
import DzikirPetang from '../Screens/DzikirPetang';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      initialRouteName="DzikirPagi"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let sizeIcon;

          if (route.name === 'DzikirPagi') {
            iconName = focused ? 'home' : 'home';
            sizeIcon = size;
          } else if (route.name === 'DzikirPetang') {
            iconName = focused ? 'credit-card' : 'credit-card';
            sizeIcon = size;
          }
          return <Icon name={iconName} size={sizeIcon} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#008C74',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}>
      <Tab.Screen name="DzikirPagi" component={DzikirPagi} />
      <Tab.Screen name="DzikirPetang" component={DzikirPetang} />
    </Tab.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;