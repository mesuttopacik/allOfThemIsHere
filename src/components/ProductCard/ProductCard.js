import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import styles from './ProductCard.style';
import Button from '../Button';
import Ratting from '../Ratting';

const ProductCard = ({product, onSelect}) => {
  const {image, title, rating, price} = product;
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: image}} />
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{title}</Text>
          <Ratting style={styles.ratting} ratting = {rating.rate} />
          <Text style={styles.price}>{price} TL</Text>
          <Button text='Sepete Ekle' />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductCard;
