import React from 'react';
import LottieView from 'lottie-react-native';
import {Text} from 'react-native'

const Error = () => {
    return <LottieView source={require('../../assets/error.json')} autoPlay />
}

export default Error
