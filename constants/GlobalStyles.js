import { Dimensions } from 'react-native'

export const colors = {
    primary: '#ffffff',
    accent: '#fe5d26',

    borderColor: '#ffffff',
}
const deviceSize = Dimensions.get('window')
export const sizes = {
windowWidth: deviceSize.width,
windowHeight: deviceSize.height
}