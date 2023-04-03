import { Text, View, TextInput, Image, Pressable } from "react-native";

import { Stack, IconButton } from "@react-native-material/core";

import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import tw from "twrnc";
import { useQuery } from "@apollo/client";
import { CONTINENT_QUERY } from "../gql/Query";

export default function Myprofile({ navigation }) {
  const textInputStyle = tw`h-10 w-84 p-3 rounded-md border border-blue-100`;
  const textLabelStyle = tw`text-blue-500 mt-2 font-bold font-sans text-xl`;
  const { data, loading } = useQuery(CONTINENT_QUERY);

  if (loading) {
    console.log("loading started");
    return <Text>loading</Text>;
  }
  console.log(data);

  return (
    <View style={tw` w-full h-full`}>
      <View
        style={tw`flex-row w-full h-10/40 bg-blue-600 items-center justify-start`}
      >
        <IconButton
          icon={(props) => <Icon name="arrow-left-box" {...props} />}
          onPress={() => navigation.navigate("Landing")}
          color="white"
          size="large"
        />
        <Text
          style={tw`text-md text-white dark:text-white m-22 font-black font-sans text-lg tracking-wide`}
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
        </View>
        <View style={tw`m-3`}>
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
            style={tw`w-84 h-20 flex-row bg-blue-500 items-center mt-10 `}
          >
            <Text style={tw`text-white`}>Save</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
