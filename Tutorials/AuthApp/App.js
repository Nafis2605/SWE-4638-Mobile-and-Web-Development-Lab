//Projet Build
//expo init [App Name]

//Project Setup
//npm install @react-navigation/native 
//npm install @react-navigation/stack
//expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

//To install Rect native Elements
//npm install react-native-elements

import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import HomeScreen from './src/screens/HomeScreen'
import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';
import { AuthContext, AuthProvider } from './src/providers/AuthProvider';

const HomeStack = createStackNavigator();
const AuthStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}
const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator initialRouteName="SignIn">
      <AuthStack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
    </AuthStack.Navigator>
  );
}
function App() {
  return (
    <AuthProvider>
      <AuthContext.Consumer>
        {
          (auth) =>
            (
              <NavigationContainer>
                {auth.IsLoggedIn ? <HomeStackScreen /> : <AuthStackScreen />}
              </NavigationContainer>
            )
        }
      </AuthContext.Consumer>
    </AuthProvider>
  )
}
export default App;

