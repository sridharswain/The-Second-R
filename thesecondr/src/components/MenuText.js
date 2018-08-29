import React,{Component} from 'react';
import {TouchableOpacity,Text} from 'react-native';

export default class MenuText extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <TouchableOpacity onPress={this.props.onPress}>
                <Text style = {{color:'black', fontSize : 20, fontFamily : 'Ubuntu-Medium',
                                padding:10}}>
                    {this.props.children}
                </Text>
            </TouchableOpacity>
        );
    }
}