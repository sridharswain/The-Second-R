import React,{Component} from 'react';
import {StyleSheet,Image,View,Text,TouchableOpacity} from 'react-native';
import Drawer from 'react-native-drawer';
import {Actions} from 'react-native-router-flux';
import Styles from '../res/styles';
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
            currentPage : this.browse,
            header : 'Home',
            isDrawerOpen : true
        }
    }

    logout = () => {
        //LOGOUT CODE GOES HERE
    }

    goto = (screen,header) =>{
        this.setState({currentPage : screen,header});
        this.drawer.close();
    }

    toggleDrawer = () => {
        if(this.state.isDrawerOpen) this.drawer.close();
        else this.drawer.open();
    }

    render(){
        return(
            <View style={Styles.container}>
            <View style={drawerStyles.headerView}>
                <TouchableOpacity onPress = {this.toggleDrawer}>
                    <Image source={require('../res/images/stack.png')} 
                        style={{width : 25, height :25}}/>
                </TouchableOpacity>
                <Text style={drawerStyles.headerText}>{this.state.header}</Text>
            </View>
            <Drawer
                tapToClose
                panOpenMask = {0.2}
                panCloseMask = {0.2}
                negotiatePan={true}
                captureGestures={true}
                type="displace"
                side = 'left'
                onClose = {() => this.setState({isDrawerOpen : !this.state.isDrawerOpen})}
                onOpen = {() => this.setState({isDrawerOpen : !this.state.isDrawerOpen})}
                styles={drawerStyles}
                ref = {(ref) => this.drawer = ref}
                content={(
                <Menu>
                    <MenuText source={require('../res/images/search.png')} onPress={() => this.goto(this.browse,"Home")}>Home</MenuText>
                    <MenuText source={require('../res/images/trade.png')} onPress={() => this.goto(this.sell,"Sell")}>Sell</MenuText>
                    <MenuText source={require('../res/images/orders.png')} onPress={() => this.goto(this.orders,"My Orders")}>My Orders</MenuText>
                    <MenuText source={require('../res/images/personal.png')} onPress={() => this.goto(this.profile,"My Profile")}>My Profile</MenuText>
                    <MenuText source={require('../res/images/logout.png')} onPress={this.logout}>Logout</MenuText>
                </Menu>
                )}
                openDrawerOffset={0.4}
                tweenHandler={(ratio) => ({
                    main: { opacity: Math.max(0.1,(1-ratio)) }
                  })}>
                {this.state.currentPage}
            </Drawer>
            </View>
        );
    }
}

const drawerStyles = StyleSheet.create({
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
    main: {paddingLeft: 3},
    headerView : {
        alignItems:'center',
        justifyContent:'flex-start',
        flexDirection:'row',
        width:'100%',
        height:60,
        elevation:5,
        backgroundColor:'white',
        padding :10
    },
    headerText : {
        fontSize : 23,
        marginLeft : 10
    }
  });
