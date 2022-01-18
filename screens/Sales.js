import React from 'react';
import {
    View,
    Text,FlatList,StyleSheet,Button
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';


const Data=[
    {
      id:'1',
      num:"1",
      status:'Paid',
      payment:'Card',
      
      role:'Processing'
    },
    {
        id:'2',
        num:"2",
        status:'Paid',
        payment:'Visa',
        title:'Name',
        detail:'Last Login',
        cat:'E-mail',
        role:'Delivered'





      },
      {
        id:'3',
        num:"3",
        status:'Paid',
        payment:'Visa',
        title:'Name',
        detail:'Last Login',
        cat:'E-mail',
        role:'Delivered'





      },
      {
        id:'4',
        num:"4",
        status:'Paid',
        payment:'Card',
        title:'Name',
        detail:'Last Login',
        cat:'E-mail',
        role:'Processing'





      },
      {
        id:'5',
        num:"5",
        status:'Paid',
        payment:'Card',
        title:'Name',
        detail:'Last Login',
        cat:'E-mail',
        role:'Processing'





      },
      {
        id:'6',
        num:"6",
        status:'Paid',
        payment:'Card',
        title:'Name',
        detail:'Last Login',
        cat:'E-mail',
        role:'Processing'





      },
      {
        id:'7',
        num:"7",
        status:'Paid',
        payment:'Card',
        title:'Name',
        detail:'Last Login',
        cat:'E-mail',
        role:'Processing'





      },
      {
        id:'8',
        num:"8",
        status:'Paid',
        payment:'Card',
        title:'Name',
        detail:'Last Login',
        cat:'E-mail',
        role:'Processing'





      },
     
]
const Sales = ({navigation}) => {
    return (
        <View style={{backgroundColor:'white',width:wp('100%')}}>
          <View>
            <AntDesign
                     onPress={()=> navigation.navigate("HomeScreen")}   style={{marginTop: hp('3%'), marginLeft: wp('3%') }} name={"arrowleft"} size={35} color="black" />
                 </View>
            <Text style={{fontSize:30,textAlign:'center',marginTop:hp('2%')}}>Manage Order</Text>

        <ScrollView
        horizontal={true}>
          
        <View style={{marginTop:hp('10%'),height:hp('100%'),marginLeft:wp('5%')}}>
        <View style={{justifyContent:'space-around',flexDirection:'row'}}>
                <Text style={{fontSize:20}}>ID</Text>
                <Text style={{fontSize:20}}>Status</Text>
                <Text style={{fontSize:20}}>Payment</Text>
                <Text style={{fontSize:20}}>Order Status</Text>



            </View>

         <FlatList
            
            data={Data}
            keyExtractor={item => item.id}
            renderItem={({item}) =>(

                <View style={styles.mainn}>
                   

                    <Text style={styles.name}>{item.num}</Text>
                   
                    <Text style={{color:'black',fontSize:15,color:'green',marginLeft:wp('30%'),marginTop:hp('-3%')}}>{item.status}</Text>
                    <Text style={{color:'grey',fontSize:15,marginTop:hp('2%'),marginLeft:wp('60%'),marginTop:hp('-3%')}}>{item.payment}</Text>
                    <Text style={{color:'black',fontSize:15,color:'green',marginLeft:wp('90%'),marginTop:hp('-3%')}}>{item.role}</Text>

                    
                    

                    
                    



                    
                </View>
            )
          
          
          }
          />
          
        </View>
        </ScrollView>
        </View>
        

    )
}

export default Sales;

const styles=StyleSheet.create({
    main:{
        height: hp('15%'),
        marginTop: hp('3'),
        width: wp('90%'),
       
        backgroundColor:'#ebf3f9',
        borderRadius:19,
        marginLeft:wp('5%')
    },
    mainn:{
          justifyContent:'space-between',
          padding:20
    },
    btn:{
        width: wp('60%'),
        marginTop:hp('65%'),
        borderRadius:20,
        borderWidth:10,
        borderColor:'#2196f3',
        position:'absolute',
        overflow:"hidden",
        marginLeft:wp('20%')
       


      },
    name:{
        fontSize:20,
        fontWeight:'700',
        color:'blue',
        marginLeft:wp('5%')
    },
    Imageholder:{
        padding:12,
        marginLeft:wp('20%'),
        justifyContent:'space-evenly',
        flexDirection:'column'
    

        


    },

})