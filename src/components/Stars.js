import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Star from "./Star";

export default function Stars({
  quantity: oldQuantity,
  editable = true,
  bigSize = true,
}) {
  const [quantity, setQuantity] = useState(oldQuantity);

  const RenderStars = () => {
    const listSars = [];

    for (let i = 0; i < 5; i++) {
      listSars.push(
        <Star
          key={i}
          onPress={() => setQuantity(i + 1)}
          disabled={!editable}
          filled={i < quantity}
          bigSize={bigSize}
        />
      );
    }
    return listSars;
  };

  return <View style={styles.allStars}>
    <RenderStars />
  </View>;
}

const styles = StyleSheet.create({
  allStars: {
    flexDirection: 'row',
  }
});