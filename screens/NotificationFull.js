import React from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/notificationFullstyles';

const notifications = [
  {
    id: '1',
    type: 'danger',
    title: '🔴 [เตือนภัยจากสภ.เมืองนครราชสีมา] เหตุการณ์ใช้อาวุธบริเวณหน้าตลาดสุรนารี...',
    time: '12/06/68 12.06 น. ตำบลสุรนารี',
  },
  {
    id: '2',
    type: 'warning',
    title: '🟡 [เตือนภัยจากสภ.เมืองนครราชสีมา] มีรถประสานงาอย่างแรง...',
    time: '12/06/68 12.06 น. ตำบลสุรนารี',
  },
  // เพิ่มรายการอื่น ๆ ได้
];

export default function NotificationFull() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="notifications" size={28} color="#fff" />
        <Text style={styles.headerText}>แจ้งเตือนเหตุล่าสุด</Text>
      </View>
      {/* List */}
      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={[
            styles.notificationBox,
            item.type === 'danger' ? styles.redBox : styles.yellowBox
          ]}>
            <Text style={styles.notificationText}>{item.title}</Text>
            <Text style={styles.notificationTime}>{item.time}</Text>
          </View>
        )}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeAreaView>
  );
}