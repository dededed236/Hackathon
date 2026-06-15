import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    height: 250,
    width: '100%',
  },
  reportBox: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
    padding: 15,
    borderColor: '#801313',
    borderWidth: 1,
    borderRadius: 10,
  },
  imageBox: {
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: '#F8EDEE',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  iconArea: {
    alignItems: 'center',
  },
  addText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  questionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  toggleButton: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F9DCDC',
    borderRadius: 10,
    width: 90,
  },
  selectedButton: {
    backgroundColor: '#F6BABA',
  },
  toggleText: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: '#801313',
    marginHorizontal: 50,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
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
});
