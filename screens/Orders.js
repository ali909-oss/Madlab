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
       name:"1",
      login:"$400",
      email:"Cash",
      title:'Bank Transfer',
      detail:'Last Login',
      cat:'E-mail',
      role:'On Way'
    },
    {
        id:'2',
        name:"2",
        login:"$400",
        email:"Cash",
        title:'Name',
        detail:'Last Login',
        cat:'E-mail',
        role:'Delivered'





      },
      {
        id:'3',
        name:"3",
        login:"$350",
        email:"Bank Transfer",
        title:'Name',
        detail:'Last Login',
        cat:'E-mail',
        role:'On Way'





      },
      {
        id:'4',
        name:"4",
        login:"$600",
        email:"Cash",
        title:'Name',
        detail:'Last Login',
        cat:'E-mail',
        role:'Delivered'





      },
      {
        id:'5',
        name:"5",
        login:"$700",
        email:"Bank Transfer",
        title:'Name',
        detail:'Last Login',
        cat:'E-mail',
        role:'Delivered'





      },
]
const Orders = ({navigation}) => {
    return (
        <View style={{backgroundColor:'white',width:wp('100%')}}>
 <View>
            <AntDesign
                     onPress={()=> navigation.navigate("HomeScreen")}   style={{marginTop: hp('3%'), marginLeft: wp('3%') }} name={"arrowleft"} size={35} color="black" />
                 </View>
            <Text style={{fontSize:30,textAlign:'center',marginTop:hp('2%')}}>Latest Orders</Text>
             

        <ScrollView
        horizontal={true}>
          
        <View style={{marginTop:hp('10%'),height:hp('100%')}}>
        <View style={{justifyContent:'space-around',flexDirection:'row'}}>
                <Text style={{fontSize:20}}>Order ID</Text>
                <Text style={{fontSize:20}}>Order Total</Text>
                <Text style={{fontSize:20}}>Payment Method</Text>
                <Text style={{fontSize:20}}>Status</Text>



            </View>

         <FlatList
            
            data={Data}
            keyExtractor={item => item.id}
            renderItem={({item}) =>(

                <View style={styles.mainn}>
                   

                    <Text style={styles.name}>{item.name}</Text>
                   
                    <Text style={{color:'black',fontSize:15,color:'green',marginLeft:wp('30%'),marginTop:hp('-3%')}}>{item.login}</Text>
                    <Text style={{color:'grey',fontSize:15,marginTop:hp('2%'),marginLeft:wp('60%'),marginTop:hp('-3%')}}>{item.email}</Text>
                    <Text style={{color:'black',fontSize:15,color:'green',marginLeft:wp('90%'),marginTop:hp('-3%')}}>{item.role}</Text>

                    
                    

                    
                    



                    
                </View>
            )
          
          
          }
          
          />
          
           <View style={styles.btn}>
                  <Button title="View All Orders"  />
              </View>
              
        </View>
        
        </ScrollView>
        </View>
        

    )
}

export default Orders;

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
        marginTop:hp('60%'),
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