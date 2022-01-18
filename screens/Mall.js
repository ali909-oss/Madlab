import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import MallScreen from "./MallScreen";
import BankDetails from "./BankDetails";
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator >
      
      <Stack.Screen 
      name="MallScreen" 
      component={MallScreen} 
      options={{ headerShown: false }} 
      />
       <Stack.Screen 
      name="BankDetails" 
      component={BankDetails} 
      options={{ headerShown: false }} 
      />
    
      
      
      
      

</Stack.Navigator>
  );
}

export default MyStack;