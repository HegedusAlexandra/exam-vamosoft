import { Text, View, TextInput, Image, Pressable } from "react-native";
import Svg, { Circle, Rect } from "react-native-svg";
import { Stack, IconButton } from "@react-native-material/core";

import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import tw from "twrnc";
import { useQuery } from "@apollo/client";
import { CONTINENT_QUERY } from "../gql/Query";

export default function Myprofile({ navigation }) {
  const textInputStyle = tw`h-10 w-84 p-3 rounded-md border border-blue-100`;
  const textLabelStyle = tw`text-blue-500 mt-5 mb-1 font-bold text-lg`;
  const { data, loading } = useQuery(CONTINENT_QUERY);

  if (loading) {
    console.log("loading started");
    return <Text>loading</Text>;
  }
  console.log(data);

  return (
    <View style={tw` w-full h-full`}>
      <View
        style={tw`flex-row w-full h-18/80 bg-[#006EE9] items-center justify-center`}
      >
        <View
          style={tw`absolute left-4 w-10 h-10 bg-white rounded-lg items-center justify-center`}
        >
          <IconButton
            icon={(props) => <Icon name="arrow-left" {...props} />}
            onPress={() => navigation.navigate("Landing")}
            color="#006EE9"
          />
        </View>
        <Text
          style={tw`text-md text-white dark:text-white font-bold text-lg tracking-wide`}
        >
          My Profile
        </Text>
      </View>
      <View
        style={tw`absolute z-1 -bottom-12 w-full h-36/40 bg-white rounded-[14] items-center justify-start pt-10`}
      >
        <View style={tw` h-1/6 flex-row items-start justify-center`}>
          <Image
            source={require("../example.jpg")}
            style={tw`w-24 h-24 rounded-full `}
          ></Image>
          <View
            style={tw`absolute right-0 bottom-2 w-8 h-8 bg-white rounded-lg items-center justify-center border-2 border-blue-500`}
          >
            <IconButton
              icon={(props) => <Icon name="pencil" {...props} />}
              color="#006EE9"
            />
          </View>
        </View>
        <View style={tw`m-4`}>
          <Text style={textLabelStyle}>Name</Text>
          <TextInput style={textInputStyle} value={data.user.name} />
          <Text style={textLabelStyle}>Profession</Text>
          <TextInput style={textInputStyle} value={data.user.profession} />
          <Text style={textLabelStyle}>Date of Birth</Text>
          <TextInput
            style={textInputStyle}
            value={new Intl.DateTimeFormat("en-US").format(
              Date.parse(data.user.dateOfBirth)
            )}
          />
          <Text style={textLabelStyle}>Email</Text>
          <TextInput style={textInputStyle} value={data.user.email} />
          <Pressable
            title="Save"
            style={tw`h-10 w-84 bg-blue-500 items-center justify-center mt-16 rounded-md `}
          >
            <Text style={tw`text-white font-bold text-lg`}>Save</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
