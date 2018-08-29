import React,{Component} from 'react';
import {StyleSheet} from 'react-native';
import Drawer from 'react-native-drawer';
import {Router,Scene} from 'react-native-router-flux';
import Menu from '../components/Menu';
import MenuText from '../components/MenuText';
import Browse from './browse';
import Orders from './orders';


export default class Home extends Component{

    menu = () => {
        return (
            <Menu>
                <MenuText>Browse</MenuText>
                <MenuText>My Orders</MenuText>
                <MenuText>My Profile</MenuText>
                <MenuText>Logout</MenuText>
            </Menu>
        );
    }

    render(){
        return(
            <Drawer
                open={true}
                panOpenMask = {0.9}
                panCloseMask = {0.9}
                negotiatePan={true}
                captureGestures={true}
                type="displace"
                side = 'left'
                styles={drawerStyles}
                content={this.menu()}
                openDrawerOffset={0.4}
                tweenHandler={(ratio) => ({
                    main: { opacity: Math.max(0.1,(1-ratio)) }
                  })}>
                <Router>
                    <Scene key="drawer">
                        <Scene key="home" component = { Browse } initial hideNavBar/>
                        <Scene key="orders" component = { Orders }/>
                    </Scene>
                </Router>
            </Drawer>
        );
    }
}

const drawerStyles = StyleSheet.create({
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
    main: {paddingLeft: 3},
  });
