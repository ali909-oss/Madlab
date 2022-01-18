import React ,{useState} from 'react';
import {
    View,
    Text,FlatList,StyleSheet,Button,Image,TouchableOpacity
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Modal from "react-native-modal";
import AntDesign from 'react-native-vector-icons/dist/AntDesign';


const Data=[
    {
      id:'1',
      name:"Headphones",
      price:"$250",
      status:'Live',
      category:'Electronics',
      image: require('../assets/icons/delete.png'),

      detail:'Last Login',
      cat:'E-mail',
      role:'Customer'
    },
    {
        id:'2',
        name:"Watches",
        price:"$250",
        status:'Live',
        category:'Electronics',
        image: require('../assets/icons/delete.png'),


        title:'Name',
        detail:'Last Login',
        cat:'E-mail',
        role:'Customer'





      },
      {
        id:'3',
        name:"Handsfree",
        price:"$250",
        status:'Live',
        category:'Electronics',
        image: require('../assets/icons/delete.png'),


        title:'Name',
        detail:'Last Login',
        cat:'E-mail',
        role:'Customer'





      },
      {
        id:'4',
        name:"Watches",
        price:"$250",
        status:'Live',
        category:'Electronics',
        image: require('../assets/icons/delete.png'),


        title:'Name',
        detail:'Last Login',
        cat:'E-mail',
        role:'Customer'





      },
      {
        id:'5',
        name:"Watches",
        price:"$250",
        status:'Live',
        category:'Electronics',
        image: require('../assets/icons/delete.png'),


        title:'Name',
        detail:'Last Login',
        cat:'E-mail',
        role:'Customer'





      },
      {
        id:'6',
        name:"Watches",
        price:"$250",
        status:'Live',
        category:'Electronics',
        image: require('../assets/icons/delete.png'),


        title:'Name',
        detail:'Last Login',
        cat:'E-mail',
        role:'Customer'





      },
      {
        id:'7',
        name:"Watches",
        price:"$250",
        status:'Live',
        category:'Electronics',
        image: require('../assets/icons/delete.png'),


        title:'Name',
        detail:'Last Login',
        cat:'E-mail',
        role:'Customer'





      },
]
const Category = ({navigation}) => {

    const [isModalVisible, setModalVisible] = useState(true);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }
    return (
        <View style={{backgroundColor:'white',width:wp('100%')}}>
          <View>
            <AntDesign
                     onPress={()=> navigation.navigate("HomeScreen")}   style={{marginTop: hp('3%'), marginLeft: wp('3%') }} name={"arrowleft"} size={35} color="black" />
                 </View>

            <Text style={{fontSize:28,textAlign:'center',marginTop:hp('2%')}}>Product Category</Text>
             

        <ScrollView
        horizontal={true}>
          
        <View style={{marginTop:hp('10%'),height:hp('130%')}}>
        <View style={{justifyContent:'space-around',flexDirection:'row'}}>
                <Text style={{fontSize:20}}>P.Name</Text>
                <Text style={{fontSize:20}}>Price</Text>
                <Text style={{fontSize:20}}>Status</Text>
                <Text style={{fontSize:20}}>Category</Text>
               <Text style={{fontSize:20}}>Actions</Text>
                




            </View>

         <FlatList
            
            data={Data}
            keyExtractor={item => item.id}
            renderItem={({item}) =>(

                <View style={styles.mainn}>
                   

                    <Text style={styles.name}>{item.name}</Text>
                   
                    <Text style={{color:'black',fontSize:15,color:'green',marginLeft:wp('30%'),marginTop:hp('-3%')}}>{item.price}</Text>
                    <Text style={{color:'grey',fontSize:15,marginTop:hp('2%'),marginLeft:wp('55%'),marginTop:hp('-3%')}}>{item.status}</Text>
                    <Text style={{color:'black',fontSize:15,color:'green',marginLeft:wp('78%'),marginTop:hp('-3%')}}>{item.category}</Text>
                   <View style={{marginLeft:wp('110%')}}>

                   <TouchableOpacity onPress={toggleModal}>
            <Modal isVisible={isModalVisible}
                        >
       
          <Text style={{color:'white',fontSize:30}}>Product Deleted</Text>

          <Button title="Cancel" onPress={toggleModal} />
        
      </Modal>
      <Image source={item.image} style={styles.image} />
            </TouchableOpacity>
                  
           

                     </View>
                    
                    

                    
                    



                    
                </View>
            )
          
          
          }
          
          />
          
          
              
        </View>
        
        </ScrollView>
        </View>
        

    )
}

export default Category;

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
        fontSize:18,
        fontWeight:'700',
        color:'blue',
    },
    Imageholder:{
        padding:12,
        marginLeft:wp('20%'),
        justifyContent:'space-evenly',
        flexDirection:'column'
    

        


    },
    image:{
      height: hp('4%'),
     width: wp('5%'),
    
     marginTop:hp('-3%')
    
    }
    
   
})