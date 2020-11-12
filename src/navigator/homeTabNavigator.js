import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {MaterialCommunityIcons} from 'react-native-vector-icons';
import * as Screen from '@screens';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {Button, IconButton} from 'react-native-paper';
import {DrawerActions} from '@react-navigation/native';
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const homeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#009387'},
      headerTintColor: '#fff',
      headerTitleStyle: {fontWeight: 'bold'},
    }}>
    <Stack.Screen
      name="HOME_SCREEN2"
      component={Screen.HomeScreen}
      options={({navigation, route}) => ({
        headerTitle: 'Home',
        headerTitleAlign: 'center',
        headerShown: true,
        headerLeft: () => (
          <IconButton
            icon="menu"
            color={'white'}
            size={30}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          />
        ),
      })}
    />
  </Stack.Navigator>
);
const profileStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#1f65ff'},
      headerTintColor: '#fff',
      headerTitleStyle: {fontWeight: 'bold'},
    }}>
    <Stack.Screen name="PROFILE_SCREEN" component={Screen.ProfileScreen} />
  </Stack.Navigator>
);
const tab3Stack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#694fad'},
      headerTintColor: '#fff',
      headerTitleStyle: {fontWeight: 'bold'},
    }}>
    <Stack.Screen name="TAB3_SCREEN" component={Screen.Tab3Screen} />
  </Stack.Navigator>
);
const tab4Stack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#d02860'},
      headerTintColor: '#fff',
      headerTitleStyle: {fontWeight: 'bold'},
    }}>
    <Stack.Screen name="TAB4_SCREEN" component={Screen.Tab4Screen} />
  </Stack.Navigator>
);
const tab5Stack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#d09000'},
      headerTintColor: '#fff',
      headerTitleStyle: {fontWeight: 'bold'},
    }}>
    <Stack.Screen name="TAB5_SCREEN" component={Screen.Tab5Screen} />
  </Stack.Navigator>
);

export default homeTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="HOME" activeColor="#fff">
      <Tab.Screen
        name="HOME_SCREEN"
        component={homeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({focused, color, size}) => (
            <IonIcon name="home-outline" size={26} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="PROFILE_SCREEN"
        component={profileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({focused, color, size}) => (
            <AntDesign name="user" size={26} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="TAB3_SCREEN"
        component={tab3Stack}
        options={{
          tabBarLabel: 'Tab 3',
          tabBarColor: '#694fad',
          tabBarIcon: ({focused, color, size}) => (
            <IonIcon name="bar-chart-outline" size={26} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="TAB4_SCREEN"
        component={tab4Stack}
        options={{
          tabBarLabel: 'Tab 4',
          tabBarColor: '#d02860',
          tabBarIcon: ({focused, color, size}) => (
            <IonIcon name="pie-chart-outline" size={26} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="TAB5_SCREEN"
        component={tab5Stack}
        options={{
          tabBarLabel: 'Tab 5',
          tabBarColor: '#d09000',
          tabBarIcon: ({focused, color, size}) => (
            <IonIcon name="bar-chart" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
