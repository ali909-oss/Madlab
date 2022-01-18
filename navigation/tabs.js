import React from "react";
import {
    TouchableOpacity,View,Text
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import { Home, Products, Profile } from "../screens"
import Mall from "../screens/Mall";
import { COLORS } from "../constants"
import Reports from "../screens/Reports";
import Entypo from 'react-native-vector-icons/dist/Entypo';

const Tab = createBottomTabNavigator()

const Tabs = () => {

    return (
        <Tab.Navigator
        tabBarOptions={{
            showLabel: false 
                
        }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    showLabel: false ,
                        tabBarIcon: ({focused}) => {
                          return (
                            <View style = {{justifyContent:'center',alignItems:'center',top:1}}>
                               <Ionicons
                    name="md-home"
                    size={25}
                    color={focused ? '#7cc' : '#ccc'}
                    
                 />
                 <Text style = {{color:focused?"#1a71ff":"##85899f",fontSize:15,marginBottom:5}}>Home</Text>
                            </View>
                           
                            
              
                          
                          );
                        }, }}
                    
            />
           
            
            <Tab.Screen
                name="Reports"
                component={Reports}
                options={{
                    tabBarIcon: ({focused}) => {
                      return (
                        <View style = {{justifyContent:'center',alignItems:'center',top:1}}>
                          <Entypo
                name="bar-graph"
                size={25}
                color={focused ? '#7cc' : '#ccc'}
                
             />
             <Text style = {{color:focused?"#1a71ff":"##85899f",fontSize:15,marginBottom:5}}>Reports</Text>
                        </View>
                       
                        
          
                        
                      );
                    }, }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                style = {{headerShown:false}}
                options={{
                     tabBarIcon: ({focused}) => {
                       return (
                         <View style = {{justifyContent:'center',alignItems:'center',top:1}}>
                            <AntDesign
                 name="user"
                 size={25}
                 color={focused ? '#7cc' : '#ccc'}
                 
              />
              <Text style = {{color:focused?"#1a71ff":"##85899f",fontSize:15,marginBottom:5}}>Profile</Text>
                         </View>
                        
                         
           
                       
                        );
                     },
                       } }
            />
            <Tab.Screen
                name="Mall"
                component={Mall}
                options={{
                    showLabel: false ,
                        tabBarIcon: ({focused}) => {
                          return (
                            <View style = {{justifyContent:'center',alignItems:'center',top:1}}>
                               <Ionicons
                    name="md-home"
                    size={25}
                    color={focused ? '#7cc' : '#ccc'}
                    
                 />
                 <Text style = {{color:focused?"#1a71ff":"##85899f",fontSize:15,marginBottom:5}}>Mall</Text>
                            </View>
                           
                            
              
                          
                          );
                        }, }}
                    
            />
        </Tab.Navigator>
    )
}

export default Tabs;