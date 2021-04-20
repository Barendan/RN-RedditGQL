import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const data = {
  posts: [
    {
      id: 1,
      title: "Hello World!",
      link: "https://google.com",
      imageUrl: "https://picsum.photos/200/300",
    },
  ],
};

export default function Posts(props) {
  const { navigation } = props;
  const { posts } = data;

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item, index }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-around'",
  },
});
