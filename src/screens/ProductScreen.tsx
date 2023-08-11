import { View, Image, TouchableOpacity, Text } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { RootStackNavigationProp } from "../navigations/types";
import { themeColors } from "../theme";

const ProductScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const { params: item } = useRoute<any>();
  //   console.log(params);

  return (
    <View className="flex-1">
      <Image
        source={require("../assets/images/beansBackground2.png")}
        style={{
          height: 300,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
        className="w-full absolute"
      />
      <SafeAreaView className="space-y-4">
        <View className="mx-4 flex-row justify-between items-center">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="rounded-full border-2 border-white p-2"
          >
            <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity className="rounded-full border-2 border-white p-2">
            <AntDesign name="heart" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View
          className="flex-row justify-center"
          style={{
            shadowColor: themeColors.bgDark,
            shadowRadius: 30,
            shadowOffset: { width: 0, height: 30 },
            shadowOpacity: 0.9,
          }}
        >
          <Image source={item.image} className="h-60 w-60" />
        </View>
        <View
          style={{ backgroundColor: themeColors.bgLight }}
          className="flex-row mx-4 items-center p-1 px-2 rounded-3xl w-16 space-x-1 opacity-90"
        >
          <AntDesign name="star" size={15} color="white" />
          <Text className="text-base font-semibold text-white">
            {item.stars}
          </Text>
        </View>
        <View className="mx-4 flex-row justify-between items-center">
          <Text
            style={{ color: themeColors.text }}
            className="text-3xl font-semibold"
          >
            {item.name}
          </Text>
          <Text
            style={{ color: themeColors.text }}
            className="text-lg font-semibold"
          >
            $ {item.price}
          </Text>
        </View>
        <View className="mx-4 space-y-2">
          <Text
            style={{ color: themeColors.text }}
            className="text-lg font-bold"
          >
            Coffee size
          </Text>

          {/* ลองทำต่อให้เป็น dynamic */}
          <View> 
            <TouchableOpacity
              className="px-8 p-3 rounded-full"
              style={{ backgroundColor: themeColors.bgLight }}
            >
              <Text className="text-white">Small</Text>
            </TouchableOpacity>
          </View>

        </View>
      </SafeAreaView>
    </View>
  );
};

export default ProductScreen;
