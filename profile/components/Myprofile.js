import { Text, View, TextInput, Image, Pressable, Button } from "react-native";
import { IconButton } from "@react-native-material/core";

import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { useQuery } from "@apollo/client";
import { CONTINENT_QUERY } from "../gql/Query";

export default function Myprofile({ navigation }) {
  const textInputStyle =
    "h-11 w-11/12 p-2 bg-white shadow-sm shadow-blue-500/50 rounded-xl border border-blue-50 ";
  const textLabelStyle =
    "h-7 w-11/12  mt-4 text-blue-500 font-semibold text-lg";
  const { data, loading } = useQuery(CONTINENT_QUERY);

  if (loading) {
    /* console.log("loading started"); */
    return <Text>loading</Text>;
  }
  /*   console.log(data); */

  return (
    <View className="w-full h-full bg-[#006EE9] flex-col">
      <View className="flex-row items-center justify-start w-full h-1/6 pt-10 bg-[#006EE9]">
        <View className="items-center justify-center w-8 h-8 m-4 bg-white rounded-lg ">
          <IconButton
            icon={<Icon name="arrow-left" size={18} color="#006EE9" />}
            onPress={() => navigation.navigate("Landing")}
            color="#006EE9"
          />
        </View>
        <Text className="text-md text-white ml-20 font-bold text-lg tracking-wide">
          My Profile
        </Text>
      </View>
      <View className="w-full h-5/6 bg-white rounded-t-[50] items-center justify-start pt-8">
        <View className="h-1/6 flex-row items-start justify-center">
          <Image
            source={require("../example.jpg")}
            className="ml-6 w-20 h-20 rounded-full"
          ></Image>
          <View className="relative -bottom-[15%] right-6 w-6 h-6 bg-white rounded-md items-center justify-center border-2 border-blue-500">
            <IconButton
              icon={<Icon name="pencil" size={14} color="#006EE9" />}
              color="#006EE9"
            />
          </View>
        </View>
        <Text className={textLabelStyle}>Name</Text>
        <TextInput className={textInputStyle} value={data.user.name} />
        <Text className={textLabelStyle}>Profession</Text>
        <TextInput className={textInputStyle} value={data.user.profession} />
        <Text className={textLabelStyle}>Date of Birth</Text>
        <View
          className={textInputStyle + "flex-row items-center justify-start"}
        >
          <Icon name="calendar-blank" size={18} color="#006EE9" />
          <TextInput
            className="ml-3"
            value={new Intl.DateTimeFormat("en-US", {
              month: "short",
              year: "numeric",
              day: "numeric",
            }).format(Date.parse(data.user.dateOfBirth))}
          />
        </View>

        <Text className={textLabelStyle}>Email</Text>
        <TextInput className={textInputStyle} value={data.user.email} />

        <Pressable
          title="Save"
          className="h-11 w-11/12 bg-blue-500 items-center justify-center mt-14 rounded-xl"
        >
          <Text className="text-white font-semibold text-lg">Save</Text>
        </Pressable>
      </View>
    </View>
  );
}
