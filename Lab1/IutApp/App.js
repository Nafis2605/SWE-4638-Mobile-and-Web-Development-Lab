import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from './src/screens/HomeScreen';
import Faculty from './src/screens/Faculty';
import Semester from './src/screens/Semester'

const stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="Faculty List" component={Faculty} />
        <stack.Screen name="Semesters" component={Semester} />
      </stack.Navigator>
    </NavigationContainer>
  )
}
export default App;