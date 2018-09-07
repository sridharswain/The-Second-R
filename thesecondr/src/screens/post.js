import React from 'react';
import {View,Text,ViewPagerAndroid,Image,ScrollView,StyleSheet} from 'react-native';
import { get } from '../utils/request';
import Styles from '../res/styles';
import Button from '../components/Button';

export default class Post extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sellerPhone : '',
            sellerEmail : '',
            sellerName : ''
        }
        this.imageLinks = this.props.data.imageLink;
    }

    componentWillMount(){
        this.renderPage();
        this.getSellerInfo();
    }

    renderPage = () => {
        this.views = []
        this.imageLinks.forEach(element => {
            this.views.push(
                <View>
                    <Image source = {{uri : element}} style={{width : '100%',height : 250}} />
                </View>
            )
        });
    }

    getSellerInfo = () => {
        console.log(this.props.data);
        get('/getUserById',{id : this.props.data._id})
        .then((response) => {
            console.log(response);
            if(response.error) alert("Seller Not Found");
            else {
                var sellerData = response.res;
                this.setState({
                    sellerPhone : sellerData.phone,
                    sellerEmail : sellerData.email,
                    sellerName : sellerData.name
                });
            }
        })
    }

    render(){
        return(
            <View style={Styles.container}>
                <View style = {{flex : 1}}>
                    <ViewPagerAndroid
                        style= {{height : 250}}
                        initialPage={0}>
                        {this.views}
                    </ViewPagerAndroid>
                    <ScrollView>
                        <View style={{paddingHorizontal : 20, paddingVertical : 10}}>
                            <Text style={styles.titleText}>{this.props.data.title}</Text>
                            <Text style={[styles.titleText,{alignSelf : 'flex-start',fontSize : 20}]}>Description</Text>
                            <Text style={{fontSize : 15}}>{this.props.data.description}</Text>
                            <Text style={[styles.titleText,{alignSelf : 'flex-start',fontSize : 20}]}>Seller Info.</Text>
                            <Text style={{fontSize : 15}}>{"Name : " + this.state.sellerName}</Text>
                            <Text style={{fontSize : 15}}>{"Email : " + this.state.sellerEmail}</Text>
                            <Text style={{fontSize : 15}}>{"Phone : " + this.state.sellerPhone}</Text>
                        </View>
                    </ScrollView>
                </View>
                <Button text={"BUY NOW FOR Rs. "+ this.props.data.cost}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleText : {
        alignSelf : 'center',
        color : 'black',
        fontWeight : 'bold',
        fontSize : 30,
        fontFamily : 'Ubuntu-Light'
    }    
})