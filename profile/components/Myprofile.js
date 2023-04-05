import { Text, View, TextInput, Image, Pressable, Button } from "react-native";
import { IconButton } from "@react-native-material/core";

import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { useQuery } from "@apollo/client";
import { CONTINENT_QUERY } from "../gql/Query";

import { styled } from "nativewind";

const StyledText = styled(Text);
const StyledView = styled(View);
const StyledImage = styled(Image);

export default function Myprofile({ navigation }) {
  const StyledTextInputStyle =
    "h-11 w-11/12 p-2 bg-white shadow-sm shadow-blue-500/50 rounded-xl border border-blue-50 ";
  const StyledTextLabelStyle =
    "h-7 w-11/12  mt-4 text-blue-500 font-semibold text-lg";
  const { data, loading } = useQuery(CONTINENT_QUERY);

  if (loading) {
    /* console.log("loading started"); */
    return <StyledText>loading</StyledText>;
  }
  /*   console.log(data); */

  return (
    <StyledView className="w-full h-full bg-[#006EE9] flex-col">
      <StyledView className="flex-row items-center justify-start w-full h-1/5 pt-10 bg-[#006EE9]">
        <StyledView className="items-center justify-center w-8 h-8 m-4 bg-white rounded-lg ">
          <IconButton
            icon={<Icon name="arrow-left" size={18} color="#006EE9" />}
            onPress={() => navigation.navigate("Landing")}
            color="#006EE9"
          />
        </StyledView>
        <StyledText className="text-md text-white ml-20 font-bold text-lg tracking-wide">
          My Profile
        </StyledText>
      </StyledView>
      <StyledView className="w-full h-5/6 bg-white rounded-t-[50] items-center justify-start pt-8">
        <StyledView className="h-1/6 flex-row items-start justify-center">
          <StyledImage
            source={require("../example.jpg")}
            className="ml-6 w-20 h-20 rounded-full"
          ></StyledImage>
          <StyledView className="relative -bottom-[15%] right-6 w-6 h-6 bg-white rounded-md items-center justify-center border-2 border-blue-500">
            <IconButton
              icon={<Icon name="pencil" size={14} color="#006EE9" />}
              color="#006EE9"
            />
          </StyledView>
        </StyledView>
        <StyledText className={StyledTextLabelStyle}>Name</StyledText>
        <TextInput className={StyledTextInputStyle} value={data.user.name} />
        <StyledText className={StyledTextLabelStyle}>Profession</StyledText>
        <TextInput
          className={StyledTextInputStyle}
          value={data.user.profession}
        />
        <StyledText className={StyledTextLabelStyle}>Date of Birth</StyledText>
        <StyledView
          className={
            StyledTextInputStyle + "flex-row items-center justify-start"
          }
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
        </StyledView>

        <StyledText className={StyledTextLabelStyle}>Email</StyledText>
        <TextInput className={StyledTextInputStyle} value={data.user.email} />

        <Pressable
          title="Save"
          className="h-11 w-11/12 bg-blue-500 items-center justify-center mt-14 rounded-xl"
        >
          <StyledText className="text-white font-semibold text-lg">
            Save
          </StyledText>
        </Pressable>
      </StyledView>
    </StyledView>
  );
}
