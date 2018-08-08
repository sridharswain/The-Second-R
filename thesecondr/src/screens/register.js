import React,{Compoenent} from 'react';
import {View} from 'react-native';
import StepIndicator from '../components/StepIndicator';
import Styles from '../res/styles';

export default class Register extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            currentPage : 1
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={Styles.center}>
                    <StepIndicator current={this.state.currentPage} />
                </View>
            </View>
        );
    }
}