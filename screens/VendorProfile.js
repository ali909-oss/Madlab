import React from 'react';
import {
    View,
    Text,StyleSheet,Button
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const VendorProfile = ({navigation}) => {
    return (
        <View >
            <Text style={{fontSize:25,textAlign:'center',marginTop:hp('15%')}}>Add Vendor</Text>
            <View style={{marginTop:hp('10%'),justifyContent:'space-between',alignContent:'center',marginLeft:wp('20%')}}>
            <Text style={{fontSize:20}}>Name</Text>
            <TextInput
            style={{borderRadius:10,borderWidth:0.5,width:wp('60%')}}
            placeholder="Enter Your Name"
            />
            <View style={{marginTop:hp('2%')}}>
            <Text style={{fontSize:20}}>E-mail</Text>
            <TextInput
            style={{borderRadius:10,borderWidth:0.5,width:wp('60%')}}
            placeholder="Enter Your E-mail"
            />
            </View>
            <View style={{marginTop:hp('2%')}}>

            <Text style={{fontSize:20}}>Password</Text>
            <TextInput
            style={{borderRadius:10,borderWidth:0.5,width:wp('60%')}}
            placeholder="Enter Your Password"
            />
            </View>
            </View>

<View style={styles.btn1}>
    
    <Button title="Save" onPress={()=> navigation.navigate("HomeScreen")}  style={{justifyContent:'center',alignItems:'center'}}/>
    </View>      
  </View>
    )
}

export default VendorProfile;
const styles = StyleSheet.create({

btn1: {
    width: wp('50%'),
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#2196f3',
    marginTop: hp('8%'),
    marginLeft: wp('25%'),





},
})