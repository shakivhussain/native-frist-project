import { Text, View } from "react-native";
import Greet from "../components/introductionComponents/Greet";
import MyName from "../components/introductionComponents/MyName";
import XHandleComponent from "../components/introductionComponents/XHandleComponent";
import SubjectComponent from "../components/introductionComponents/SubjectComponent";
import AgeComponent from "../components/introductionComponents/AgeComponent";

const Index = () => {
  return (
    <View>
      <MyName />
      <Greet />
      <XHandleComponent />
      <SubjectComponent />
      <AgeComponent/>
      
    </View>
  );
};

export default Index;
