import React from 'react';
import { View, Text,StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

import Summary from '../components/Summary';
import Expenses from '../components/Expenses';
import SalesStatus from '../components/SalesStatus'
import Stackbar from '../components/StackedBar';
import Piechart from '../components/Piechart';
import { ScrollView } from 'react-native-gesture-handler';
const Reports = ({navigation}) => { 
  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={styles.container}>
             
    <View style={styles.header}>
    <View>
            <AntDesign
                     onPress={()=> navigation.navigate("HomeScreen")}   style={{marginTop: hp('3%'), marginLeft: wp('3%') }} name={"arrowleft"} size={35} color="black" />
                 </View>
        <View>
        <Text style={styles.textheader}>Reports</Text>
        </View>
        
        </View>
        <ScrollView style={styles.ScrollView}>
          <View style={{marginTop:hp('5%')}}>
            <Text style={{fontSize:20,color:'grey',textAlign:'center'}}>Summary</Text>
          <Summary/>

          </View>
          <View style={{marginTop:hp('5%')}}>
            <Text style={{fontSize:20,color:'grey',textAlign:'center'}}>Expenses</Text>
          <Expenses/>
          </View>
          <View style={{marginTop:hp('5%')}}>
            <Text style={{fontSize:20,color:'grey',textAlign:'center'}}>Sales</Text>
          <SalesStatus/>
          </View>
          <View style={{marginTop:hp('5%')}}>
            <Text style={{fontSize:20,color:'grey',textAlign:'center'}}>Sales By Location</Text>
          <Piechart/>
          </View>
          <View style={{marginTop:hp('5%')}}>
            <Text style={{fontSize:20,color:'grey',textAlign:'center'}}>Revenue for last month</Text>

          <Stackbar/>
          </View>
        </ScrollView>
     
      </View>
      );
}

export default Reports;

const styles = StyleSheet.create({
  container: {

      backgroundColor: 'white',
      height: hp('90%'),
      width: wp('100%')

  },
 
  textheader:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:hp('2%')
   
  },
  header:{
    height:hp('18%')

  }
})