import React from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import RoundedButton from "../components/RoundedButton";
import { Ionicons } from "@expo/vector-icons";
import { Linking } from "expo";

const { width } = Dimensions.get("window");

export default function PostDetail({ route, navigation }) {
  const { params } = route;
  const { post } = params;
  const { title, link, imageUrl } = post;

  return (
    <View style={styles.container}>
      {!!imageUrl && <Image style={styles.image} source={{ uri: imageUrl }} />}
      <Text style={styles.text}>{title}</Text>
      <RoundedButton
        text={link}
        textColor="#fff"
        backgroundColor="rgb(75,148,214)"
        onPress={() => {
          Linking.openUrl(link).catch((err) => console.log(err));
        }}
        icon={
          <Ionicons
            name="md-link"
            size={20}
            color={"#fff"}
            style={styles.saveIcon}
          />
        }
      />
      <RoundedButton
        text="Edit"
        textColor="#fff"
        backgroundColor="#a9a9a9"
        onPress={() => {
          navigation.navigate("EditForm", { post: post });
        }}
        icon={
          <Ionicons
            name="md-options"
            size={20}
            color={"#fff"}
            style={styles.saveIcon}
          />
        }
      />
    </View>
  );
}

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
