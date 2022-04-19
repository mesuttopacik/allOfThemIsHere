import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from './Screens/Products';
import Detail from './Screens/Detail';
import Login from './Screens/Auth/Login'
import SignIn from './Screens/Auth/SingIn'
import FlashMessage from "react-native-flash-message";


const Stack = createNativeStackNavigator();

function Router() {
  const AuthStack = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options ={{headerShown: false}} />
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
      <Stack.Navigator>
        <Stack.Screen name="AuthStack" component={AuthStack} options= {{ headerShown: false }} />
        <Stack.Screen
          name="Products"
          component={Products}
          options={{
            title: 'All Of Them Is Here',
          }}
        />
        <Stack.Screen name="Detail" component={Detail} options= {{ headerShown: false }} />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}

export default Router;
