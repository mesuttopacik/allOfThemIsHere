import { StyleSheet } from 'react-native'
import colors from "../../../constants/Colors";

export default StyleSheet.create({
    button: {
        justifyContent:'center',
        alignItems: "center",
        backgroundColor: colors.accent,
        padding: 10,
        margin: 2,
        borderRadius: 10,
      },
      buttonText:{
        color: 'white',
        fontSize:16,
        fontWeight:'700',
      },
})