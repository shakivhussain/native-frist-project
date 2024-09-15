import { Text, View } from "react-native";
import Greet from "../components/introductionComponents/Greet";
import MyName from "../components/introductionComponents/MyName";
import XHandleComponent from "../components/introductionComponents/XHandleComponent";
import SubjectComponent from "../components/introductionComponents/SubjectComponent";
import AgeComponent from "../components/introductionComponents/AgeComponent";
import TextComponent from "../components/countCompoennt/TextComponent";
import ViewComponent from "../components/countCompoennt/ViewComponent";
import ButtonComponent from "../components/countCompoennt/ButtonComponent";
import ImageComponent from "../components/countCompoennt/ImageComponent";
import CardComponent from "../components/cardComponent/CardComponent";
import DynamicContent from "../components/dynamicContantent/DynamicContent";
import CarComponent from "../components/carComponent/CarComponent";



const Index = () => {
  return (
    <View>
      {/* <TextComponent />
      <ViewComponent />
      <ButtonComponent />
      <ImageComponent /> */}

      {/* <CardComponent /> */}

      {/* <DynamicContent /> */}

      <CarComponent />
    </View>
  );
};

export default Index;
