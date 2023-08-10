import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  HomeTab: undefined;
};

export type HomeTabParamList = {
  HomeScreen: undefined;
  FavouriteScreen: undefined;
  CartScreen: undefined;
};

export type RootStackNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  keyof RootStackParamList
>; // for useNavigation in RootStackNavigator
