import React,{Component} from 'react';
import {View,Text,Image,Animated} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Button from '../components/Button';
import Styles from '../res/styles';

export default class Splash extends Component{

    constructor(props){
        super(props)

        this.state = {
            logoFadeValue : new Animated.Value(0),
            loginAnimValue : new Animated.Value(0)
        }
    }

    /*FADE IN ANIMATOR
        @param varToUpdate VARIABLE TO BE ANIMATED
        @param duration DURATION FOR WHICH VALUE TO ANIMATED
        @param callback FUNCTION TO BE CALLED AFTER THE END OF ANIMATION
    */
    fadeIn = (varToUpdate, duration, callback = () => {}) => {
        Animated.timing(
            varToUpdate,
            {
              toValue: 1,
              duration: duration,
            }
          ).start(callback);
    }

    componentDidMount(){
        this.fadeIn(this.state.logoFadeValue,1000,()=>{
            this.fadeIn(this.state.loginAnimValue,500);
        })
    }

    onLoginPress = () =>{
        Actions.login();
    }

    render(){
        return(
            <View style={{flex:1}}>

                <Animated.View style={[{opacity : this.state.logoFadeValue,flex:1},Styles.center]}>

                        <Image source={require("../res/images/logo.png")}
                            style={Styles.logo}/>

                        <Text style={Styles.title} >SecondR</Text>

                </Animated.View>

                <Animated.View style={{opacity : this.state.loginAnimValue}}>

                    <View 
                        style={{flexDirection: 'row',justifyContent:'space-evenly',alignItems:'center',marginBottom:50}}>
                        <Image source = {require("../res/images/google.png")} style={Styles.socialIcons}/>
                        <Image source = {require("../res/images/facebook.png")} style={Styles.socialIcons}/>
                    </View>
                
                    <Button text="Login/Register with email instead."
                    onPress={this.onLoginPress}/>

                </Animated.View>

            </View>
        );
    }
}
