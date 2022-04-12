import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/GlobalStyles'

export default StyleSheet.create({
  container: {
    backgroundColor:colors.primary,
    borderColor:colors.borderColor,
    borderWidth:1,
    margin:5,
    flexDirection:'row',
  },
  image: {
    width:100,
    minHeight:100,
    resizeMode:'contain',
    backgroundColor:'white'
  },
  bodyContainer: {
    flex:1,
    padding:5,
    justifyContent:'space-between'
  },
  title: {
    fontWeight:'bold',
    fontSize: 18,

  },
  price: {
    textAlign:'right',
    fontSize:16,
    fontStyle:'italic'
  },
});
