import { Text, View, Image, Pressable } from "react-native";
import { IconButton } from "@react-native-material/core";
import SvgComponent from "./Svg";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const locationIconSm = <Icon name="map-marker" size={12} color="#006EE9" />;
const locationIconMd = <Icon name="map-marker" size={20} color="#006EE9" />;
const briefcaseIcon = <Icon name="briefcase" size={12} color="#006EE9" />;
const userIcon = <Icon name="account" size={20} color="#006EE9" />;
const statisticIcon = <Icon name="chart-box" size={20} color="#006EE9" />;
const settingIcon = <Icon name="cog" size={20} color="#006EE9" />;
const logOutIcon = <Icon name="logout" size={20} color="#006EE9" />;

const buttonRowStyle = "w-full h-14 flex-row items-center ml-10";

export default function Landing({ navigation }) {
  return (
    <View className="flex-col bg-white">
      <View className="w-full h-1/6 bg-[#006EE9] justify-center">
        <Text className="text-md text-white m-4 font-black text-lg tracking-wide">
          Profile
        </Text>
      </View>
      <SvgComponent></SvgComponent>
      <View className="w-full h-4/6 bg-white items-center justify-end">
        {/* profilepicture */}
        <View className="absolute z-1 w-11/12 h-1/3 -top-[18%] bg-white items-center justify-center rounded-lg shadow-lg shadow-blue-500/100">
          <Image
            source={require("../example.jpg")}
            className="w-20 h-20 rounded-full -top-[10%]"
          ></Image>
          <Text className="text-md text-lg text-blue-600 mb-1 font-black tracking-wide -top-1/10">
            Philipp Williamson
          </Text>
          <Text className="text-md text-black italic tracking-wide -top-1/10">
            UI UX Designer
          </Text>
          <View className="flex-row divide-x-2 divide-blue-100 w-full h-6 mt-4 mb-4 ">
            <View className="flex-row justify-start items-center w-1/2">
              <IconButton icon={locationIconSm} color="#006EE9" container />
              <Text className="text-xs text-black">Malang,Indonesia</Text>
            </View>
            <View className="flex-row justify-start items-center w-1/2">
              <IconButton icon={briefcaseIcon} color="#006EE9" container />
              <Text className="text-xs text-black">2565 Task completed</Text>
            </View>
          </View>
        </View>
        <Pressable
          onPress={() => navigation.navigate("My Profile")}
          title="My profile"
          className={buttonRowStyle}
        >
          <IconButton icon={userIcon} color="#006EE9" />
          <Text className="ml-8">My Profile</Text>
        </Pressable>
        <Pressable title="Statistic" className={buttonRowStyle}>
          <IconButton icon={statisticIcon} color="#006EE9" />
          <Text className="ml-8">Statistic</Text>
        </Pressable>
        <Pressable title="Location" className={buttonRowStyle}>
          <IconButton icon={locationIconMd} color="#006EE9" />
          <Text className="ml-8">Location</Text>
        </Pressable>
        <Pressable title="Settings" className={buttonRowStyle}>
          <IconButton icon={settingIcon} color="#006EE9" />
          <Text className="ml-8">Settings</Text>
        </Pressable>
        <Pressable title="Logout" className={buttonRowStyle}>
          <IconButton icon={logOutIcon} color="#006EE9" />
          <Text className="ml-8">Logout</Text>
        </Pressable>
        <View className="flex-row w-full h-1/8 p-2 mt-20 bg-white items-center justify-evenly shadow-2xl shadow-blue-600/100 ">
          <IconButton
            icon={<Icon name="home-variant" size={30} color="#006EE966" />}
            color="#006EE966"
          />
          <IconButton
            icon={<Icon name="calendar-month" size={30} color="#006EE966" />}
          />
          <IconButton
            icon={<Icon name="account" size={30} color="#006EE9" />}
          />
        </View>
      </View>
    </View>
  );
}
