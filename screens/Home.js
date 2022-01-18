import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./HomeScreen"; 
import UserProfile from "./UserProfile";
import VendorProfile from "./VendorProfile";
import Addproduct from "./AddProduct";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="HomeScreen" 
      component={HomeScreen} 
      options={{ headerShown: false }} 
      />
      <Stack.Screen 
      name="UserProfile" 
      component={UserProfile} 
      options={{ headerShown: false }} 
      />
       <Stack.Screen 
      name="VendorProfile" 
      component={VendorProfile} 
      options={{ headerShown: false }} 
      />
      <Stack.Screen 
      name="AddProduct" 
      component={Addproduct} 
      options={{ headerShown: false }} 
      />
     
        
    
    </Stack.Navigator>
  );
}

export default MyStack;
