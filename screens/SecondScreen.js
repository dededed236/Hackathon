import React, { useState } from 'react';
import { View, Text, ScrollView, Image, Modal, TouchableOpacity,Dimensions,StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Marker, Circle } from 'react-native-maps';
import styles from './styles/secondStyles';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function SecondScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedZone, setSelectedZone] = useState(null);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const dangerZones = [
    {
      id: 1,
      latitude: 14.8696,
      longitude: 102.0205,
      radius: 150,
      title: 'เหตุการณ์ทะเลาะวิวาท',
      advice: 'หลีกเลี่ยงการเข้าใกล้พื้นที่ และแจ้งเจ้าหน้าที่ทันทีหากพบเหตุผิดปกติ',
    },
    {
      id: 2,
      latitude: 14.8675,
      longitude: 102.0193,
      radius: 100,
      title: 'พบวัตถุต้องสงสัย',
      advice: 'กรุณาอยู่ห่างจากบริเวณนี้ และหลีกเลี่ยงการถ่ายภาพ',
    },
  ];

  const handleZonePress = (zone) => {
    setSelectedZone(zone);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
              <Text style={styles.logoText}> <Text style={styles.appName}>พื้นที่เสี่ยง</Text></Text>
              <TouchableOpacity onPress={() => setSidebarVisible(true)}>
                <Ionicons name="menu" size={28} color="#fff" />
              </TouchableOpacity>
      </View>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 14.8696,
          longitude: 102.0205,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        {dangerZones.map((zone) => (
          <React.Fragment key={zone.id}>
            <Circle
              center={{ latitude: zone.latitude, longitude: zone.longitude }}
              radius={zone.radius}
              strokeColor="rgba(255,0,0,0.8)"
              fillColor="rgba(255,0,0,0.3)"
            />
            <Marker
              coordinate={{ latitude: zone.latitude, longitude: zone.longitude }}
              onPress={() => handleZonePress(zone)}
              title="⚠️ พื้นที่เสี่ยง"
              description={zone.title}
            />
          </React.Fragment>
        ))}
      </MapView>

      {/* Popup Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>⚠️ {selectedZone?.title}</Text>
            <Text style={styles.modalText}>{selectedZone?.advice}</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>ปิด</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

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
                    <View style={sidebarStyles.menuItem}>
                      <Ionicons name="person" size={22} color="#801313" style={{ marginRight: 10 }} />
                      <Text style={sidebarStyles.menuText}>โปรไฟล์</Text>
                    </View>
                    <View style={sidebarStyles.menuItem}>
                      <Ionicons name="stats-chart" size={22} color="#801313" style={{ marginRight: 10 }} />
                      <Text style={sidebarStyles.menuText}>สถิติ</Text>
                    </View>
                    <View style={sidebarStyles.menuItem}>
                      <Ionicons name="newspaper" size={22} color="#801313" style={{ marginRight: 10 }} />
                      <Text style={sidebarStyles.menuText}>ข่าวสาร</Text>
                    </View>
                  </View>
                  <TouchableOpacity style={sidebarStyles.logoutBtn}>
                    <Text style={sidebarStyles.logoutText}>LOG OUT</Text>
                  </TouchableOpacity>
                </View>
              </SafeAreaView>
            )}
    </SafeAreaView>
  );
}


const sidebarStyles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: '110%',
    backgroundColor: 'rgba(0,0,0,0.15)',
    zIndex: 100,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  sidebar: {
    width: 200,
    height: '100%',
    backgroundColor: '#fff',
    paddingTop: 0,
    paddingHorizontal: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    elevation: 10,
  },
  sidebarHeader: {
    backgroundColor: '#801313',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  logo: {
    color: '#fff',
    fontSize: 18,
  },
  menu: {
    marginTop: 32,
    marginLeft: 24,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  menuText: {
    color: '#801313',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutBtn: {
    position: 'absolute',
    bottom: 32,
    left: 16,
    right: 16,
    backgroundColor: '#801313',
    borderRadius: 16,
    alignItems: 'center',
    paddingVertical: 12,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
