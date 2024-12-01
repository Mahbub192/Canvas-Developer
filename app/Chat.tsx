import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import Divided from "@/components/divided ";
import ActiveImage from "@/components/ActiveImage";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Chat = () => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState([
    {
      id: 1,
      name: "Penn N. (panther)",
      type: "other",
      mess: "Hey guys, thanks a lot for the impressive game, it was fun!",
      time: "20:00",
      avatar: "https://i.pravatar.cc/250?u=12",
    },
    {
      id: 2,
      name: "Penn N. (panther)",
      type: "other",
      mess: "Certainly, it was fantastic to see how long each point lasted. It's always fun to play with players",
      time: "20:00",
      avatar: "https://i.pravatar.cc/250?u=12",
    },
    {
      id: 3,
      name: "Penn N. (panther)",
      type: "other",
      mess: "The dedication of the ball was stunning.",
      time: "20:00",
      avatar: "https://i.pravatar.cc/250?u=12",
    },
    {
      id: 4,
      name: "Penn N. (panther)",
      type: "my",
      mess: "I'm crossing my fingers that the next game will be crazy!",
      time: "20:00",
      avatar: "https://i.pravatar.cc/250?u=12",
    },
  ]);

  const scrollViewRef = useRef<ScrollView>(null);

  const handleSend = () => {
    if (value.trim().length > 0) {
      const newMessage = {
        id: message.length + 1,
        name: "Penn N. (panther)",
        type: "my",
        mess: value,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        avatar: "https://i.pravatar.cc/250?u=12",
      };

      setMessage((prevMessages) => [...prevMessages, newMessage]);
      setValue("");

      setTimeout(
        () => scrollViewRef.current?.scrollToEnd({ animated: true }),
        100
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headerText}>
          Monday, February 23 | 14:00 - Tel Aviv
        </Text>
      </View>
      <Divided />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 50,
          marginHorizontal: 20,
          paddingVertical: 15,
        }}
      >
        <AntDesign name="sharealt" size={30} color="#000000" />
        <View style={{ flexDirection: "row", gap: 8 }}>
          <ActiveImage />
          <ActiveImage />
          <ActiveImage />
          <ActiveImage />
        </View>
      </View>
      <Divided />
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current?.scrollToEnd({ animated: true })
        }
      >
        <View style={styles.messageContainer}>
          {message.map((singleMess) => (
            <View
              key={singleMess.id}
              style={[
                styles.messageRow,
                singleMess.type === "my" && styles.myMessageRow,
              ]}
            >
              {singleMess.type === "other" && (
                <>
                  <Image
                    source={{ uri: singleMess.avatar }}
                    style={styles.avatar}
                  />
                  <View style={[styles.messageBubble]}>
                    <Text style={styles.name}>{singleMess.name}</Text>
                    <Text style={styles.mess}>{singleMess.mess}</Text>
                    <Text style={styles.time}>{singleMess.time}</Text>
                  </View>
                </>
              )}
              {singleMess.type === "my" && (
                <>
                  <Image
                    source={{ uri: singleMess.avatar }}
                    style={styles.avatar}
                  />
                  <View
                    style={[
                      styles.messageBubble,
                      singleMess.type === "my" && styles.myMessageBubble,
                    ]}
                  >
                    <Text style={[styles.name, { color: "white" }]}>
                      {singleMess.name}
                    </Text>
                    <Text style={[styles.mess, { color: "white" }]}>
                      {singleMess.mess}
                    </Text>
                    <Text style={[styles.time, { color: "white" }]}>
                      {singleMess.time}
                    </Text>
                  </View>
                </>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
      <Divided />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 20,
          paddingVertical: 20,
        }}
      >
        <View style={{ flex: 0.1 }}>
          <MaterialIcons name="add" size={30} color="#145E94" />
        </View>
        <View style={{ flex: 0.8 }}>
          <TextInput
            editable
            multiline
            numberOfLines={3}
            placeholder="Add a comment..."
            onChangeText={(text) => setValue(text)}
            value={value}
            style={styles.textInput}
          />
        </View>
        <View style={{ flex: 0.1 }}>
          <TouchableOpacity onPress={handleSend}>
            <FontAwesome6 name="circle-arrow-right" size={30} color="#145E94" />
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    color: "#145E94",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
    paddingTop: 10,
  },
  messageContainer: {
    marginTop: 10,
  },
  messageRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 15,
  },
  myMessageRow: {
    flexDirection: "row-reverse",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  messageBubble: {
    backgroundColor: "#f5f5f5",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 20,
    maxWidth: "75%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  myMessageBubble: {
    backgroundColor: "#007BFF",
    borderColor: "#007BFF",
  },
  name: {
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  mess: {
    fontSize: 14,
    color: "#333",
  },
  time: {
    fontSize: 12,
    color: "#999",
    textAlign: "right",
    marginTop: 5,
  },
  textInput: {
    padding: 10,
    fontSize: 16,
  },
});

export default Chat;
