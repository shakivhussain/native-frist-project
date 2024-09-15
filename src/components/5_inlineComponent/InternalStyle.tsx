import { View, Text, StyleSheet } from 'react-native'


const InternalStyle = () => {
    return (
        <View>
            <Text style={styles.textStyle}>InternalStyle</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        textStyle: {
            color: "blue",
            fontSize: 28,
            fontWeight: "bold",
            backgroundColor: "yellow",
            margin: 20,
            padding: 14,


        }
    }
)
export default InternalStyle