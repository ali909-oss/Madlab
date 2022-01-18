import React from 'react';
import {
    View,
    Text,StyleSheet,TouchableOpacity,Image
} from 'react-native';
import Stackbar from '../components/StackedBar';
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Admin from '../components/Admin';
import NewData from '../components/Newdata';
const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
             <TouchableOpacity onPress={()=> navigation.openDrawer()}>
                <Image style={styles.imgmenu} source={require('../assets/icons/menu1.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> navigation.navigate("Profile")}>
                <Image style={styles.imagehead} source={require('../assets/icons/img1.png')} />
                </TouchableOpacity>
            <Text style={styles.texta}>DashBoard</Text>
            <Text style={{textAlign:"center"}}>E-commerce Admin Panel</Text>
            <Admin/>

        </View>

    )
}

export default HomeScreen;

const styles=StyleSheet.create({
    container:{
        backgroundColor:'white',
        height:hp('100%'),
        width:wp('100%')
    
    },
    texta:{
        fontSize:30,
        fontWeight:'700',
        textAlign:'center',
        marginTop:hp('1%'),
        color:'blue'
    },
    imgmenu:{
        height: hp('4%'),
        width: wp('6%'),
        marginLeft:wp('4%'),
        marginTop:hp('3%')
      
    },
    imagehead: {
        height: hp('10%'),
        width: wp('18%'),
        borderRadius: 39,
        marginLeft:wp('80%'),
        marginTop:hp('-4%')




    },
})