import React from "react";
import {View,Text,FlatList,StyleSheet,TouchableOpacity,Image} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const DATA = [

    {
        name: 'Bank Details',
          id: '1',
        image: require("../assets/icons/money.png"),
         },
    {
        id:'2',
        name: 'Transaction History',
        image: require("../assets/icons/money.png"),
     },
    {
        id:'3',
        name: 'Overview',
        image: require("../assets/icons/money.png"),
     },
    ]

const MallScreen = ({navigation}) => {
    return (
        <View>
       
        <View style={{ flexDirection:'row',justifyContent:'space-around'}}>
            <TouchableOpacity onPress={()=> navigation.navigate("BankDetails")}>
            <Image style={styles.image1} source={require('../assets/icons/money.png')} />
            <Text>Bank Details</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style={styles.image1} source={require('../assets/icons/money.png')} />
            <Text>Transaction Details</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style={styles.image1} source={require('../assets/icons/money.png')} />
            <Text>Overview</Text>
            </TouchableOpacity>       
            
    </View>
    </View>

    )}
export default MallScreen;

const styles = StyleSheet.create({

    Imageholder: {
        flexDirection: 'row',
        justifyContent:'center',alignItems:'center',
        marginTop:hp('2%'),


    },
    
    name: {
        fontSize: 13,
        fontWeight:'bold'
        

    },
    image1: {
        height: hp('18%'),
        width: wp('20%'),
        marginTop: hp('3%'),
        resizeMode:'contain'

    },


})