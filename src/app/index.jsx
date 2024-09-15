import { Text, View } from "react-native";
import Greet from "../components/Greet";

import MyName from "../components/MyName";

const Index = () => {
  return (
    <View>
      <MyName />
      <Greet />
    </View>
  );
};

export default Index;
