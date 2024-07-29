import React from "react";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginPage from "../loginpage";
import SignupPage from "../SignupPage";
import Home from "../Home";
import Edit from "../editing";
import Setlocation from "../Setlocation";
import LaundrySwipe from "../Swipe";

const AppStack = createNativeStackNavigator();
const App = () => {
  return(
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown:false}}>
        <AppStack.Screen name="LaundrySwipe" component={LaundrySwipe}/>
        <AppStack.Screen name="LoginPage" component={LoginPage}/>
        <AppStack.Screen name="SignupPage" component={SignupPage}/>
        <AppStack.Screen name="Home" component={Home}/>
        <AppStack.Screen name="Edit" component={Edit}/>
        <AppStack.Screen name="Setlocation" component={Setlocation}/>
      </AppStack.Navigator>
    </NavigationContainer>
  )
}
export default App;