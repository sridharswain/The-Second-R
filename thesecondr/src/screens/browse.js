import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';

export default class Browse extends Component{
    render(){
        return(
            <View>
                <Image source={require('../res/images/route.png') }/>
                <Text style ={{color : 'blue'}}>Browse</Text>
            </View>
        );
    }
}