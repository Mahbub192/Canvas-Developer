import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const rank = () => {
  return (
    <View>
      <Text
        style={{
          color: "#145E94",
          fontWeight: "900",
          fontSize: 18,
          textAlign: "center",
          marginTop: 50,
        }}
      >
        Up-Coming
      </Text>
      <StatusBar style="dark" />
    </View>
  );
};

export default rank;

const styles = StyleSheet.create({});
