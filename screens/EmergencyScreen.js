import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Image, 
  StyleSheet, 
  TextInput, 
  Dimensions 
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles/emergencyStyles';

const { width } = Dimensions.get('window');

export default function EmergencyScreen({ navigation }) {
  const [selectedType, setSelectedType] = useState(null);
  const [imageUri, setImageUri] = useState(null);
  const [location, setLocation] = useState(null);
  const [description, setDescription] = useState('');
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.7,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
    })();
  }, []);

  const types = [
    { key: 'ambulance', label: 'เรียกรถฉุกเฉิน', icon: 'ambulance' },
    { key: 'fire', label: 'เรียกรถดับเพลิง', icon: 'fire' },
    { key: 'road', label: 'เหตุบนท้องถนน', icon: 'road-variant' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logoText}>
          <Text style={styles.appName}>แจ้งเหตุ</Text>
        </Text>
        <TouchableOpacity onPress={() => setSidebarVisible(true)}>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      {location && (
        <MapView
          style={styles.map}
          region={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker coordinate={location} title="ตำแหน่งของคุณ" />
        </MapView>
      )}

      {/* กล่องเพิ่มรูป */}
      <View style={styles.reportBox}>
        <TouchableOpacity style={styles.imageBox} onPress={pickImage}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.image} />
          ) : (
            <View style={styles.iconArea}>
              <Ionicons name="camera" size={36} color="#000" />
              <Text style={styles.addText}>เพิ่มรูปเร็ว</Text>
            </View>
          )}
        </TouchableOpacity>
        <TextInput
          style={styles.questionText}
          placeholder="เกิดอะไรขึ้น ?"
          value={description}
          onChangeText={setDescription}
        />
      </View>

      {/* ปุ่มเหตุการณ์ */}
      <View style={styles.buttonGroup}>
        {types.map((item) => (
          <TouchableOpacity
            key={item.key}
            style={[
              styles.toggleButton,
              selectedType === item.key && styles.selectedButton,
            ]}
            onPress={() =>
              setSelectedType(selectedType === item.key ? null : item.key)
            }
          >
            <MaterialCommunityIcons name={item.icon} size={24} color="#801313" />
            <Text style={styles.toggleText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* ปุ่มแจ้งเหตุ */}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>แจ้งเหตุ</Text>
      </TouchableOpacity>

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