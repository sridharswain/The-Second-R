import React,{Component} from 'react';
import {View,ScrollView,StyleSheet,Dimensions,Image,Text} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import StepIndicator from '../components/StepIndicator';
import TextInput from '../components/TextInput';
import Button from '../components/Button'
import Styles from '../res/styles';
import Toast from '../utils/Toast'


const isBlank = (str) => {
    return (!str || /^\s*$/.test(str));
}

const isEmail = (str) => {
    return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(str))
}

export default class Register extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            currentPage : 1,
            width : 0,
            name : '',
            email : '',
            password : '',
            rePassword : '',
            address : ''
        }
    }

    componentWillMount(){
        var window= Dimensions.get('window');
        this.setState({width : window.width});
    }

    correctPersonalInfo(){
        const isOk = (!isBlank(this.state.name) && isEmail(this.state.email));
        if(!isOk) Toast.show("Invalid Data !",Toast.SHORT);
        return isOk;
    }

    correctPasswordInfo(){
        const isOk = (this.state.password.length > 2 && this.state.password == this.state.rePassword)
        if(!isOk) Toast.show("Invalid Data !",Toast.SHORT);
        return isOk;
    }

    onContinuePressed = () =>{
        switch(this.state.currentPage){
            case 1:
                if(!this.correctPersonalInfo()) return;
                break;
            case 2:
                if(!this.correctPasswordInfo()) return;
                break;
        }
        this.scrollForm.scrollTo({x: this.state.currentPage*this.state.width, y: 0, animated: true})
        this.setState({currentPage : this.state.currentPage+1});
    }

    render(){
        return(
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}>
                <View style={[Styles.center]}>
                    <Image source={require("../res/images/logo.png")}
                                style={[Styles.logo,{marginTop:60}]}/>

                    <Text style={Styles.title} >The Second R</Text>
                    <StepIndicator current={this.state.currentPage} style={{marginTop:50}} />
                    <ScrollView
                        ref = {(ref)=> this.scrollForm = ref}
                        scrollEnabled={false}
                        pagingEnabled={true}
                        style={{marginBottom:20, marginTop:30}}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>

                        <View style={[{width : this.state.width},styles.pageStyle]}>
                            <TextInput
                                leftImage = {require('../res/images/user.png')}
                                placeholder="Name"
                                onChangeText={(name)=>this.setState({name})}/>
                            <TextInput
                                ref = {(ref)=>{this.emailView = ref}}
                                style={{marginTop : 10}}
                                leftImage = {require('../res/images/mail.png')}
                                placeholder="Email"
                                onChangeText={(email)=>this.setState({email})}/>
                        </View>

                        <View style={[{width : this.state.width},styles.pageStyle]}>
                            <TextInput                     
                                leftImage = {require('../res/images/locked.png')}
                                placeholder="Password"
                                onChangeText={(password)=>this.setState({password})}
                                password/>
                            <TextInput
                                style={{marginTop : 10}}
                                leftImage = {require('../res/images/locked.png')}
                                placeholder="Retype Password"
                                onChangeText={(rePassword)=>this.setState({rePassword})}
                                password/>
                        </View>

                        <View style={[{width : this.state.width},styles.pageStyle]}>
                            <TextInput
                                style = {{flex :1}}
                                leftImage = {require('../res/images/route.png')}
                                placeholder = 'Address'
                                onChangeText = {(address) => this.setState({address})}
                                multiline/>
                        </View>

                    </ScrollView>
                    
                    <Button text={(this.state.currentPage!=0)?"Continue":"Sign up"}
                            style={{width : 310, borderRadius : 10, marginTop : 15}}
                            onPress={this.onContinuePressed}/>
                    
                </View>
            </KeyboardAwareScrollView>
        );
    }
}

const styles = StyleSheet.create({
    pageStyle : {
        alignItems:'center'
    }
});
