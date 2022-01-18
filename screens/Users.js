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
      name:"Ali",
      login:"Year ago",
      email:"ali@email.com",
      title:'Name',
      detail:'Last Login',
      cat:'E-mail',
      role:'Customer'
    },
    {
        id:'2',
        name:"Ali",
        login:"Year ago",
        email:"ali@email.com",
        title:'Name',
        detail:'Last Login',
        cat:'E-mail',
        role:'Customer'





      },
      {
        id:'3',
        name:"Ali",
        login:"Year ago",
        email:"ali@email.com",
        title:'Name',
        detail:'Last Login',
        cat:'E-mail',
        role:'Customer'





      },
      {
        id:'4',
        name:"Ali",
        login:"Year ago",
        email:"ali@email.com",
        title:'Name',
        detail:'Last Login',
        cat:'E-mail',
        role:'Customer'





      },
      {
        id:'5',
        name:"Ali",
        login:"Year ago",
        email:"ali@email.com",
        title:'Name',
        detail:'Last Login',
        cat:'E-mail',
        role:'Customer'





      },
]
const Users = ({navigation}) => {
    return (
        <View style={{backgroundColor:'white',width:wp('100%')}}>
 <View>
            <AntDesign
                     onPress={()=> navigation.navigate("HomeScreen")}   style={{marginTop: hp('3%'), marginLeft: wp('3%') }} name={"arrowleft"} size={35} color="black" />
                 </View>
            <Text style={{fontSize:30,textAlign:'center',marginTop:hp('2%')}}>User Details</Text>
             

        <ScrollView
        horizontal={true}>
          
        <View style={{marginTop:hp('10%'),height:hp('100%')}}>
        <View style={{justifyContent:'space-around',flexDirection:'row'}}>
                <Text style={{fontSize:20}}>Name</Text>
                <Text style={{fontSize:20}}>Last Login</Text>
                <Text style={{fontSize:20}}>E-mail</Text>
                <Text style={{fontSize:20}}>Role</Text>



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
                  <Button title="Add User" onPress={()=> navigation.navigate("UserProfile")} />
              </View>
              
        </View>
        
        </ScrollView>
        </View>
        

    )
}

export default Users;

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