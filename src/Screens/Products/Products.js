import {Text, FlatList, SafeAreaView, View, } from 'react-native';
import React from 'react';
import Config from 'react-native-config';
import axios from 'axios';
import ProductCard from '../../components/ProductCard'
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error/Error';


const Products = () => {
 const {loading,data,error} = useFetch(Config.API_URL)

  const renderProduct = ({ item }) => <ProductCard product={item} />;
  if(loading) {
    return <Loading />
  }
  if(error){
    return <Error />
  }

  return (
    <SafeAreaView>
      {/* <Text>Products: {Config.API_URL}</Text> */}
      {/* <Button title='goto detail' onPress = {()=> navigation.navigate('Detail')} /> */}
      <FlatList
        data={data}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Products;
