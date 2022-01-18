import React  from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Appstack from './navigation/Appstack';
import { NavigationContainer } from '@react-navigation/native';



import Tabs from "./navigation/tabs"; 

const Stack = createStackNavigator();







const App = () => {
    return (
        <NavigationContainer >
             <Appstack/>
        </NavigationContainer>
        
          
       
    )
}

export default App;