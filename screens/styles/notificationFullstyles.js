import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#801313',
    padding: 16,
    paddingTop: 32,
    justifyContent: 'center', // เพิ่มบรรทัดนี้เพื่อให้เนื้อหาอยู่ตรงกลางแนวนอน
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center', // เพิ่ม textAlign เพื่อให้ข้อความอยู่ตรงกลาง
    flex: 1, // เพิ่ม flex เพื่อให้กินพื้นที่เท่ากัน
  },
  notificationBox: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  redBox: {
    backgroundColor: '#ffe5e5',
    borderLeftWidth: 6,
    borderLeftColor: '#d32f2f',
  },
  yellowBox: {
    backgroundColor: '#fffbe5',
    borderLeftWidth: 6,
    borderLeftColor: '#ffb300',
  },
  notificationText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
  },
  notificationTime: {
    fontSize: 14,
    color: '#666',
  },
});