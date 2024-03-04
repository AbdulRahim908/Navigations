import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
//navigations
import{NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//screens
import Home from './pages/Home';
import Details from './pages/Details';

export type RootStackParamList = {
  Home: undefined;
  Details:{productID:String};
};




const Stack=createNativeStackNavigator<RootStackParamList>();

function App():JSX.Element{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
        name='Home'
        component={Home}
        options={{title:'Trending products'}} //optional
        />
        <Stack.Screen
        name='Details'
        component={Details}
        options={{title:'Product Details'}} //optional
        
        
        />

      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
