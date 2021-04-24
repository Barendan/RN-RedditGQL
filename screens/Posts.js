import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Ionicons } from "@expo/vector-icons";
import Post from "../components/Post";

const POSTS_QUERY = gql`
  query {
    posts {
      id
      title
      link
      imageUrl
    }
  }
`;

const POSTS_SUBSCRIPTION = gql`
  subscription {
    postAdded {
      id
      title
      link
      imageUrl
    }
  }
`;

export default function Posts(props) {
  const { navigation } = props;
  const { subscribeToMore, loading, error, data } = useQuery(POSTS_QUERY, {
    variables: {},
  });

  useEffect(() => {
    subscribeToMore({
      document: POSTS_SUBSCRIPTION,
      variables: {},
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const newPostItem = subscriptionData.data.postAdded;
        return Object.assign({}, prev, {
          posts: [newPostItem, ...prev.posts],
        });
      },
    });
  }, []);

  if (loading) {
    return <ActivityIndicator style={{ ...StyleSheet.absoluteFillObject }} />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  const { posts } = data;

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item, index }) => (
          <Post
            post={item}
            onPress={() => navigation.navigate("Detail", { post: item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
