import React,{Component} from 'react';
import {Text,View, TouchableOpacity, StyleSheet, AsyncStorage} from 'react-native';
import { post } from '../utils/request';
import Styles from '../res/styles';
import TextInput from '../components/TextInput';
import Button from '../components/Button'
import Toast from '../utils/Toast';
import Logo from '../components/Logo';


export default class Profile extends Component{
    static pageTitle = "Profile"

    constructor(props){
        super(props);
        this.state = {
            editing : false,
            textEditing : null,
            email : '',
            name : '',
            phone : '',
            address : '',
            userId : '',
            profile : null,
        }
    }

    populateFields = async () => {
        var val = await AsyncStorage.getItem('userData');
        val = JSON.parse(val);
        this.setState({
            name : val.name,
            phone : val.phone,
            address : val.address,
            email : val.email,
            userId : val._id 
        });
    } 

    componentDidMount() {
        this.populateFields();
    }

    onEditClicked = () => {
        this.setState({editing : true})
    }

    onSavePressed = () => {
        let name = this.state.name;
        let address = this.state.address;
        let phone = this.state.phone;
        let email = this.state.email;
        let userId = this.state.userId;
        post("/updateUserById",{ name, phone, address, email, userId })
        .then(async (response) => {
            if(!response.error){
                await AsyncStorage.setItem('userData',JSON.stringify(response.res));
                this.setState({editing : false},() => {
                    Toast.show("Saved Successfully", Toast.SHORT);
                });

            }
        });
        //AFTER SERVER UPDATE, UPDATE LOCAL ASYNCSTORAGE
    }

    onCancelledPressed = () => {
        this.setState({editing : false}, () => {
            this.populateFields();
        })
    }

    render(){
        return (
            <View style={[Styles.container, Styles.center, styles.root]}>
                <View style={[{flex : 1}, Styles.center]}>
                    <Logo style = {{margin : 40}}/>
                    <TextInput
                        style={styles.editTextStyle}
                        leftImage = {require('../res/images/personal.png')}
                        text = {this.state.name}
                        onChangeText = {(name) => this.setState({name})}
                        disabled = {!this.state.editing}/>

                    <TextInput
                        style={styles.editTextStyle}
                        leftImage = {require('../res/images/mail.png')}
                        text = {this.state.email}
                        onChangeText = {(email) => this.setState({email})}
                        disabled = {!this.state.editing}/>

                    <TextInput
                        style={styles.editTextStyle}
                        leftImage = {require('../res/images/phone.png')}
                        text = {this.state.phone}
                        onChangeText = {(phone) => this.setState({phone})}
                        disabled = {!this.state.editing}/>

                    <TextInput
                        style={styles.editTextStyle}
                        leftImage = {require('../res/images/route.png')}
                        text = {this.state.address}
                        onChangeText = {(address) => this.setState({address})} multiline
                        disabled = {!this.state.editing}/>

                </View>
                {
                    (this.state.editing)
                    ?(
                        <View style ={styles.savePop}>
                            <TouchableOpacity onPress={this.onCancelledPressed}>
                                <Text>Cancel</Text>
                            </TouchableOpacity>
                            <Button
                                style={{width : 90, borderRadius : 10, height : 40, marginLeft : 30}}
                                onPress = {this.onSavePressed} 
                                text="Save"/>
                        </View>
                    )
                    :(
                        <View style={styles.editPop}>

                            <Button
                            style={{flexDirection : 'row', borderRadius : 10, height : 40, width : '100%', marginRight : 21}}
                            onPress = {() => this.setState({editing : true})}
                            text="Change Password"/>
                            <Button
                            style={{width : 90, borderRadius : 10, height : 40, marginLeft : 40}}
                            onPress = {() => this.setState({editing : true})}
                            text="Edit"/>
                        </View>
                    )
                }
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root : {
        backgroundColor : 'white'
    },
    savePop : {
        flexDirection : 'row',
        height : 80,
        alignItems:'center',
        backgroundColor:'white',
        width : "99%",
        justifyContent:'flex-end',
        paddingHorizontal : 10,
        borderTopLeftRadius : 10,
        borderTopRightRadius : 10,
        elevation : 10,
    },
    editPop : {
        flexDirection : 'row',
        height : 80,
        alignItems:'center',
        backgroundColor:'white',
        width : "99%",
        justifyContent:'space-evenly',
        paddingHorizontal : 10,
        borderTopLeftRadius : 10,
        borderTopRightRadius : 10,
        elevation : 10,
    },
    editTextStyle : {
        marginVertical : 5
    }
})