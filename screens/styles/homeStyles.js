import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#801313',
    padding: 16,
  },
  logoText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  appName: {
    fontWeight: 'normal',
  },
  newsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 60,
  },
  newsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  alertSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewAll: {
    color: '#801313',
    fontWeight: 'bold',
  },
  alertBoxRed: {
    backgroundColor: '#FDE7E7',
    borderLeftWidth: 8,
    borderLeftColor: '#cc0000',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  alertBoxYellow: {
    backgroundColor: '#FFF8D7',
    borderLeftWidth: 8,
    borderLeftColor: '#ffcc00',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  alertText: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  alertTime: {
    color: '#666',
    fontSize: 12,
  },
  statSection: {
    marginTop: 20,
  },
  statHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  chartImage: {
    width: '100%',
    height: 200,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#801313',
    paddingVertical: 10,
  },
  navItem: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
