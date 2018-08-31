import React,{Component} from 'react'
import {View,Text,TextInput as RTextInput,Image,StyleSheet} from 'react-native'
import Styles from '../res/styles';

export default class TextInput extends Component{
    render(){
        return(
            <View style={[styles.container,this.props.style]}>
                <Image style={[{width : 30,height :30},Styles.center]} source={this.props.leftImage}/>

                <RTextInput
                    style={styles.inputText}
                    onChangeText={this.props.onChangeText}
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.password}
                    multiline={this.props.multiline} />
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputText : {
        fontSize : 20,
        width : "70%",
    },

    container : {
        flexDirection:'row',
        borderColor : 'black',
        borderWidth : 1,
        borderRadius : 10,
        paddingHorizontal : 10,
        paddingVertical : 3,
        alignItems : 'center'
    }
})
