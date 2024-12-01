import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          height: 70,
          backgroundColor: "black",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: "https://i.pravatar.cc/250?u=12" }}
            style={{ height: 50, width: 50, borderRadius: 30 }}
          />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ color: "white", fontSize: 14, fontWeight: "600" }}>
              Noam Penn (Panther)
            </Text>
            <Text style={{ color: "white", fontSize: 12 }}>
              a tennis player
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({});
