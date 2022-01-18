import React from 'react';
import { StyleSheet,View,Image,Text,FlatList,  Button,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

const DATA=[
    {
        user_name:'T-Shirts',
        id:'1',
        image: require('../assets/icons/shirt.jpg'),
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        price:'$250',
        accessor: "Add To Cart"
 
    },
    {
        user_name:'Shirts',
        id:'2',
        image: require('../assets/icons/shits.jpg'),
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
       price:"$150",
        accessor: "Add To Cart"
    },
    {
        user_name:'Watches',
        id:'3',
        image: require('../assets/icons/watch.jpg'),
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        price:'$500',
        accessor: "Add To Cart"
    },
    {
        user_name:'Pents',
        id:'4',
        image: require('../assets/icons/pent.png'),
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        price:'$400',
        accessor: "Add To Cart"
    }

]

const SPACING=15;


const Products = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <View>
            <AntDesign
                     onPress={()=> navigation.navigate("HomeScreen")}   style={{marginTop: hp('-3%'), marginLeft: wp('-44%') }} name={"arrowleft"} size={35} color="black" />
                 </View>
                <Text style={styles.texta}>Product List</Text>
                <View style={styles.btn}>
                  <Button title="Add Product" onPress={()=> navigation.navigate("AddProduct")} />
              </View>
              

            </View>
            <View style={styles.footer}>
            <FlatList
            data={DATA}
           
            keyExtractor={item => item.id}
            renderItem={({item}) =>(
                <View style={styles.main}>
                <View style={{backgroundColor:'white',borderRadius:19}}>
                                <Text style={styles.userName} >{item.user_name}</Text>
                    
                                <Image source={item.image} style={styles.hImage} />


                    
                 <Text style={{fontSize:15,color:'black',marginLeft:wp('8'),marginRight:wp('6'),
        marginTop:hp('2')}}>{item.description}</Text> 
         <Text style={{fontSize:25,color:'blue',marginLeft:wp('8'),marginRight:wp('6'),
        marginTop:hp('2')}}>{item.price}</Text>   
        
        
        
                    
                </View>
                </View>
            )
          
          
          }
          />
          </View>
            
                    
            
                   

                </View>
                
               

         
            


)
}

export default Products; 

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
        height: hp('60%'),
        marginTop: hp('3'),
        width: wp('90%'),
        padding:SPACING,
        marginBottom:SPACING,
        backgroundColor:'white',
        borderRadius:19,
        marginLeft:wp('1%')
    },
    
    HeaderLeft:{
       flexDirection:'column',
    },
    hImage:{
        height: hp('30%'),
       width: wp('50%'),
       marginTop:hp('2'),


        
     
    },
    userName:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
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
        backgroundColor: '#ebf3f9',
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