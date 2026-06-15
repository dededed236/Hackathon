import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import MainScreen from '../screens/HomeScreen';
import SecondScreen from '../screens/SecondScreen';
import NotificationFull from '../screens/NotificationFull';
import ProfileScreen from '../screens/ProfileScreen'; // เพิ่ม ProfileScreen

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Stack หลัก ของแอพ
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTab" component={MainTab} /> {/* ใช้ MainTab */}
        <Stack.Screen name="Profile" component={ProfileScreen} /> {/* ProfileScreen */}
        <Stack.Screen name="NotificationFull" component={NotificationFull} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// MainTab สำหรับการตั้งค่าการนำทางในแท็บ
function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'MainStack') {
            iconName = 'home';
          } else if (route.name === 'Second') {
            iconName = 'map';
          } else if (route.name === 'Third') {
            iconName = 'alert';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#ffe3e3',
        tabBarStyle: {
          backgroundColor: '#801313',
          borderTopColor: '#801313',
        },
        headerShown: false,
      })}
    >
      {/* ใช้ Screen สำหรับการประกาศแต่ละแท็บ */}
      <Tab.Screen name="MainStack" component={MainStack} options={{ title: 'หน้าแรก' }} />
      <Tab.Screen name="Second" component={SecondScreen} options={{ title: 'พื้นที่เสี่ยง' }} />
      <Tab.Screen name="Third" component={ThirdStack} options={{ title: 'แจ้งเหตุ' }} />
    </Tab.Navigator>
  );
}
