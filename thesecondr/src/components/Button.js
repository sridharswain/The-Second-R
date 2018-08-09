import React,{Component} from 'react'
import {TouchableHighlight,View,Text} from 'react-native'
import Styles from '../res/styles';

export default class Button extends Component{
    render(){
        return(
            <TouchableHighlight onPress={this.props.onPress}>
                <View style={[Styles.center,Styles.wideButton,this.props.style]}>
                        <Text style={[{color : 'white', fontFamily:'Ubuntu-Light'},this.props.textStyle]}>
                            {this.props.text}
                        </Text>
                </View>
            </TouchableHighlight>
        );
    }
}