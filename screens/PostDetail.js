import React from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import RoundedButton from "../components/RoundedButton";
import { Ionicons } from "@expo/vector-icons";
import { Linking } from "expo";

const { width } = Dimensions.get("window");

export default function PostDetail({ route }) {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 32,
    color: "#161616",
    padding: 15,
  },
  image: {
    width: width,
    height: width,
    resizeMode: "cover",
  },
  saveIcon: {
    position: "relative",
    left: 20,
    zIndex: 8,
  },
});
