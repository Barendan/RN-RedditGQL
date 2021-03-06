import { ApolloClient } from "apollo-client";
import { split } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";

const HTTP_URL = "http://";
const HTTPS_URL = "https://";
const WS_URL = "ws://";
const WSS_URL = "wss://";
const DEV_URL = "10.0.0.8:4000/graphql";
const BASE_URL = "https://graphql-reddit1.herokuapp.com/graphql";

const httpLink = new HttpLink({
  uri: `${HTTP_URL}${DEV_URL}`,
});

const wsLink = new WebSocketLink({
  uri: `${WS_URL}${DEV_URL}`,
  options: {
    lazy: true,
    reconnect: true,
  },
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
