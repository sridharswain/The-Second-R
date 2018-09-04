import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';

export default class Browse extends Component{

    static pageTitle = "Browse"

    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={{backgroundColor : 'white'}}>
                <Image source={require('../res/images/route.png') }/>
                <Text style ={{color : 'blue'}}>Browse</Text>
            </View>
        );
    }
}