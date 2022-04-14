import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../../constants/GlobalStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: sizes.windowWidth,
    height: sizes.windowHeight / 3,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  bodyContainer: {
    flex: 2,
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
  },
  desc: {
    fontStyle: 'italic',
    marginVertical: 7,
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'right',
  },
  cartContanier: {
    flex:1,
    padding:20,
    borderWidth:1,
    borderColor:colors.borderColor,
    width:sizes.windowWidth,
    bottom:0,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    position:'absolute',
  },
  addToCart:{
      backgroundColor:colors.accent,
      justifyContent:'center',
      borderRadius:15,
      padding:10,
      marginBottom:5,
  },
  fav:{
    padding:10,
    marginBottom:5,
    marginRight:5,
    borderRadius:25,
    backgroundColor:'#dee2e6',
  },
  priceInCart:{
    fontSize: 18,
    fontWeight: '700',
  },
  cartLeft:{
    flexDirection:'row'
  },
  addToCartText:{
    fontSize:16,
    fontWeight:'700',
    color:'white',
  }
});
