import React from 'react';
import {
    View,
    Text,StyleSheet,FlatList,Image
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import NewData from './Newdata';
const Data=[
    {
      id:'1',
      title:"Earnings",
      price:"$4000",
      month:"This Month",
      image: require("../assets/icons/Earnings.png"),
        
    },
    {
        id:'2',
      title:"Products",
      price:"400",
      month:"This Month",
      image: require("../assets/icons/Products.png"),


    },
    {
        id:'3',
      title:"Messages",
      price:"20",
      month:"This Month",
      image: require("../assets/icons/Message.png"),


    },
    {
        id:'4',
      title:"New Vendors",
      price:"125",
      month:"This Month",
      image: require("../assets/icons/Vendors.png"),


    }
]

const SPACING=15;




const Admin = () => {
    return (
        <View style={{height:hp('70%')}}>
        <ScrollView>
        <View style={{backgroundColor:'white'}}>
        <View style={{marginTop:hp('2%'),height:hp('67%')}}>
         <FlatList
            
            data={Data}
            keyExtractor={item => item.id}
            renderItem={({item}) =>(

                <View style={styles.main}>
                    

                    <Text style={styles.name}>{item.title}</Text>
                    <Image source={item.image} style={styles.image1} />
                    <Text style={{color:'black',fontSize:30,color:'green',marginLeft:wp('30%'),marginTop:hp('-4%')}}>{item.price}</Text>
                    <Text style={{color:'grey',fontSize:13,marginTop:hp('-3%'),marginLeft:wp('55%')}}>{item.month}</Text>


                    


                    



                    
                </View>
            )
          
          
          }
          />
        </View>
        <NewData/>
        </View>
        </ScrollView>
        </View>

)
}

export default Admin;

const styles=StyleSheet.create({
    main:{
        height: hp('13%'),
        marginTop: hp('1%'),
        width: wp('90%'),
        padding:SPACING,
        marginBottom:SPACING,
        backgroundColor:'#ebf3f9',
        borderRadius:19,
        marginLeft:wp('5%')
    },
    name:{
        fontSize:20,
        fontWeight:'700',
        color:'blue',
        textAlign:'center',
    },
    Imageholder:{
        flexDirection: 'row',
        padding:12,
        marginLeft:wp('20%'),
        justifyContent:'space-evenly'
    

        


    },
    image1: {
        height: hp('10%'),
        width: wp('15%'),
        marginTop:hp('-5%')
      

    },
})