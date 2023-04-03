import { Text, View, Button, Image, Pressable } from "react-native";
import { Stack, IconButton } from "@react-native-material/core";

import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import tw from "twrnc";

export default function Landing({ navigation }) {
  return (
    <View style={tw`flex-col w-full h-full bg-white`}>
      <View
        style={tw`absolute z-1 -left-5 -top-5 w-100 h-2/10 bg-blue-600 justify-center rounded-full`}
      >
        <Text
          style={tw`text-md text-white dark:text-white m-10 font-black font-sans text-lg tracking-wide`}
        >
          Profile
        </Text>
      </View>
      <View style={tw`absolute z-1 w-full h-4/5 bg-white bottom-0`}>
        <View
          style={tw`left-1/20 -top-2/20 w-9/10 h-1/4 bg-white items-center justify-center rounded-lg shadow-lg shadow-blue-500/100`}
        >
          <Image
            source={require("../example.jpg")}
            style={tw`w-20 h-20 rounded-full -top-1/5`}
          ></Image>
          <Text
            style={tw`text-md text-lg text-blue-600 m-1 font-sans font-black tracking-wide -top-1/6`}
          >
            Philipp Williamson
          </Text>
          <Text
            style={tw`text-md text-black font-sans italic tracking-wide -top-1/6`}
          >
            UI UX Designer
          </Text>
          <View style={tw`flex-row justify-evenly w-full `}>
            <View style={tw`flex-row justify-start items-center w-1/2`}>
              <IconButton
                icon={(props) => <Icon name="map-marker" {...props} />}
                color="#006EE9"
                container
              />
              <Text style={tw`text-sm text-black font-sans `}>
                Malang,Indonesia
              </Text>
            </View>
            <View style={tw`flex-row justify-start items-center w-1/2 `}>
              <IconButton
                icon={(props) => <Icon name="account" {...props} />}
                color="#006EE9"
                size="small"
              />
              <Text style={tw`text-sm text-black font-sans `}>
                2565 Task completed
              </Text>
            </View>
          </View>
        </View>
        <Pressable
          onPress={() => navigation.navigate("My Profile")}
          title="My profile"
          style={tw`w-full h-20 flex-row items-center ml-10`}
        >
          <IconButton
            icon={(props) => <Icon name="account" {...props} />}
            color="#006EE9"
            container
          />
          {/* <ion-icon name="person"></ion-icon> */}
          <Text style={tw`ml-8`}>My Profile</Text>
        </Pressable>
        <Pressable
          title="Statistic"
          style={tw`w-full h-20 flex-row items-center ml-10`}
        >
          <IconButton
            icon={(props) => <Icon name="chart-box" {...props} />}
            color="#006EE9"
            container
          />
          {/* <ion-icon name="person"></ion-icon> */}
          <Text style={tw`ml-8`}>Statistic</Text>
        </Pressable>
        <Pressable
          title="Location"
          style={tw`w-full h-20 flex-row items-center ml-10`}
        >
          <IconButton
            icon={(props) => <Icon name="map-marker" {...props} />}
            color="#006EE9"
            container
          />
          {/* <ion-icon name="person"></ion-icon> */}
          <Text style={tw`ml-8`}>Location</Text>
        </Pressable>
        <Pressable
          title="Settings"
          style={tw`w-full h-20 flex-row items-center ml-10`}
        >
          <IconButton
            icon={(props) => <Icon name="cog" {...props} />}
            color="#006EE9"
            container
          />
          {/* <ion-icon name="person"></ion-icon> */}
          <Text style={tw`ml-8`}>Settings</Text>
        </Pressable>
        <Pressable
          title="Logout"
          style={tw`w-full h-20 flex-row items-center ml-10`}
        >
          <IconButton
            icon={(props) => <Icon name="logout" {...props} />}
            color="#006EE9"
            container
          />
          {/* <ion-icon name="person"></ion-icon> */}
          <Text style={tw`ml-8`}>Logout</Text>
        </Pressable>
      </View>
    </View>
  );
}
