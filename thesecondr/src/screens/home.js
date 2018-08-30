import React,{Component} from 'react';
import {StyleSheet,Button} from 'react-native';
import Drawer from 'react-native-drawer';
import {Actions} from 'react-native-router-flux';
import Menu from '../components/Menu';
import MenuText from '../components/MenuText';
import Browse from './browse';
import Orders from './orders';
import Sell from './sell';
import Profile from './profile';


export default class Home extends Component{

    constructor(props){
        super(props);
        this.browse = (<Browse />);
        this.sell = (<Sell />);
        this.orders = (<Orders />);
        this.profile = (<Profile />);
        this.state = {
            currentPage : this.browse
        }
    }

    goToSell = () => {
        console.log("Sell Pressed");
        //Actions.sell();
    }

    goto = (screen) =>{
        this.setState({currentPage : screen});
        this.drawer.close();
    }

    /*menu = () => {
        return (
            
        );
    }*/

    render(){
        return(
            <Drawer
                open={true}
                panOpenMask = {0.2}
                panCloseMask = {0.2}
                negotiatePan={true}
                captureGestures={true}
                type="displace"
                side = 'left'
                styles={drawerStyles}
                ref = {(ref) => this.drawer = ref}
                content={(
                <Menu>
                    <MenuText onPress={() => this.goto(this.browse)}>Browse</MenuText>
                    <MenuText onPress={() => this.goto(this.sell)}>Sell</MenuText>
                    <MenuText onPress={() => this.goto(this.orders)}>My Orders</MenuText>
                    <MenuText onPress={() => this.goto(this.profile)}>My Profile</MenuText>
                    <MenuText onPress={this.goToSell}>Logout</MenuText>
                </Menu>
                )}
                openDrawerOffset={0.4}
                tweenHandler={(ratio) => ({
                    main: { opacity: Math.max(0.1,(1-ratio)) }
                  })}>
                {this.state.currentPage}
            </Drawer>
        );
    }
}

const drawerStyles = StyleSheet.create({
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
    main: {paddingLeft: 3},
  });
