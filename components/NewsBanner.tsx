import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const NewsBanner = () => {
  return (
    <View>
      <Image
        source={require("../assets/images/banner.png")}
        style={styles.bannerImage}
      />
      <View style={styles.bannerContainer}>
        <Text style={styles.bannerText}>
          Lorem Ipsum is a nickname for such a completely meaningless text -
          some
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Text style={styles.bannerSubText}>Lorem Ipsum is.</Text>
          <Text style={styles.bannerSubText}>4 minutes of reading</Text>
          <AntDesign name="clockcircleo" size={14} color="white" />
        </View>
      </View>
    </View>
  );
};

export default NewsBanner;

const styles = StyleSheet.create({
  bannerContainer: { position: "absolute", bottom: 15, marginLeft: 10 },
  bannerImage: { objectFit: "fill", width: "100%", position: "relative" },
  bannerText: { fontSize: 16, fontWeight: "900", color: "white" },
  bannerSubText: { fontSize: 14, fontWeight: "600", color: "white" },
});
