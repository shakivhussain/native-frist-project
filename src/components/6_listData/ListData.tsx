import { View, Text, FlatList, } from 'react-native'
import React from 'react'

const ListData = () => {
    const fruits = [
        "Apple", "Banana", "Pin Apple", "Orange", "Apple", "Banana", "Pin Apple",
        "Orange", "Apple", "Banana", "Pin Apple", "Orange", "Orange", "Apple", "Banana", "Pin Apple", "Orange", "Orange", "Apple", "Banana", "Pin Apple", "Orange",
        "Orange", "Apple", "Banana", "Pin Apple", "Orange", "Orange", "Apple", "Banana", "Pin Apple", "Orange", "Orange", "Apple", "Banana", "Pin Apple", "Orange",
        "Orange", "Apple", "Banana", "Pin Apple", "Orange", "Orange", "Apple", "Banana", "Pin Apple", "Orange", "Orange", "Apple", "Banana", "Pin Apple", "Orange",
        "Orange", "Apple", "Banana", "Pin Apple", "Orange", "Orange", "Apple", "Banana", "Pin Apple", "Orange", "Orange", "Apple", "Banana", "Pin Apple", "Orange",
        "Orange", "Apple", "Banana", "Pin Apple", "Orange", "Orange", "Apple", "Banana", "Pin Apple", "Orange", "Orange", "Apple", "Banana", "Pin Apple", "Orange",
    ]

    return (
        <View>
            <FlatList
                data={fruits}
                keyExtractor={
                    
                item=>item
                    
                }
                renderItem={(item) => {
                    console.log({ item });
                    return <Text>{item.item}</Text>
                }} />

        </View>
    )
}

export default ListData