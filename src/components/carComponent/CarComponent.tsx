import { View, Text, Image, Button, StyleSheet, Pressable } from 'react-native'
import React from 'react'

// Define the Product interface
export interface Product {
    id: number;
    productName: string;
    price: string;
    rating: string;
    imageUrl: string;
    desc: string;
}

const CarComponent: React.FC<{ product: Product }> = ({ product } ) => {

    const price = product.price;

    const imageWidth = 300;

    const imageHeight = 300;

    const carName = product.productName

    const carRating = product.rating

    const carDescription = product.desc


    // const renderItem = ({ item }: { item: Product }) => {

    // }

    return (
        <View style={carStyle.container}>

            <Text style={carStyle.pill}>{price}</Text>

            <Image
                source={
                    { uri: product.imageUrl }
                }
                style={
                    {
                        width: "100%",
                        height: imageHeight
                    }
                } />

            <Text style={carStyle.heading}>{carName}</Text>

            <Text>{carRating}</Text>

            <Text>{carDescription}</Text>

            <Text>{price}</Text>

            <Pressable style={carStyle.button}>

                <Text style={carStyle.buttonText} >Add To Cart</Text>
            </Pressable>



        </View>
    )
}

const carStyle = StyleSheet.create({

    container: {
        padding: 20,
        backgroundColor: "white",

        marginHorizontal: 20,
        marginVertical: 20,
        elevation: 5

    },

    pill: {
        backgroundColor: "black",
        color: "white",
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 5,
        padding: 20,
        marginBottom: 10,
        width: 80,
        marginTop: 20,
        textAlign: "center",

    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 20
    },

    button: {
        backgroundColor: "black",
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 5,
        marginBottom: 10,
        marginTop: 20,
        textAlign: "center",
        width: "80%",
    },

    buttonText: {
        color: "white",
        fontWeight: "bold",
        padding: 10,

    }
})

export default CarComponent