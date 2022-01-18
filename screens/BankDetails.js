import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import Modal from "react-native-modal";
import Entypo from "react-native-vector-icons/dist/Entypo";
import DropDownPicker from 'react-native-dropdown-picker';


const Data = [{
    title: 'Shopping',
    account: '12345679876',
    Bank: 'HBL'
}]


const BankDetails = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);

    };
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'HBL', value: 'HBL' },
        { label: 'Meezan Bank', value: 'Meezan Bank' },
        { label: 'JazzCash', value: 'JazzCash' },
        { label: 'EasyPaisa', value: 'EasyPaisa' },
       


    ]);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Add Your Bank Details</Text>
            <TouchableOpacity onPress={toggleModal}>
                <Modal style={styles.modal}

                    isVisible={isModalVisible}
                    animationType={"slide"}
                    onSwipeComplete={() => setModalVisible(false)}
                    swipeDirection="left"

                >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Text style={{ color: 'black', fontSize: 20 }}>Add Your Bank Details</Text>
                        <Entypo name={'circle-with-cross'} size={25} />
                    </View>
                    <View style={{marginTop:hp('2%')}}>
                    <Text style={styles.name}>Title:</Text>
                    <TextInput
                        placeholder="Enter Your Bank Title"
                        style={styles.input}
                    />
                    </View>
                    <View style={{marginTop:hp('2%')}}>
                    <Text style={styles.name}>Account Number:</Text>
                    <TextInput
                        placeholder="Enter Your Account Number"
                        style={styles.input}
                    />
                    </View>
                    <View style={{marginTop:hp('2%')}}>
                    <Text style={styles.name}>Bank:</Text>
                    <View style={styles.drop}>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        
                        

                    />

                    </View>
                    </View>




                    <View style={styles.btn1}>
                        <Button title="Close" />
                        <View style={{ marginLeft: wp('3%') }}>
                            <Button title="Save" />
                        </View>
                    </View>
                </Modal>

                <View style={styles.add}>
                    <AntDesign style={styles.plus} name={'pluscircleo'} size={35} />
                </View>
            </TouchableOpacity>
            <View style={{ marginTop: hp('2%'), height: hp('67%') }}>
                <FlatList

                    data={Data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (

                        <View style={styles.main}>

                            <Text style={styles.name}>Title:</Text>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.name}>Account Number:</Text>
                            <Text style={styles.title}>{item.account}</Text>
                            <Text style={styles.name}>Bank:</Text>
                            <Text style={styles.title}>{item.Bank}</Text>

                            <View style={styles.btn}>
                                <Button title="Edit" />
                                <View style={{ marginLeft: wp('2%') }}>
                                    <Button title="Remove" />
                                </View>
                            </View>










                        </View>
                    )


                    }
                />
            </View>
        </View>
    )
}
export default BankDetails;

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: 'white'
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: hp('5%')
    },
    add: {
        height: hp('10%'),
        width: wp('20%'),
        backgroundColor: 'white',
        marginTop: hp('5%'),
        borderWidth: 0.2,
        borderColor: 'black',
        marginLeft: wp('5%')
    },
    plus: {
        textAlign: 'center',
        marginTop: hp('2%')
    },
    main: {
        height: hp('40%'),
        marginTop: hp('1%'),
        width: wp('90%'),
        padding: 5,
        marginBottom: 2,
        backgroundColor: 'white',
        borderRadius: 10,
        marginLeft: wp('5%'),
        borderColor: 'black',
        borderWidth: 0.4,
    },
    name: {
        fontSize: 20,
        fontWeight: '700',
        color: 'black',
        padding: 6
    },
    title: {
        fontSize: 18,
        color: 'black',
        marginLeft: wp('15%'),
        padding: 2
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: hp('4%')
    },
    modal: {
        flex: 0,

        backgroundColor: "white",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff',
        marginTop: hp('10%'),
        marginLeft: wp('10%'),
        height: hp('70%')

    },
    input: {
        width: wp('70%'),
        height: hp('7%'),
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginLeft: wp('5%')
    },
    drop:{
        width: wp('70%'),
        height: hp('7%'),
        marginLeft: wp('5%'),


    },
    btn1: {
        flexDirection: 'row',
        marginTop: hp('10%'),
        marginLeft:wp('50%')
    },


})