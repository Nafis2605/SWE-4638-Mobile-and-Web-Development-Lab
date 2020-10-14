import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from './src/screens/HomeScreen';
import Faculty from './src/screens/Faculty';
import Semester from './src/screens/Semester'
import FirstSemester from './src/screens/Semesters/FirstSemester'
import SecondSemester from './src/screens/Semesters/SecondSemester'
import ThirdSemester from './src/screens/Semesters/ThirdSemester'
import Profile from './src/screens/Profile';

const stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="Faculty List" component={Faculty} />
        <stack.Screen name="Semesters" component={Semester} />
        <stack.Screen name="First Semester" component={FirstSemester} />
        <stack.Screen name="Second Semester" component={SecondSemester} />
        <stack.Screen name="Third Semester" component={ThirdSemester} />
        <stack.Screen name="Profile" component={Profile} />
      </stack.Navigator>
    </NavigationContainer>
  )
}
export default App;