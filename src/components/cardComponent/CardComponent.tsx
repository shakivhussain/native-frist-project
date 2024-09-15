import { View, Text, Image, Button } from 'react-native'
import React from 'react'

const CardComponent = () => {
    return (
        <View>

            <Image
                source={require("../../assets/image.png")}
                style={
                    {
                        width: 120,
                        height: 120,
                    }

                } />

            <Text
                style={
                    {
                        textAlign: 'center',
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 18
                    }
                }> Shakiv Husain </Text>

            <Text
                style={
                    {
                        textAlign: "center",
                        fontSize: 18,


                    }
                }>My Name is Shakiv Husain I love React Native.</Text>


            <Button
                title='Press Me'

                onPress={() => {
                }

                }></Button>

        </View>
    )
}

export default CardComponent