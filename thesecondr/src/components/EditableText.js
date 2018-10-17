import React,{Component} from 'react';
import {View, TextInput, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default class EditableText extends Component{

    constructor(props){
        super(props);
        this.state = {
            editing : false
        }
    }

    onEditPress = () =>{
        this.setState({editing : true},() => {
            this.textId.focus();
            this.props.onEditPress();
        });
    }

    render(){
        return(
            <View style={[styles.container,this.props.style]}>
                    <Image style={[{width : 30,height :30},Styles.center]} source={this.props.leftImage}/>

                    <TextInput
                        ref = {(ref)=> this.textId = ref}
                        style={styles.inputText}
                        onChangeText={(text) => (this.props.onChangeText)?this.props.onChangeText(text):{}}
                        placeholder={this.props.placeholder}
                        secureTextEntry={this.props.password}
                        multiline={this.props.multiline} 
                        editable={this.state.editing}
                        selectTextOnFocus={!this.props.disabled}
                        value={this.props.text}
                        keyboardType={(this.props.keyboardType) ? this.props.keyboardType : 'default'} />

                    <TouchableOpacity onPress = {this.onEditPress}>
                        <Image style={[{width : 30,height :30},Styles.center]} source = {require('../res/images/edit.png')}/>
                    </TouchableOpacity>
                    
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
        
        paddingVertical : 3,
        alignItems : 'center',
        justifyContent:'space-evenly'
    }
});