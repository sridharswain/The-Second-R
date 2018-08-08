import React,{Component} from 'react';
import {View,Dimensions,Image,Text} from 'react-native';
import Styles from '../res/styles';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

export default class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            width : 0,
            currentPage : 2,
        }
    }
    
    componentDidMount(){
        this.setState({width : Dimensions.get('window').width});
    }

    render(){
        return(
            <View style={[Styles.container,{alignItems:'stretch'}]}>
                <View style={[Styles.container,Styles.center]}>

                    <Image source={require("../res/images/logo.png")}
                            style={Styles.logo}/>

                    <Text style={Styles.title} >The Second R</Text>

                    <TextInput
                        style = {{marginTop : 20}} 
                        leftImage = {require('../res/images/mail.png')}
                        placeholder="Email"/>
                
                    <TextInput
                        style = {{marginTop : 10}}
                        leftImage = {require('../res/images/locked.png')}
                        placeholder="Password"
                        password/>

                    <Button text="Login"
                        style={{width : 310, borderRadius : 10, marginTop : 15}}/>
                </View>

                <View style={{flexDirection : 'row',justifyContent:'center'}}>
                    <Button text="Forgot Password?" style={{width : this.state.width/2}}/>
                    <Button text="Register" style={{width : this.state.width/2}}/>
                </View>
            </View>
        );
    }
}