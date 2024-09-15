import { View, Text, Image, Button, StyleSheet } from 'react-native'
import React from 'react'

const CardComponent = () => {
    return (
        <View style={styles.container}>

            <Image source={require("../../assets/image.png")} style={styles.imageStyle} />

            <Text style={styles.heading}> Shakiv Husain </Text>

            <Text style={styles.textNormal}>My Name is Shakiv Husain I love React Native.</Text>

            <Button title='Press Me'onPress={() => { }} ></Button>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 50,
        paddingBottom: 40,
        margin: 20,
        alignItems: "center",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },

    imageStyle: {
        width: 90,
        height: 90,
        borderRadius: 100,
        marginBottom: 20
    },

    heading: {

        color: "black",
        fontWeight: "bold",
        fontSize: 28
    },

    textNormal: {
        color: "black",

        fontSize: 18
    }
})

export default CardComponent