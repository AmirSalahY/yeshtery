import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from 'screens/HomeScreen';
import QrScanner from 'src/screens/QrScanner';
import SingleItem from 'src/screens/SingleItem';
export type MainStackParamList = {
  Home: undefined;
  SingleItem: {product?: any; scan?: number};
  QrScanner: undefined;
};
const MainStack = () => {
  const Stack = createNativeStackNavigator<MainStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SingleItem"
          component={SingleItem}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="QrScanner"
          component={QrScanner}
          options={{
            title: 'Scan Code',
            statusBarStyle: 'dark',
            headerShadowVisible: false,
            contentStyle: {backgroundColor: 'white'},
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainStack;
