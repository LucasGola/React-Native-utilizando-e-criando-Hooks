import React, { useReducer, useMemo } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Stars from "../../../components/Stars";

const distanceinMeters = (distance) => {
  return `${distance}m`;
};

export default function Card({ name, img, distance, stars }) {
  const [selected, invertSelected] = useReducer((selected) => !selected, false);

  const distanceText = useMemo(() => distanceinMeters(distance), [distance])

  return <TouchableOpacity
    style={styles.card}
    onPress={invertSelected}
  >
    <Image source={img} accessibilityLabel={name} style={styles.img} />
    <View style={styles.infos}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Stars
          quantity={stars}
          editable={selected}
          bigSize={selected}
        />
      </View>
      <Text style={styles.distance}>{distanceText}</Text>
    </View>
  </TouchableOpacity>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f6f6f6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',

    // SHADOW UNDER CARDS
    // android
    elevation: 6,

    // IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  infos: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },
  name: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  distance: {
    fontSize: 12,
    lineHeight: 19,
  }
});