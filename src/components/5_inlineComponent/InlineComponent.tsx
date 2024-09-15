import { View, Text } from 'react-native'
import React from 'react'

// 3 Ways to create Component 

const InlineComponent = () => {
    return (
        <View>
            <View style={
                {
                    backgroundColor: "blue",
                    width: 100,
                    height: 100,
                    margin: 10,


                }
            } ></View>

            <View style={
                {
                    backgroundColor: "red",
                    width: 100,
                    height: 100,
                    margin: 10
                }
            } ></View>

            <View style={
                {
                    backgroundColor: "green",
                    width: 100,
                    height: 100,
                    margin: 10
                }
            } ></View>

            <View style={
                {
                    backgroundColor: "purple",
                    width: 100,
                    height: 100,
                    margin: 10
                }
            } ></View>
        </View>
    )
}

export default InlineComponent