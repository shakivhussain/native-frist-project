import { View, Text, Image } from 'react-native'


const ImageComponent = () => {
    return (
        
        <View>

            <Text>Lets Expolre Images!</Text>

            <Image
                source={require('../../assets/image.png')}
                style={{ width: 200, height: 200 }}
            />

            <Image
                source={{ uri: "https://legacy.reactjs.org/logo-og.png" }}
                style={{ width: 200, height: 200 }}
            ></Image>

        </View>
    )
}

export default ImageComponent