import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import styles from './SignIn.style';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import authErrorMassageParser from '../../../utils/authErrorMassageParser';

const initialFormValues = {
  email: '',
  password: '',
  rePassword: '',
};

const SignIn = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };
  const handleSignIn = async formValues => {
    if (formValues.password !== formValues.rePassword) {
      showMessage({
        message: 'Şifreler uyuşmuyor..',
        type: 'danger',
      });
      return;
    }
    try {
      await auth().createUserWithEmailAndPassword(
        formValues.email,
        formValues.password,
      );
    } catch (err) {
      showMessage({
        message: authErrorMassageParser(err.code),
        type: 'danger',
      });
    }
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <SafeAreaView>
          <View>
            <Text style={styles.header}>All Of Them Is Here</Text>
            <Image
              style={styles.shopingImage}
              source={require('../../../assets/shoping.png')}
            />
          </View>
          <Formik initialValues={initialFormValues} onSubmit={handleSignIn}>
            {({handleChange, handleSubmit, values}) => (
              <>
                <Input
                  placeholder="e-posta adresinizi giriniz.."
                  value={values.email}
                  onChangeText={handleChange('email')}
                  iconName="email"
                  textContentType="emailAddress"                />
                <Input
                  placeholder="Şifrenizi giriniz.."
                  value={values.password}
                  onChangeText={handleChange('password')}
                  secureTextEntry
                />
                <Input
                  placeholder="Şifrenizi tekrar giriniz.."
                  value={values.rePassword}
                  onChangeText={handleChange('rePassword')}
                  secureTextEntry
                />
                <Button
                  onPress={handleSubmit}
                  text="Kayıt Ol"
                  thema="secondary"
                />
              </>
            )}
          </Formik>
          <Button onPress={goBack} text="Geri" thema="primary" />
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
