import { Dimensions } from 'react-native'

export const colors = {
    primary: '#eeeeee',
    accent: '#fe5d26',

    borderColor: '#bdbdbd',
}
const deviceSize = Dimensions.get('window')
export const sizes = {
windowWidth: deviceSize.width,
windowHeight: deviceSize.height
}