import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';



const styles = StyleSheet.create({
carContainer: {
    width: '100%',
    height: '100%',
  },
  titles: {
   
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',

  },
  title: {
    fontSize: 40,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 16,
    color: '#5c5e62',
  },
  bgImg: {
    width: '100%',
    height: '100%',
    resizeMode:'contain',
    position: 'absolute',
  },
});
export default styles