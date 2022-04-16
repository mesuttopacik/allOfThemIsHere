import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './Login.style';
import Input from '../../../components/Input/Input';
import {LogBox} from 'react-native';
import Button from '../../../components/Button/Button';
import {Formik} from 'formik';
LogBox.ignoreLogs(['ViewPropTypes will be removed from React Native']);

const Login = () => {
  const handleLogin = values => {
    console.log(values);
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.shopingImage}
          source={require('../../../assets/shoping.png')}
        />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handleLogin}>
        {({handleChange, handleSubmit, values}) => (
          <View style={styles.bodyContainer}>
            <Input
              placeholder="Kullanıcı adını giriniz"
              value={values.username}
              onChangeText={handleChange('username')}
              iconName="account"
              textContentType='emailAddress'
            />
            <Input
              placeholder="Şifrenizi giriniz"
              value={values.password}
              onChangeText={handleChange('password')}
              iconName="key"
              secureTextEntry
            />
            <Button onPress={handleSubmit}>Giriş Yap</Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;
