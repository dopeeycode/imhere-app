import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  eventName: {
    color: '#fff',
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventDate: {
    color: '#6b6b6b',
    fontSize: 16
  },
  input: {
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    height: 56,
    color: '#fff',
    fontSize: 16,
    padding: 16,
    flex: 1,
    marginRight: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 28
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31cf67',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42
  }
})