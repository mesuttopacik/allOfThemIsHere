import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from './Screens/Products';
import Detail from './Screens/Detail';
import Login from './Screens/Auth/Login'
import SignIn from './Screens/Auth/SingIn'
import FlashMessage from "react-native-flash-message";
import auth from "@react-native-firebase/auth"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../constants/GlobalStyles';


const Stack = createNativeStackNavigator();

function Router() {
const [userSession, setUserSession] = React.useState();

React.useEffect(() =>{
  auth().onAuthStateChanged((user) =>{
    setUserSession(!!user)
  })
}, [])

  const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
    )
  };
  return (
    <NavigationContainer>
      <Stack.Navigator >
      {
        !userSession ? 
        <Stack.Screen name="AuthStack" component={AuthStack} />
        :
        <Stack.Screen
          name="Products"
          component={Products}
          options={{
            title: 'All Of Them Is Here',
            headerRight: () =>(
              <Icon name='account-outline' size={25} color={colors.accent} onPress = {()=> auth().signOut()} />
            )
          }}
        />
      }
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}

export default Router;
