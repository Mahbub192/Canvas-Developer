import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import Divided from "./divided ";
import { useRouter } from "expo-router";

const Card = () => {
  const router = useRouter();
  const handleChatNavigation = () => {
    router.push("/Chat");
  };

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: "#cccfd1",
        borderRadius: 15,
        marginLeft: 20,
        marginRight: 20,
        marginVertical: 10,
      }}
    >
      <View>
        <View style={{ paddingTop: 10, paddingLeft: 10, paddingRight: 10 }}>
          <View style={styles.cardTitleContainer}>
            <Text style={styles.title}>Yarkon Park, Tel Aviv | Court #2</Text>
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
              <AntDesign name="clockcircleo" size={16} color="#145E94" />
              <Text style={styles.iconTestColor}>14:00</Text>
            </View>
            <View style={styles.cardIconText}>
              <Feather name="message-circle" size={16} color="#145E94" />
              <Text style={styles.iconTestColor}>26 message</Text>
            </View>
          </View>
        </View>
        <Divided />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            justifyContent: "space-between",
            paddingVertical: 10,
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <View style={styles.imageBorder}>
                <Image
                  source={{ uri: "https://i.pravatar.cc/250?u=12" }}
                  style={[styles.image, { position: "relative" }]}
                />
                <Image
                  source={require("../assets/images/download.png")}
                  style={styles.imageIcon}
                />
              </View>
              <View>
                <Text style={{ textAlign: "center" }}>Mandler T.</Text>
                <Text style={{ textAlign: "center" }}>(PRO)</Text>
              </View>
            </View>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <View style={styles.imageBorder}>
                <Image
                  source={{ uri: "https://i.pravatar.cc/250?u=12" }}
                  style={[styles.image, { position: "relative" }]}
                />
                <Image
                  source={require("../assets/images/download.png")}
                  style={styles.imageIcon}
                />
              </View>
              <View>
                <Text style={{ textAlign: "center" }}>Oz Y.</Text>
                <Text style={{ textAlign: "center" }}>(The Wiz)</Text>
              </View>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                color: "#145E94",
                marginTop: -30,
              }}
            >
              VS.
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <View>
                <Text style={styles.blankImage}>+</Text>
              </View>

              <View>
                <Text style={{ textAlign: "center" }}>player</Text>
                <Text style={{ textAlign: "center" }}>(nickname)</Text>
              </View>
            </View>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Text style={styles.blankImage}>+</Text>
              <Text style={{ textAlign: "center" }}>player</Text>
              <Text style={{ textAlign: "center" }}>(nickname)</Text>
            </View>
          </View>
        </View>
        <Divided />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 10,
          }}
        >
          <View style={{ flex: 0.7, marginTop: 3 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Ionicons name="water-outline" size={16} color="#145E94" />
              <Text style={{ color: "#B0AAAA", fontSize: 14 }}>
                25% Precipitation
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <AntDesign name="cloudo" size={16} color="#145E94" />
              <Text style={{ color: "#B0AAAA", fontSize: 14 }}>
                Weather - cloudy
              </Text>
            </View>
          </View>
          <View style={{ flex: 0.3, borderRadius: 10 }}>
            <LinearGradient
              style={{ borderBottomRightRadius: 15 }}
              colors={["#4c669f", "#3b5998", "#192f6a"]}
            >
              <TouchableOpacity
                style={{ paddingVertical: 10 }}
                onPress={handleChatNavigation}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  Chat
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
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
    height: 45,
    width: 45,
    borderRadius: 30,
  },
  imageIcon: {
    height: 15,
    width: 25,
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
