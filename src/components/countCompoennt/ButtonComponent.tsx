import { View, Text, Button, Pressable } from 'react-native'


const ButtonComponent = () => {
    return (
        <View>
            <Text>Button Component</Text>
            {/* <Button title='Hey this Clikable Button' color="841584" /> */}

            <Button title='tab me plase' color="red" onPress={() => {

                console.log("Button Pressed");
                alert("You pressed Button")



            }} ></Button>


            <Pressable onPress={() => {
                console.log("Pressable Button Clicked");
            }}>

                <Text style={{ color: "blue", fontSize: 16, fontWeight: 'bold' }} >Pressable Button</Text>
            </Pressable>

            <Pressable onPressIn={() => {
                console.log("onPressIn");
            }}>

                <Text style={{ color: "black", fontSize: 16, fontWeight: 'bold' } } >Pressable Button</Text>
            </Pressable>

            <Pressable onPressOut={() => {
                console.log("onPressOut");
            }}>

                <Text style={{ color: "orange", fontSize: 16, fontWeight: 'bold' }} >Pressable Button</Text>
            </Pressable>

            <Pressable onLongPress={() => {
                console.log("onLongPress");
            }}>

                <Text style={{ color: "red", fontSize: 16, fontWeight: 'bold' }} >Pressable Button</Text>
            </Pressable>

        </View>
    )
}

export default ButtonComponent