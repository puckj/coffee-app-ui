import { View, Image, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { RootStackNavigationProp } from "../navigations/types";
import { themeColors } from "../theme";
import { size } from "../constants";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ProductScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const { params: item } = useRoute<any>();
  const [activeSize, setActiveSize] = useState("Medium");
  const [isFavourite, setIsFavourite] = useState(false);
  const [quantity, setQuantity] = useState(1);
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
          <TouchableOpacity
            onPress={() => setIsFavourite(!isFavourite)}
            className="rounded-full border-2 border-white p-2"
          >
            <AntDesign
              name="heart"
              size={24}
              color={isFavourite ? "red" : "white"}
            />
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

          {/* Size buttons */}
          <View className="flex-row justify-between">
            {size.map((item, index) => {
              console.log(item, index);
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => setActiveSize(item)}
                  className="p-3 px-8 rounded-full"
                  style={{
                    backgroundColor:
                      activeSize === item
                        ? themeColors.bgLight
                        : "rgba(0,0,0,0.07)",
                  }}
                >
                  <Text
                    className={
                      activeSize === item ? "text-white" : "text-gray-700"
                    }
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View className="mx-4 space-y-2 h-28">
          <Text
            style={{ color: themeColors.text }}
            className="text-lg font-bold"
          >
            About
          </Text>
          <Text className="text-gray-600">{item.desc}</Text>
        </View>
        <View className="flex-row justify-between items-center mx-4 mb-2">
          <View className="flex-row items-center space-x-1">
            <Text className="text-base text-gray-700 font-semibold opacity-60">
              Volume
            </Text>
            <Text className="text-base text-black font-semibold">
              {item.volume}
            </Text>
          </View>
          <View
            className="flex-row items-center space-x-4 border-gray-500 border
          rounded-full p-1 px-4"
          >
            <TouchableOpacity
              onPress={() => quantity !== 0 && setQuantity(quantity - 1)}
            >
              <Entypo name="minus" size={20} color={themeColors.text} />
            </TouchableOpacity>
            <Text
              style={{ color: themeColors.text }}
              className="font-extrabold text-lg"
            >
              {quantity}
            </Text>
            <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
              <Entypo name="plus" size={20} color={themeColors.text} />
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-row justify-between items-center mx-4">
          <TouchableOpacity className="border-gray-400 border p-4 rounded-full">
            <MaterialCommunityIcons
              name="shopping-outline"
              size={30}
              color="gray"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: themeColors.bgLight }}
            className="p-5 rounded-full flex-1 ml-4"
          >
            <Text className="text-center text-white text-base font-semibold">Buy now</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ProductScreen;