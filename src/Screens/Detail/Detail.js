import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from './Detail.style';
import useFetch from '../../hooks/useFetch/useFetch';
import Config from 'react-native-config';
import Loading from '../../components/Loading';
import Error from '../../components/Error/Error';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Detail = ({route}) => {
  const {id} = route.params;
  const {loading, error, data} = useFetch(`${Config.API_URL}/${id}`);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={{uri: data.image}} style={styles.image} />
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{data.title} </Text>
          <Text style={styles.desc}>{data.description}</Text>
          <Text style={styles.price}>{data.price} TL</Text>
        </View>
      </ScrollView>
      <View style={styles.cartContanier}>
        <Text style={styles.priceInCart}>{data.price} TL</Text>
        <View style={styles.cartLeft}>
        <TouchableOpacity style={styles.fav}>
          <Icon name="heart-outline" size={30} color='#adb5bd' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.addToCart}>
          <Text style={styles.addToCartText}>Add To Cart</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Detail;
