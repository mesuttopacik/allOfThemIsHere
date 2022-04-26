import React, { useState } from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import styles from './Profile.style'
import auth from '@react-native-firebase/auth'

const Profile = ({navigation}) => {
    return (
        <View style={styles.container}>
          <View>
          <Text style={{ fontSize: 30 }}>kulanıcı adı soyadı</Text>
              </View>
              <TouchableOpacity></TouchableOpacity>
          <Button onPress = {()=> auth().signOut()} title = 'Çıkış Yap' />
          <Button onPress={() => navigation.goBack()} title="Dismiss" />
        </View>
      );
}

export default Profile