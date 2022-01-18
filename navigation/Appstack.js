import React from 'react';
import { width ,isLargeScreen, View,style,StyleSheet,Button, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Tabs from "../navigation/tabs"
import CustomDrawer from '../components/CustomDrawer';
import { Products } from '../screens';
import User from '../screens/Users';
import Vendors from '../screens/Vendors';
import Reports from '../screens/Reports';
import Sales from '../screens/Sales';
import Orders from '../screens/Orders';
import Category from '../screens/Category';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Octicons from 'react-native-vector-icons/dist/Octicons';



const Drawer = createDrawerNavigator();

const Appstack = () => {
  return (
    

    <Drawer.Navigator drawerContent ={props => <CustomDrawer {...props}/>}
    drawerContentOptions={{
      activeTintColor: 'blue',
      activeBackgroundColor: '#ebf3f9',
      inactiveTintColor: 'black',
      inactiveBackgroundColor: 'white',
      labelStyle:{
        marginLeft:2,
        fontSize:17,
        
      }
    }}
    >
     <Drawer.Screen
        name = "Home"
        component={Tabs}
        options={{
          drawerIcon: ({focused, size}) => (
             <Ionicons
                name="md-home"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
             />
          ),
       }}
       
        
        />
         <Drawer.Screen
        name = "Products"
        component={Products}
        options={{
          drawerIcon: ({focused, size}) => (
            <FontAwesome
            name="calendar-check-o"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
             />
          ),
       }}
       
        
        />
        <Drawer.Screen
        name = "Category"
        component={Category}
        options={{
          drawerIcon: ({focused, size}) => (
             <MaterialIcons
                name="category"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
             />
          ),
       }}
       
        
        />
         <Drawer.Screen
        name = "Orders"
        component={Orders}
        options={{
          drawerIcon: ({focused, size}) => (
             <Octicons
                name="list-unordered"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
             />
          ),
       }}
       
        
        />
         <Drawer.Screen
        name = "Users"
        component={User}
        options={{
          drawerIcon: ({focused, size}) => (
            <AntDesign
                 name="user"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
             />
          ),
       }}
       
        
        />
         <Drawer.Screen
        name = "Vendors"
        component={Vendors}
        options={{
          drawerIcon: ({focused, size}) => (
             <FontAwesome
                name="users"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
             />
          ),
       }}
       
        
        />
        <Drawer.Screen
        name = "Sales"
        component={Sales}
        options={{
          drawerIcon: ({focused, size}) => (
             <Entypo
                name="bar-graph"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
             />
          ),
       }}
       
        
        />
        <Drawer.Screen
        name = "Reports"
        component={Reports}
        options={{
          drawerIcon: ({focused, size}) => (
             <AntDesign
                name="piechart"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
             />
          ),
       }}
       
        
        />
       
      
       
        
    </Drawer.Navigator>
    
    
  );
};

export default Appstack;

