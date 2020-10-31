import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from './src/screens/HomeScreen';
import FlatListScreen from './src/screens/FlatListScreen';
import Images from './src/screens/Images';
import ReuseImageScreen from './src/screens/ReuseImageScreen';
import AsyncStorageScreen from './src/screens/AsyncStorageScreen';
import StateScreen from './src/screens/StateScreen';
import BoxScreen from './src/screens/BoxScreen';

const stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="Flat List" component={FlatListScreen} />
        <stack.Screen name="Images" component={Images} />
        <stack.Screen name="Reuse Images" component={ReuseImageScreen} />
        <stack.Screen name="Async Storage" component={AsyncStorageScreen} />
        <stack.Screen name="State Screen" component={StateScreen} />
        <stack.Screen name="Box Screen" component={BoxScreen} />
      </stack.Navigator>
    </NavigationContainer>
  )
}
export default App;