import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Welcome from '@src/containers/Welcome';
import Quote from '@src/containers/Quote';
import CaptureQrCode from '@src/containers/CaptureQrCode';
import ViewQrCode from '@src/containers/ViewQrCode';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    // <Stack.Navigator mode="modal">
    //   <Stack.Screen name="Welcome" component={Welcome} />
    //   <Stack.Screen name="Quote" component={Quote} />
    // </Stack.Navigator>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'CaptureQRCode') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'ViewQrCode') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          } else if (route.name === 'Welcome') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Welcome" component={Welcome} />
      <Tab.Screen name="CaptureQrCode" component={CaptureQrCode} />
      <Tab.Screen name="ViewQRCode" component={ViewQrCode} />
    </Tab.Navigator>
  );
};

export default RootNavigator;
