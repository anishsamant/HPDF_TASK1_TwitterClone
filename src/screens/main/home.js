//import required modules
import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Fab, Content } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

//import components
import AppFooter from '../../components/appFooter';
import CardContent from '../../components/cardContent';

//import the tabs set for main screen
import MainScreenTabs from '../../../app';


//define the home tab on main screen
export default class HomeScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="home" style={{color: tintColor, fontSize: 20}} />
  ), 
}
 constructor() {
   super();
   this.state = {
     active: true,
   };
 
 }  
  render() {
    const { navigation } = this.props;
    
    return (
      <Container>
        <Content>
          {/* Send the contents of home tab to cardContent component */}
          <CardContent
            dp= "../images/federerDp.jpg"
            contentPic= "../images/federerContent.jpg"
            name= "Roger Federer"
            handle= "@rogerfederer"
            lastSeen= "4h"
            content= "When you do something best in life, you don't really want to give that up and for me its tennis."
            comments= "181"
            retweets= "1,390"
            likes="10.7K" />
          <CardContent 
            dp= "../images/tendulkarDp.jpg"
            contentPic= "../images/tendulkarContent.jpg"
            name= "Sachin Tendulkar"
            handle= "@sachin_rt"
            lastSeen= "1d"
            content= "Every individual has his own style, his own way of presenting himself on and off the field."
            comments= "112"
            retweets= "470"
            likes="8,680"/>
          <CardContent 
            dp= "../images/ronaldoDp.jpg"
            contentPic= "../images/ronaldoContent.jpg"
            name= "Cristiano Ronaldo"
            handle= "@Cristiano"
            lastSeen= "3d"
            content= "We don't want to tell our dreams. We want to show them."
            comments= "415"
            retweets= "3,447"
            likes="26K"/>
        </Content>

        {/* Fab item */}
        <Fab
            active={this.state.active}
            style={{ backgroundColor: '#197DC8', marginBottom: 55 }}
            position="bottomRight"
            onPress={() => this.setState({ active:!this.state.active })}>
            <Icon name="twitter" />
        </Fab>
          
        <AppFooter />
    
      </Container>
      
    );
  }
}
