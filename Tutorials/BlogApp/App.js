import React from "react";
import { NavigationContainer } from "@react-navigation/native"


import AuthStackScreen from "./src/navigation/AuthStack";
import AppDrawerScreen from "./src/navigation/AppDrawer";

import { AuthContext, AuthProvider } from './src/providers/AuthProvider';
import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAiU3p6LWnGWtLJh5kKxfOn2LLy6exJmds",
  authDomain: "blogapp-3b8ee.firebaseapp.com",
  databaseURL: "https://blogapp-3b8ee.firebaseio.com",
  projectId: "blogapp-3b8ee",
  storageBucket: "blogapp-3b8ee.appspot.com",
  messagingSenderId: "843895741",
  appId: "1:843895741:web:015fdd12807f561cc9f8d4"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function App() {
  return (
    <AuthProvider>
      <AuthContext.Consumer>
        {
          (auth) =>
            (
              <NavigationContainer>
                {auth.IsLoggedIn ? <AppDrawerScreen /> : <AuthStackScreen />}
              </NavigationContainer>
            )
        }
      </AuthContext.Consumer>
    </AuthProvider>
  )
}
export default App;

