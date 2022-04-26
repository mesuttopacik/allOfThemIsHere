import {View, Button} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../../constants/GlobalStyles';
import {useNavigation} from '@react-navigation/native';

const HeaderRight = () => {
  const navigation = useNavigation();
  return (
    <Icon
      name="account-outline"
      size={25}
      color={colors.accent}
      onPress={() => navigation.navigate('Profile')}
    />
  );
};

export default HeaderRight;
