import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#801313',
    textAlign: 'center',
  },
  buttonGroup: {
    flexDirection: 'column',
    gap: 12,
    marginBottom: 30,
  },
  toggleButton: {
    borderWidth: 1.5,
    borderColor: '#801313',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  toggleButtonActive: {
    backgroundColor: '#801313',
  },
  toggleButtonText: {
    color: '#801313',
    fontSize: 16,
  },
  toggleButtonTextActive: {
    color: '#fff',
  },
  uploadButton: {
    backgroundColor: '#801313',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  uploadText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  previewImage: {
    marginTop: 20,
    width: '100%',
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
  },
});
