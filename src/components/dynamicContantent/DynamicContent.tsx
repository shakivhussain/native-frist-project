import { View, Text } from 'react-native'


const DynamicContent = () => {

    const username = "Shakiv Husain";
    const multiply = (a: number, b: number) => a * b;
    let me = { name: "huxn", age: 24 }
    return (
        <View>
            <Text>My Name is {username}</Text>
            <Text>Do Multiply  2 + 2 = {multiply(2, 2)}</Text>
            {/* // You cant render object directly! */}
            <Text>Me : {me.name}</Text> 
        </View>
    )
}

export default DynamicContent