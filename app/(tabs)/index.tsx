import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Header from "@/components/Header";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import Divided from "@/components/divided ";
import Card from "@/components/Card";
import { StatusBar as ST } from "expo-status-bar";

const index = () => {
  return (
    <>
      <Tabs.Screen
        options={{
          header: () => <Header />,
        }}
      />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.filterSearch}>
            <View>
              <FontAwesome name="sliders" size={30} color="#145E94" />
            </View>
            <View style={styles.search}>
              <View>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  Date | hour...
                </Text>
              </View>
              <View>
                <AntDesign name="down" size={24} color="black" />
              </View>
            </View>
          </View>
          <Divided />
          <View style={[styles.doublesGames, { marginTop: 10 }]}>
            <Text>Doubles games</Text>
          </View>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollView>
        <ST style="light" />
      </SafeAreaView>
    </>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    paddingTop: StatusBar.currentHeight,
  },
  filterSearch: {
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: 15,
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 200,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#cccfd1",
    borderRadius: 15,
  },
  doublesGames: {
    marginLeft: 20,
    marginRight: 20,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#145E94",
    borderRadius: 15,
    width: 130,
    paddingHorizontal: 8,
    fontWeight: "bold",
    fontSize: 16,
  },
});
