import { Text, View, Image, Pressable } from "react-native";
import { Stack, IconButton } from "@react-native-material/core";
import { styled } from "nativewind";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import SvgComponent from "./Svg";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledPressable = styled(Pressable);
const StyledIconButton = styled(IconButton);

const buttonRowStyle = "w-full h-14 flex-row items-center ml-10";

export default function Landing({ navigation }) {
  return (
    <StyledView className="flex-col bg-white">
      <StyledView className="w-full h-1/6 bg-[#006EE9] justify-center">
        <StyledText className="text-md text-white m-4 font-black text-lg tracking-wide">
          Profile
        </StyledText>
      </StyledView>
      <SvgComponent></SvgComponent>
      <StyledView className="w-full h-4/6 bg-white items-center justify-end">
        {/* profilepicture */}
        <StyledView className="absolute z-1 w-11/12 h-1/3 -top-[18%] bg-white items-center justify-center rounded-lg shadow-lg shadow-blue-500/100">
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
              <StyledIconButton
                icon={(props) => <Icon name="map-marker" {...props} />}
                color="#006EE9"
                container
              />
              <StyledText className="text-xs text-black">
                Malang,Indonesia
              </StyledText>
            </StyledView>
            <StyledView className="flex-row justify-start items-center w-1/2">
              <StyledIconButton
                icon={(props) => <Icon name="bag-checked" {...props} />}
                color="#006EE9"
                size="small"
              />
              <StyledText className="text-xs text-black">
                2565 Task completed
              </StyledText>
            </StyledView>
          </StyledView>
        </StyledView>
        <StyledPressable
          onPress={() => navigation.navigate("My Profile")}
          title="My profile"
          className={buttonRowStyle}
        >
          <StyledIconButton
            icon={(props) => <Icon name="account" {...props} />}
            color="#006EE9"
          />
          <StyledText className="ml-8">My Profile</StyledText>
        </StyledPressable>
        <StyledPressable title="Statistic" className={buttonRowStyle}>
          <StyledIconButton
            icon={(props) => <Icon name="chart-box" {...props} />}
            color="#006EE9"
          />
          <StyledText className="ml-8">Statistic</StyledText>
        </StyledPressable>
        <StyledPressable title="Location" className={buttonRowStyle}>
          <StyledIconButton
            icon={(props) => <Icon name="map-marker" {...props} />}
            color="#006EE9"
          />
          <StyledText className="ml-8">Location</StyledText>
        </StyledPressable>
        <StyledPressable title="Settings" className={buttonRowStyle}>
          <StyledIconButton
            icon={(props) => <Icon name="cog" {...props} />}
            color="#006EE9"
          />
          <StyledText className="ml-8">Settings</StyledText>
        </StyledPressable>
        <StyledPressable title="Logout" className={buttonRowStyle}>
          <StyledIconButton
            icon={(props) => <Icon name="logout" {...props} />}
            color="#006EE9"
          />
          <StyledText className="ml-8">Logout</StyledText>
        </StyledPressable>
        <StyledView className="flex-row w-full h-1/8 p-2 mt-20 bg-white items-center justify-evenly shadow-2xl shadow-blue-600/100 ">
          <StyledIconButton
            icon={(props) => <Icon name="home-variant" {...props} />}
            color="#006EE966"
          />
          <StyledIconButton
            icon={(props) => <Icon name="calendar-month" {...props} />}
            color="#006EE966"
          />
          <StyledIconButton
            icon={(props) => <Icon name="account" {...props} />}
            color="#006EE9"
          />
        </StyledView>
      </StyledView>
    </StyledView>
  );
}
