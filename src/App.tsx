import { registerRootComponent } from "expo";
import RootStackNavigator from "./navigations/RootStackNavigator";

export default function App() {
  return <RootStackNavigator />;
}

registerRootComponent(App);
