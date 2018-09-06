import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import Styles from '../res/styles';

export default class Browse extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={Styles.container}>
                <Image source={require('../res/images/route.png') }/>
                <Text style ={{color : 'blue'}}>Browse</Text>
            </View>
        );
    }
}