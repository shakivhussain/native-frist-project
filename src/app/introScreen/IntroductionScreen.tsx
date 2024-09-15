import { View, Text } from 'react-native'
import React from 'react'
import MyName from '@/src/components/introductionComponents/MyName'
import AgeComponent from '@/src/components/introductionComponents/AgeComponent'
import SubjectComponent from '@/src/components/introductionComponents/SubjectComponent'
import XHandleComponent from '@/src/components/introductionComponents/XHandleComponent'

const IntroductionScreen = () => {
    return (
        <View>

            <MyName />
            <AgeComponent />
            <SubjectComponent />
            <XHandleComponent />
        </View>
    )
}

export default IntroductionScreen