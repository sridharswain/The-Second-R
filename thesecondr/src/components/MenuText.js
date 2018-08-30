import React,{Component} from 'react';
import {TouchableOpacity,Text,View} from 'react-native';

export default class MenuText extends Component {

    constructor(props){
        super(props);
    }

    render(){
        //console.log(this.props.children);
        return(
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={{width : '100%'}}>
                    <Text style = {{color:'black', fontSize : 20, fontFamily : 'Ubuntu-Medium',
                                    padding:10}}>
                        {this.props.children}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}