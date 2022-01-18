import React from 'react';
import { StyleSheet,View,Image,Text,FlatList,  Button,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

const DATA=[
    {
        user_name:'Total Sales',
        id:'1',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        price:'5782',
        title:'Sales Last Month',
        percent:'45%',
        accessor: "Gross sales of August"
 
    },
    {
        user_name:'Total Purchase',
        id:'2',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
       price:"9054",
       title:'Monthly Purchase',
       percent:'75%',


        accessor: "Avg Gross purchase"
    },
    {
        user_name:'Total cash transaction',
        id:'3',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        price:'2154',
        title:'Cash on Hand',
        percent:'25%',

        accessor: "Details about cash"
    },
    {
        user_name:'Daily Deposits',
        id:'4',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        price:'4672',
        title:'Security Deposits',
        percent:'30%',

        accessor: "Gross sales of June"
    }

]

const SPACING=15;


const NewData = ({navigation}) => {
    return(
           
            <FlatList
            data={DATA}
           
            keyExtractor={item => item.id}
            renderItem={({item}) =>(
                <View style={styles.main}>
                <View style={{borderRadius:19}}>
                                <Text style={styles.userName} >{item.user_name}</Text>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <Image source={require('../assets/icons/chartt.png')} style={styles.hImage} />  
                               <Text style={{fontSize:28,color:'red',marginTop:hp('5%')}}>{item.percent}</Text>
                               </View>
                                <Text style={{fontSize:22,fontWeight:'700',color:'black',marginLeft:wp('8'),marginRight:wp('6'),
        marginTop:hp('2')}}>{item.title}</Text> 
                                <Text style={{fontSize:25,color:'green',marginLeft:wp('8'),marginRight:wp('6'),
        marginTop:hp('2')}}>{item.price}</Text> 
         <Text style={{fontSize:22,color:'black',fontWeight:'700',marginLeft:wp('8'),marginRight:wp('6'),
        marginTop:hp('2')}}>{item.accessor}</Text> 
                 <Text style={{fontSize:15,color:'black',marginLeft:wp('8'),marginRight:wp('6'),
        marginTop:hp('2')}}>{item.description}</Text> 
           
        
        
        
                    
                </View>
                </View>
            )
          
          
          }
          />
            
                    
            
                   

                
               

         
            


)
}

export default NewData; 

const styles = StyleSheet.create({
    container:{
       backgroundColor:'#ebf3f9',
       height: hp('100%'),
       width: wp('100%')
 
    },
    card:{
        backgroundColor:'#fff',
        marginTop:hp('2'),

        

    },
    btn:{
        width: wp('30%'),
       marginLeft:wp('60%')
       


      },
    main:{
        height: hp('55%'),
        marginTop: hp('3'),
        width: wp('90%'),
        padding:SPACING,
        marginBottom:SPACING,
        backgroundColor:'white',
        borderRadius:19,
        marginLeft:wp('5%'),
        borderWidth:0.5
    },
    
    HeaderLeft:{
       flexDirection:'column',
    },
    hImage:{
        height: hp('15%'),
       width: wp('50%'),
       marginTop:hp('2%'),
       marginLeft:wp('10%')


        
     
    },
    userName:{
        fontSize:25,
        fontWeight:'bold',
        color:'blue',
        marginLeft:wp('3'),
        marginTop:hp('2'),


    },
    header:{
        flex: 2,
        justifyContent:'center',
        alignItems:'center',
       backgroundColor:'white',
        paddingBottom:50
    },
    footer:{
        flex: 6,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop: hp('-10'),
        alignItems:'center',
    },
    texta:{
        fontSize:30,
        fontWeight:'700',
        marginLeft:wp('-32%')
    }
   
});