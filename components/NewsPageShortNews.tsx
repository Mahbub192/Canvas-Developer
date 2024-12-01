import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

export default function NewsPageShortNews() {
  return (
    <View style={{ paddingVertical: 10 }}>
      <Text style={{ color: "#145E94", fontWeight: "900", fontSize: 14 }}>
        News
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 0.7 }}>
          <Text style={{ fontWeight: "900", fontSize: 15 }}>
            Lorem Ipsum is a term for a completely meaningless text - sometimes
            read
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <AntDesign name="clockcircleo" size={14} color="black" />
            <Text>an hour ago</Text>
            <Feather name="message-circle" size={14} color="black" />
            <Text>26 comments</Text>
          </View>
        </View>
        <View style={{ flex: 0.3 }}>
          <Image
            source={require("../assets/images/newsImage.png")}
            style={{ width: "100%", objectFit: "fill" }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
