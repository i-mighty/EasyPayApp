import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
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

          if (route.name === 'CaptureQrCode') {
            iconName = focused ? 'barcode' : 'barcode';
          } else if (route.name === 'ScanQrCode') {
            iconName = focused ? 'qrcode' : 'qrcode';
          } else if (route.name === 'Welcome') {
            iconName = focused ? 'home' : 'home';
          }
          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Welcome" component={Welcome} />
      <Tab.Screen name="CaptureQrCode" component={CaptureQrCode} />
      <Tab.Screen name="ScanQrCode" component={ViewQrCode} />
    </Tab.Navigator>
  );
};

export default RootNavigator;
