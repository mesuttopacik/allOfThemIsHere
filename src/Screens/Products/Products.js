import {Text, FlatList, SafeAreaView, View} from 'react-native';
import React from 'react';
import Config from 'react-native-config';
import axios from 'axios';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';
// import Loading from '../../components/Loading';
// import Error from '../../components/Error/Error';

const Products = ({navigation}) => {
  const {loading, data, error} = useFetch(Config.API_URL);
  const handleProductSelect = (id) => {
navigation.navigate('Detail', {id})
  }
  const renderProduct = ({item}) => 
  <ProductCard product={item} 
  onSelect = {()=> handleProductSelect(item.id)}/>;
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <FlatList
      data={data}
      renderItem={renderProduct}
      keyExtractor={item => item.id}
    />
  );
};

export default Products;
