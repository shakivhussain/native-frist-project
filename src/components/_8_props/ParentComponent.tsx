import { View, Text } from 'react-native'
import React from 'react'
import ChildComponent from './ChildComponent'


const ParentComponent = () => {
    return (
        <View>
            <Text>Parent Component</Text>

            {/* With the help of props we can pass  multiple types argyments. */}
            <ChildComponent name="Shakiv Husain" hobbies={[
                "Music",
                "Coding",
                "Book Reading"
            ]} />
        </View>
    )
}

export default ParentComponent