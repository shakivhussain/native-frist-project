import { View, Text } from 'react-native'



interface ChildData{

    name:string,
    hobbies :string[]
}

// const ChildComponent = (props) => {

// DeStructure Data Like this
const ChildComponent = ({ name, hobbies } : ChildData) => {

    console.log(hobbies);

    return (
        <View>
            <Text>Child Component</Text>
        </View>
    )
}

export default ChildComponent