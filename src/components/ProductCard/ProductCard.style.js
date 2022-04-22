import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../../constants/GlobalStyles'

export default StyleSheet.create({
  container: {
    flex:1,
    padding:5,
    alignItems:'center',
    backgroundColor:colors.primary,
    borderColor:colors.borderColor,
    borderWidth:1,
    borderRadius:10,
    margin:15,
    // flexDirection:'row',
  },
  image: {
    // width: sizes.windowWidth / 2.4,
    width:'100%',
    height: sizes.windowHeight / 8,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode:'contain',
    backgroundColor:'white',
  },
  bodyContainer: {
    flex:1,
    padding:5,
    justifyContent:'space-between'
  },
  title: {
    // fontWeight:'bold',
    fontSize: 16,

  },
  ratting:{

  },
  price: {
    fontWeight:'700',
    textAlign:'right',
    fontSize:16,
    fontStyle:'italic'
  },
});
