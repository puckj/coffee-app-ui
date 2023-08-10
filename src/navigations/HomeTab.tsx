import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { HomeTabParamList } from "./types";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { themeColors } from "../theme";
import { View } from "react-native";
import { RouteProp } from "@react-navigation/native";

const Tab = createBottomTabNavigator<HomeTabParamList>();

const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => menuIcons(route, focused),
        tabBarStyle: {
          marginBottom: 20,
          paddingBottom:1,
          height: 75,
          borderRadius: 100,
          marginHorizontal: 20,
          backgroundColor: themeColors.bgLight,
        },
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="FavouriteScreen" component={HomeScreen} />
      <Tab.Screen name="CartScreen" component={HomeScreen} />
    </Tab.Navigator>
  );
};
export default HomeTab;

const menuIcons = (
  route: RouteProp<HomeTabParamList, keyof HomeTabParamList>,
  focused: boolean
) => {
  let icon;
  if (route.name === "HomeScreen") {
    icon = focused ? (
      <Ionicons name="home" size={30} color={themeColors.bgLight} />
    ) : (
      <Ionicons name="home-outline" size={30} color="white" />
    );
  } else if (route.name === "FavouriteScreen") {
    icon = focused ? (
      <Entypo name="heart" size={30} color={themeColors.bgLight} />
    ) : (
      <Entypo name="heart-outlined" size={30} color="white" />
    );
  } else if (route.name === "CartScreen") {
    icon = focused ? (
      <Ionicons name="cart" size={30} color={themeColors.bgLight} />
    ) : (
      <Ionicons name="cart-outline" size={30} color="white" />
    );
  }
  let buttonClass = focused ? "bg-white" : "";
  return (
    <View
      className={"flex items-center rounded-full p-3 shadow " + buttonClass}
    >
      {icon}
    </View>
  );
};
