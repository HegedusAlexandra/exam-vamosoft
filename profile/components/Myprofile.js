import { Text, View, TextInput, Image, Pressable, Button } from "react-native";
import { IconButton } from "@react-native-material/core";

import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { useQuery } from "@apollo/client";
import { CONTINENT_QUERY } from "../gql/Query";

import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

console.log(Icon);
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
    <StyledView className="w-full h-full bg-[#006EE9] flex-col">
      <StyledView className="flex-row items-center justify-center w-full h-1/6 pt-10 bg-[#006EE9]">
        <StyledView className="absolute left-4 top-20 items-center justify-center w-8 h-8 bg-white rounded-lg ">
          <IconButton
            icon={(props) => <Icon name="arrow-left" {...props} />}
            onPress={() => navigation.navigate("Landing")}
            color="#006EE9"
          />
        </StyledView>
        <StyledText className="text-md text-white dark:text-white font-bold text-lg tracking-wide">
          My Profile
        </StyledText>
      </StyledView>
      <StyledView className="w-full h-5/6 bg-white rounded-t-[50] items-center justify-start pt-8">
        <StyledView className="h-1/6 flex-row items-start justify-center">
          <StyledImage
            source={require("../example.jpg")}
            className="w-20 h-20 rounded-full"
          ></StyledImage>
          <StyledView className="absolute right-0 bottom-2 w-8 h-8 bg-white rounded-lg items-center justify-center border-2 border-blue-500">
            <IconButton
              icon={(props) => <Icon name="pencil" {...props} />}
              color="#006EE9"
            />
          </StyledView>
        </StyledView>
        <StyledText className={textLabelStyle}>Name</StyledText>
        <TextInput className={textInputStyle} value={data.user.name} />
        <StyledText className={textLabelStyle}>Profession</StyledText>
        <TextInput className={textInputStyle} value={data.user.profession} />
        <StyledText className={textLabelStyle}>Date of Birth</StyledText>
        <TextInput
          className={textInputStyle}
          value={new Intl.DateTimeFormat("en-US").format(
            Date.parse(data.user.dateOfBirth)
          )}
        />
        <StyledText className={textLabelStyle}>Email</StyledText>
        <TextInput className={textInputStyle} value={data.user.email} />
        <Pressable
          title="Save"
          className="h-11 w-11/12 bg-blue-500 items-center justify-center mt-14 rounded-xl"
        >
          <Text className="text-white font-semibold text-lg">Save</Text>
        </Pressable>
      </StyledView>
    </StyledView>
  );
}
