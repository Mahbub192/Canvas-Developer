import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ActiveImage = () => {
  return (
    <View>
      <Image
        source={{ uri: "https://i.pravatar.cc/250?u=12" }}
        style={[styles.image, { position: "relative" }]}
      />
      <View
        style={{
          height: 12,
          width: 12,
          backgroundColor: "#88EC65",
          borderRadius: 100,
          position: "absolute",
          left: 30,
          bottom: 2,
        }}
      ></View>
    </View>
  );
};

export default ActiveImage;

const styles = StyleSheet.create({
  image: {
    height: 45,
    width: 45,
    borderRadius: 30,
  },
});
