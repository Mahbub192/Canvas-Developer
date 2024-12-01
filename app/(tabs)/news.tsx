import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Header from "@/components/Header";
import NewsBanner from "@/components/NewsBanner";

import Divided from "@/components/divided ";
import NewsPageShortNews from "@/components/NewsPageShortNews";
import { AntDesign, Feather } from "@expo/vector-icons";
import { StatusBar as ST } from "expo-status-bar";

const News = () => {
  return (
    <>
      <Tabs.Screen
        options={{
          header: () => <Header />,
        }}
      />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <NewsBanner />
          <Divided />
          <NewsPageShortNews />
          <Divided />
          <NewsPageShortNews />
          <Divided />
          <View style={{ paddingVertical: 10 }}>
            <View style={styles.yarkonParkCart}>
              <View>
                <View
                  style={{ paddingTop: 10, paddingLeft: 10, paddingRight: 10 }}
                >
                  <View style={styles.cardTitleContainer}>
                    <Text style={styles.title}>
                      Yarkon Park, Tel Aviv | Court #2
                    </Text>
                    <View>
                      <AntDesign name="sharealt" size={20} color="#145E94" />
                    </View>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View style={styles.cardIconText}>
                      <AntDesign name="calendar" size={16} color="#145E94" />
                      <Text style={styles.iconTestColor}>02/24/2023</Text>
                    </View>
                    <View style={styles.cardIconText}>
                      <AntDesign
                        name="clockcircleo"
                        size={16}
                        color="#145E94"
                      />
                      <Text style={styles.iconTestColor}>14:00</Text>
                    </View>
                    <View style={styles.cardIconText}>
                      <Feather
                        name="message-circle"
                        size={16}
                        color="#145E94"
                      />
                      <Text style={styles.iconTestColor}>26 message</Text>
                    </View>
                  </View>
                </View>
                <Divided />
                <View style={styles.yarkonParkCartImageContainer}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <View style={styles.singleImage}>
                      <View style={styles.imageBorder}>
                        <Image
                          source={{ uri: "https://i.pravatar.cc/250?u=12" }}
                          style={[styles.image, { position: "relative" }]}
                        />
                        <Image
                          source={require("../../assets/images/download.png")}
                          style={styles.imageIcon}
                        />
                      </View>
                      <View>
                        <Text style={{ textAlign: "center" }}>Mandler T.</Text>
                        <Text style={{ textAlign: "center" }}>(PRO)</Text>
                      </View>
                    </View>
                    <View style={styles.singleImage}>
                      <View style={styles.imageBorder}>
                        <Image
                          source={{ uri: "https://i.pravatar.cc/250?u=12" }}
                          style={[styles.image, { position: "relative" }]}
                        />
                        <Image
                          source={require("../../assets/images/download.png")}
                          style={styles.imageIcon}
                        />
                      </View>
                      <View>
                        <Text style={{ textAlign: "center" }}>Oz Y.</Text>
                        <Text style={{ textAlign: "center" }}>(The Wiz)</Text>
                      </View>
                    </View>
                  </View>
                  <View style={{ flexDirection: "column", gap: 5 }}>
                    <Text style={{ fontSize: 16, fontWeight: "900" }}>1-3</Text>
                    <Text style={styles.numberText}>1-0</Text>
                    <Text style={styles.numberText}>1-2</Text>
                    <Text style={{ fontSize: 16, fontWeight: "900" }}>4-3</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <View style={styles.singleImage}>
                      <View style={styles.imageBorder}>
                        <Image
                          source={{ uri: "https://i.pravatar.cc/250?u=12" }}
                          style={[styles.image, { position: "relative" }]}
                        />
                        <Image
                          source={require("../../assets/images/download.png")}
                          style={styles.imageIcon}
                        />
                      </View>
                      <View>
                        <Text style={{ textAlign: "center" }}>Mandler T.</Text>
                        <Text style={{ textAlign: "center" }}>(PRO)</Text>
                      </View>
                    </View>
                    <View style={styles.singleImage}>
                      <View style={styles.imageBorder}>
                        <Image
                          source={{ uri: "https://i.pravatar.cc/250?u=12" }}
                          style={[styles.image, { position: "relative" }]}
                        />
                        <Image
                          source={require("../../assets/images/download.png")}
                          style={styles.imageIcon}
                        />
                      </View>
                      <View>
                        <Text style={{ textAlign: "center" }}>Oz Y.</Text>
                        <Text style={{ textAlign: "center" }}>(The Wiz)</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Divided />
            <View style={{ paddingVertical: 10 }}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "#cccfd1",
                  borderRadius: 15,
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      color: "#145E94",
                      fontWeight: "900",
                      fontSize: 14,
                    }}
                  >
                    System message
                  </Text>
                  <AntDesign name="sharealt" size={20} color="#145E94" />
                </View>
                <View>
                  <Text style={{ fontWeight: "900", fontSize: 15 }}>
                    Lorem Ipsum is a term for a completely common meaningless
                    text - sometimes also called Lorem Ipsum!
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 8,
                      paddingVertical: 8,
                    }}
                  >
                    <AntDesign name="clockcircleo" size={14} color="black" />
                    <Text>an hour ago</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <ST style="light" />
      </SafeAreaView>
    </>
  );
};

export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 45,
    marginHorizontal: 20,
    paddingTop: StatusBar.currentHeight,
  },
  yarkonParkCart: {
    borderWidth: 1,
    borderColor: "#cccfd1",
    borderRadius: 15,
  },
  yarkonParkCartImageContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  singleImage: { flexDirection: "column", alignItems: "center" },
  numberText: {
    fontSize: 15,
    fontWeight: "800",
    borderWidth: 1,
    borderColor: "#cccfd1",
    borderRadius: 5,
  },
  cardTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 5,
  },
  title: {
    color: "#145E94",
    fontWeight: "bold",
    fontSize: 16,
  },
  cardIconText: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  iconTestColor: { color: "#B0AAAA", fontSize: 14 },
  imageBorder: {
    borderWidth: 1,
    borderColor: "#145E94",
    borderRadius: 30,
    padding: 3,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 30,
  },
  imageIcon: {
    height: 12,
    width: 18,
    borderRadius: 2,
    position: "absolute",
    bottom: 5,
    left: 35,
  },
  blankImage: {
    fontSize: 25,
    paddingVertical: 7,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderRadius: 100,
    borderStyle: "dotted",
  },
});
