import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logoText}>LOGO <Text style={styles.appName}>App name</Text></Text>
        <TouchableOpacity onPress={() => setSidebarVisible(true)}>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* ...existing code... */}
        <View style={styles.newsHeader}>
          <Ionicons name="chevron-back" size={20} color="#000" />
          <Text style={styles.newsTitle}>ข่าวสาร</Text>
          <Ionicons name="chevron-forward" size={20} color="#000" />
        </View>
        {/* แจ้งเตือนล่าสุด */}
        <View style={styles.alertSection}>
          <Text style={styles.sectionTitle}>แจ้งเตือนเหตุล่าสุด</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>ดูข่าวทั้งหมด</Text>
          </TouchableOpacity>
        </View>

        {/* ...existing code... */}
      </ScrollView>

      {/* Sidebar Overlay */}
      {sidebarVisible && (
        <SafeAreaView style={sidebarStyles.overlay}>
          <View style={sidebarStyles.sidebar}>
            <View style={sidebarStyles.sidebarHeader}>
              <Text style={sidebarStyles.logo}>Logo</Text>
              <TouchableOpacity onPress={() => setSidebarVisible(false)}>
                <Ionicons name="close" size={28} color="#fff" />
              </TouchableOpacity>
            </View>

            <View style={sidebarStyles.menu}>
              {/* เพิ่มการใช้งาน navigation.navigate เพื่อไปที่หน้า Profile */}
              <TouchableOpacity style={sidebarStyles.menuItem} onPress={() => navigation.navigate('Profile')}>
                <Ionicons name="person" size={22} color="#801313" style={{ marginRight: 10 }} />
                <Text style={sidebarStyles.menuText}>โปรไฟล์</Text>
              </TouchableOpacity>

              <TouchableOpacity style={sidebarStyles.menuItem} onPress={() => navigation.navigate('NotificationFull')}>
                <Ionicons name="notifications-circle" size={22} color="#801313" style={{ marginRight: 10 }} />
                <Text style={sidebarStyles.menuText}>แจ้งเตือนเหตุล่าสุด</Text>
              </TouchableOpacity>

              <TouchableOpacity style={sidebarStyles.menuItem} onPress={() => { /* handle stats press */ }}>
                <Ionicons name="stats-chart" size={22} color="#801313" style={{ marginRight: 10 }} />
                <Text style={sidebarStyles.menuText}>สถิติ</Text>
              </TouchableOpacity>

              <TouchableOpacity style={sidebarStyles.menuItem} onPress={() => { /* handle news press */ }}>
                <Ionicons name="newspaper" size={22} color="#801313" style={{ marginRight: 10 }} />
                <Text style={sidebarStyles.menuText}>ข่าวสาร</Text>
              </TouchableOpacity>

            </View>
            <TouchableOpacity style={sidebarStyles.logoutBtn} onPress={() => { /* handle logout */ }}>
              <Text style={sidebarStyles.logoutText}>LOG OUT</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
}

// Styles สำหรับ Sidebar
const sidebarStyles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  sidebar: {
    width: 250,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
  },
  sidebarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menu: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuText: {
    fontSize: 18,
    marginLeft: 10,
  },
  logoutBtn: {
    marginTop: 'auto',
    backgroundColor: '#801313',
    padding: 15,
    borderRadius: 5,
  },
  logoutText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});
