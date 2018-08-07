import React,{Component} from 'react'
import {View,Text} from 'react-native'
import Styles from '../res/styles';

export default class Button extends Component{
    render(){
        return(
            <View style={[Styles.center,Styles.wideButton]}>
                <Text style={{color : 'white',fontFamily:'Ubuntu-Light'}}>
                    {this.props.text}
                </Text>
            </View>
        );
    }
}