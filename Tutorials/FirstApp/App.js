import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from './src/screens/HomeScreen';
import FlatListScreen from './src/screens/FlatListScreen';
import Images from './src/screens/Images';

const stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="Flat List" component={FlatListScreen} />
        <stack.Screen name="Images" component={Images} />
      </stack.Navigator>
    </NavigationContainer>
  )
}
export default App;