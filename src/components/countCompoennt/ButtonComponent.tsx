import { View, Text, Button } from 'react-native'


const ButtonComponent = () => {
    return (
        <View>
            <Text>Button Component</Text>
            {/* <Button title='Hey this Clikable Button' color="841584" /> */}

            <Button title='tab me plase' color="red" onPress={() => {

                console.log("Button Pressed");
                alert("You pressed Button")

                

            }} ></Button>
        </View>
    )
}

export default ButtonComponent