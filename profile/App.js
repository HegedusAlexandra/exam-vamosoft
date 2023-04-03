import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Landing from "./components/Landing";
import Myprofile from "./components/Myprofile";

const Stack = createNativeStackNavigator();

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = "yhXbILxafWv4IJnL5B9IQ9DVqHTVJzIfxTzNS3n4kls";
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const httpLink = createHttpLink({
  uri: "https://graphql.contentful.com/content/v1/spaces/uqc7pcypi89w",
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="My Profile" component={Myprofile} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
