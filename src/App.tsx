import { registerRootComponent } from "expo";
import RootStack from "./navigations/RootStack";

export default function App() {
  return <RootStack />;
}

registerRootComponent(App);
