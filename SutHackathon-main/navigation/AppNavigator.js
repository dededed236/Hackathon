import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import MainScreen from '../screens/HomeScreen'; // ใช้ชื่อ MainScreen ตามที่ import
import SecondScreen from '../screens/SecondScreen';
import NotificationFull from '../screens/NotificationFull';
import ProfileScreen from '../screens/ProfileScreen'; // เพิ่ม ProfileScreen

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// --- ส่วนที่ 1: กำหนด Stack Navigator สำหรับแต่ละแท็บ (ที่หายไปในโค้ดเดิม) ---

// Stack สำหรับแท็บ "หน้าแรก" (MainStack)
const HomeStackNavigator = createNativeStackNavigator();
function MainStack() {
  return (
    <HomeStackNavigator.Navigator screenOptions={{ headerShown: false }}>
      {/* HomeScreen เป็นหน้าจอหลักของแท็บ "หน้าแรก" */}
      <HomeStackNavigator.Screen name="HomeScreen" component={MainScreen} />
      {/* ถ้ามีหน้าจออื่นๆ ที่จะนำทางต่อจาก HomeScreen ในแท็บนี้ สามารถเพิ่มได้ที่นี่ */}
    </HomeStackNavigator.Navigator>
  );
}

// Stack สำหรับแท็บ "แจ้งเหตุ" (ThirdStack)
const AlertStackNavigator = createNativeStackNavigator();
function ThirdStack() {
  return (
    <AlertStackNavigator.Navigator screenOptions={{ headerShown: false }}>
      {/* NotificationFull อาจเป็นหน้าจอหลักสำหรับแท็บ "แจ้งเหตุ" หรือเป็นหน้าจอที่สำคัญใน flow นี้ */}
      <AlertStackNavigator.Screen name="AlertNotificationScreen" component={NotificationFull} />
      {/* ถ้ามีหน้าจออื่นๆ ที่จะนำทางต่อจาก NotificationFull ในแท็บนี้ สามารถเพิ่มได้ที่นี่ */}
    </AlertStackNavigator.Navigator>
  );
}

// --- ส่วนที่ 2: Stack หลักของแอพ (AppNavigator) ---
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* MainTab เป็นหน้าจอแรกที่มี Bottom Tab */}
        <Stack.Screen name="MainTab" component={MainTab} />
        {/* ProfileScreen เข้าถึงได้จาก Stack หลัก (จะแสดงเต็มหน้าจอ เหนือ Tab Bar) */}
        <Stack.Screen name="Profile" component={ProfileScreen} />
        {/* NotificationFull เข้าถึงได้จาก Stack หลัก (ในกรณีที่ต้องการเรียกโดยตรง ไม่ผ่านแท็บ)
            ถ้า NotificationFull ถูกเรียกจากแท็บ "แจ้งเหตุ" เท่านั้น คุณอาจจะลบบรรทัดนี้ออกได้
            แต่การมีไว้ทั้งสองที่ก็ไม่เสียหาย และให้ความยืดหยุ่นในการเข้าถึง */}
        <Stack.Screen name="NotificationFull" component={NotificationFull} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// --- ส่วนที่ 3: MainTab สำหรับการตั้งค่าการนำทางในแท็บ ---
function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'MainStack') { // ชื่อ route ตรงกับชื่อที่ใช้ใน Tab.Screen
            iconName = 'home';
          } else if (route.name === 'Second') {
            iconName = 'map';
          } else if (route.name === 'Third') { // ชื่อ route ตรงกับชื่อที่ใช้ใน Tab.Screen
            iconName = 'alert';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#fff', // สีไอคอน/ข้อความเมื่อแท็บทำงานอยู่
        tabBarInactiveTintColor: '#ffe3e3', // สีไอคอน/ข้อความเมื่อแท็บไม่ได้ทำงาน
        tabBarStyle: {
          backgroundColor: '#801313', // สีพื้นหลังของ Tab Bar
          borderTopColor: '#801313', // สีเส้นขอบด้านบนของ Tab Bar (ตั้งให้เป็นสีเดียวกับพื้นหลังเพื่อซ่อน)
        },
        headerShown: false, // ซ่อน Header สำหรับหน้าจอภายใน Tab
      })}
    >
      {/* ใช้ Screen สำหรับการประกาศแต่ละแท็บ */}
      <Tab.Screen name="MainStack" component={MainStack} options={{ title: 'หน้าแรก' }} />
      <Tab.Screen name="Second" component={SecondScreen} options={{ title: 'พื้นที่เสี่ยง' }} />
      <Tab.Screen name="Third" component={ThirdStack} options={{ title: 'แจ้งเหตุ' }} />
    </Tab.Navigator>
  );
}