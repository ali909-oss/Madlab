import React from 'react';
import {
    View,
    Text,StyleSheet,Button
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Addproduct = ({navigation}) => {
    return (
        <View >
            <Text style={{fontSize:25,textAlign:'center',marginTop:hp('2%')}}>Add Product</Text>
            <View style={{marginTop:hp('10%'),justifyContent:'space-between',alignContent:'center',marginLeft:wp('20%')}}>
            <Text style={{fontSize:20}}>Product Name</Text>
            <TextInput
            style={{borderRadius:10,borderWidth:0.5,width:wp('60%')}}
            placeholder="Enter Your Product Name"
            />
            <View style={{marginTop:hp('2%')}}>
            <Text style={{fontSize:20}}>Category</Text>
            <TextInput
            style={{borderRadius:10,borderWidth:0.5,width:wp('60%')}}
            placeholder="Enter Your p.Category"
            />
            </View>
            <View style={{marginTop:hp('2%')}}>

            <Text style={{fontSize:20}}>Price</Text>
            <TextInput
            style={{borderRadius:10,borderWidth:0.5,width:wp('60%')}}
            placeholder="Enter Your Price"
            />
            </View>
            <View style={{marginTop:hp('2%')}}>

<Text style={{fontSize:20}}>Status</Text>
<TextInput
style={{borderRadius:10,borderWidth:0.5,width:wp('60%')}}
placeholder="Enter Your Price"
/>
</View>
            <View style={{marginTop:hp('2%')}}>

<Text style={{fontSize:20}}>Description</Text>
<TextInput
style={{borderRadius:10,borderWidth:0.5,width:wp('60%')}}
placeholder="Enter Description
"
/>
</View>
            </View>

<View style={styles.btn1}>
    
    <Button title="Save" onPress={()=> navigation.navigate("HomeScreen")}  style={{justifyContent:'center',alignItems:'center'}}/>
    </View>      
  </View>
    )
}

export default Addproduct;
const styles = StyleSheet.create({

btn1: {
    width: wp('50%'),
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#2196f3',
    marginTop: hp('6%'),
    marginLeft: wp('25%'),





},
})