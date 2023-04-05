import { Text, View, Image, Pressable } from "react-native";
import { IconButton } from "@react-native-material/core";
import SvgComponent from "./Svg";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { styled } from "nativewind";

const StyledText = styled(Text);
const StyledView = styled(View);
const StyledImage = styled(Image);

const locationIconSm = <Icon name="map-marker" size={12} color="#006EE9" />;
const locationIconMd = <Icon name="map-marker" size={20} color="#006EE9" />;
const briefcaseIcon = <Icon name="briefcase" size={12} color="#006EE9" />;
const userIcon = <Icon name="account" size={20} color="#006EE9" />;
const statisticIcon = <Icon name="chart-box" size={20} color="#006EE9" />;
const settingIcon = <Icon name="cog" size={20} color="#006EE9" />;
const logOutIcon = <Icon name="logout" size={20} color="#006EE9" />;

const buttonRowStyle =
  "w-full h-10 flex-row items-center mt-4 pl-6 active:bg-blue-100";

export default function Landing({ navigation }) {
  return (
    <StyledView className="flex-col bg-white">
      <StyledView className="w-full h-[10%] ] bg-[#006EE9] justify-end">
        <StyledText className="text-md text-white top-[24%] m-4 font-black text-lg tracking-wide">
          Profile
        </StyledText>
      </StyledView>
      <SvgComponent></SvgComponent>
      <StyledView className="w-full h-3/4 bg-white items-center justify-end">
        <StyledView className="absolute z-1 w-11/12 h-1/3 -top-[8%] bg-white items-center justify-center rounded-lg shadow-lg shadow-blue-500/100">
          <StyledImage
            source={require("../example.jpg")}
            className="w-20 h-20 rounded-full -top-[10%]"
          ></StyledImage>
          <StyledText className="text-md text-lg text-blue-600 mb-1 font-black tracking-wide -top-1/10">
            Philipp Williamson
          </StyledText>
          <StyledText className="text-md text-black italic tracking-wide -top-1/10">
            UI UX Designer
          </StyledText>
          <StyledView className="flex-row divide-x-2 divide-blue-100 w-full h-6 mt-4 mb-4 ">
            <StyledView className="flex-row justify-start items-center w-1/2">
              <IconButton icon={locationIconSm} color="#006EE9" container />
              <StyledText className="text-xs text-black">
                Malang,Indonesia
              </StyledText>
            </StyledView>
            <StyledView className="flex-row justify-start items-center w-1/2">
              <IconButton icon={briefcaseIcon} color="#006EE9" container />
              <StyledText className="text-xs text-black">
                2565 Task completed
              </StyledText>
            </StyledView>
          </StyledView>
        </StyledView>
        <Pressable
          onPress={() => navigation.navigate("My Profile")}
          title="My profile"
          className={buttonRowStyle}
        >
          <IconButton icon={userIcon} color="#006EE9" />
          <StyledText className="ml-8">My Profile</StyledText>
        </Pressable>
        <Pressable title="Statistic" className={buttonRowStyle}>
          <IconButton icon={statisticIcon} color="#006EE9" />
          <StyledText className="ml-8">Statistic</StyledText>
        </Pressable>
        <Pressable title="Location" className={buttonRowStyle}>
          <IconButton icon={locationIconMd} color="#006EE9" />
          <StyledText className="ml-8">Location</StyledText>
        </Pressable>
        <Pressable title="Settings" className={buttonRowStyle}>
          <IconButton icon={settingIcon} color="#006EE9" />
          <StyledText className="ml-8">Settings</StyledText>
          <StyledView className="h-6 w-6 bg-blue-500 ml-[30%] items-center justify-center rounded-full">
            <StyledText className="font-bold color-white">2</StyledText>
          </StyledView>
        </Pressable>
        <Pressable title="Logout" className={buttonRowStyle}>
          <IconButton icon={logOutIcon} color="#006EE9" />
          <StyledText className="ml-8">Logout</StyledText>
        </Pressable>
        <StyledView className="flex-row w-full h-1/8 p-2 mt-20 bg-white items-center justify-evenly shadow-2xl shadow-blue-600/100 ">
          <IconButton
            icon={<Icon name="home-variant" size={30} color="#006EE966" />}
            color="#006EE966"
          />
          <IconButton
            icon={<Icon name="calendar-month" size={30} color="#006EE966" />}
            color="#006EE966"
          />
          <IconButton
            icon={<Icon name="account" size={30} color="#006EE9" />}
            color="#006EE966"
          />
        </StyledView>
      </StyledView>
    </StyledView>
  );
}
