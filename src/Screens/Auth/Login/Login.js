import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import styles from './Login.style';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import {Formik} from 'formik';
import authErrorMassageParser from '../../../utils/authErrorMassageParser';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

const initialFormValues = {username: '', password: ''};

const Login = ({navigation}) => {
  const handleLogin = async formValues => {
    try {
      await auth().signInWithEmailAndPassword(
        formValues.username,
        formValues.password,
      );
    } catch (err) {
      showMessage({
        message: authErrorMassageParser(err.code),
        type: 'danger',
      });
    }
  };
  const goToSingIn = () => {
    navigation.navigate('SignIn');
  };
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView style={styles.container}>
        <SafeAreaView>
          <View>
            <Text style={styles.header}>All Of Them Is Here</Text>
            <Image
              style={styles.shopingImage}
              source={require('../../../assets/shoping.png')}
            />
          </View>
          <Formik initialValues={initialFormValues} onSubmit={handleLogin}>
            {({handleChange, handleSubmit, values}) => (
              <>
                <Input
                  placeholder="Kullanıcı adını giriniz"
                  value={values.username}
                  onChangeText={handleChange('username')}
                  iconName="account"
                  textContentType="emailAddress"
                  autoCapitalize = {'none'}
                />
                <Input
                  placeholder="Şifrenizi giriniz"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  iconName="key"
                  secureTextEntry
                />
                <Button
                  onPress={handleSubmit}
                  text="Giriş Yap"
                  thema="primary"
                />
                <Button
                  onPress={goToSingIn}
                  text="Kayıt Ol"
                  thema="secondary"
                />
              </>
            )}
          </Formik>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
