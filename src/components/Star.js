import React from "react";
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import stars from '../assets';

export default function Star({ onPress, disabled = true, filled, bigSize = false}) {
  const styles = stylesFunction(bigSize)

  const getImage = () => {
    if (filled) {
      return stars.star;
    }
    return stars.greyStar;
  };

  return <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
  >
    <Image source={getImage()} style={styles.eachStar} />
  </TouchableOpacity>;
}

const stylesFunction = (bigSize) => StyleSheet.create({
  eachStar: {
    width: bigSize ? 36 : 12,
    height: bigSize ? 36 : 12,
    marginRight: 2,
  }
});