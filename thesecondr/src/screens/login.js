import React,{Component} from 'react';
import {View,Dimensions,Image,Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {post} from '../utils/request';
import Toast from '../utils/Toast'
import Styles from '../res/styles';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

export default class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            width : 0,
            currentPage : 2,
            email : '',
            password : ''
        }
    }
    
    componentDidMount(){
        this.setState({width : Dimensions.get('window').width});
    }

    onRegisterPress = () => {
        Actions.register();
    }

    onLoginPressed = () => {
        var email = this.state.email;
        var password =  this.state.password;
        post('/signin',{
            email : email,
            password : password
        })
        .then((res) => {
            if(res.error){
                Toast.show(res.res,Toast.SHORT);
            }
            else{
                //GO TO HOME CODE GOES HERE
            }
        });
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
                        placeholder="Email"
                        onChangeText={ (email)=> this.setState( { email } ) }/>
                
                    <TextInput
                        style = {{marginTop : 10}}
                        leftImage = {require('../res/images/locked.png')}
                        placeholder="Password"
                        onChangeText={ (password)=> this.setState( { password } ) }
                        password/>

                    <Button text="Login"
                        onPress={this.onLoginPressed}
                        style={{width : 310, borderRadius : 10, marginTop : 15}}/>
                </View>

                <View style={{flexDirection : 'row',justifyContent:'center'}}>
                    <Button text="Forgot Password?" style={{width : this.state.width/2}}/>
                    <Button text="Register" style={{width : this.state.width/2}} onPress={this.onRegisterPress}/>
                </View>
            </View>
        );
    }
}
