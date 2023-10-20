import React from "react";
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import bg1 from '../../assets/model-s.jpg';
import styles from'./styles';

const CarItem = (props) => {
    return (
        <View style={styles.carContainer}>
        <ImageBackground style={styles.bgImg} source={(bg1)}/>
        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $69,420</Text>
        </View>
      </View> 
    );
}
export default CarItem 