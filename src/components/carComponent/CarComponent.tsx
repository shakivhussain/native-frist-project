import { View, Text, Image, Button } from 'react-native'
import React from 'react'

const CarComponent = () => {

    const price = 2000000;

    const imageWidth = 300;

    const imageHeight = 300;

    const carName = "Lambo"

    const carRating = "4.9"

    const carDescription = "Hey This is nice car, you can buy now !"

    return (
        <View>

            <Button title="This is price "></Button>
            <Image
                source={
                    require("../../assets/lambo.png")}
                style={
                    {
                        width: imageWidth,
                        height: imageHeight
                    }
                } />

            <Text >"{carName}"</Text>
            <Text>{carRating}</Text>
            <Text>{carDescription}</Text>
            <Text>{price}</Text>
            <Button title="Add To Cart"></Button>


        </View>
    )
}

export default CarComponent