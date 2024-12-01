import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import TabBar from "@/components/TabBar";
import { StatusBar } from "expo-status-bar";

const _layout = () => {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Game Board",
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: "News",
        }}
      />
      <Tabs.Screen
        name="rank"
        options={{
          title: "Rank",
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
