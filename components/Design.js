import React from 'react';
import { StyleSheet, View, Text,Image, ScrollView, TouchableOpacity, FlatList,SafeAreaView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Design = () => {
       
      
    return (
      <SafeAreaView style={styles.container}>
          <View style={styles.header}>
         
      
      


              </View>


          <View style={styles.footer}>

              </View>
              </SafeAreaView>
    )}
export default Design;

const styles = StyleSheet.create({
    container:{
 
       backgroundColor: 'white',
       height: hp('100%'),
       width: wp('100%'),
       
 
    },
    header:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
       backgroundColor:'white',
        paddingBottom:50
    },
    footer:{
        flex: 4,
        backgroundColor: '#ebf3f9',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop: hp('-10'),
        alignItems:'center',
    },
});
