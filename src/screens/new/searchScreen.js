//import required modules
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Content, View, Text, Header, Title, Left, Right, Body, Item, Input } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

//import components
import AppFooter from '../../components/appFooter';


//define the search screen
const NewSearchScreen = (props) => {
    const { navigation } = props;
    return (
      <Container>
        <Header style={{backgroundColor:'white'}}>
          {/* icon to go back */}
          <Left>
            <TouchableOpacity transparent onPress={() => navigation.goBack(null)}>
              <Icon name="arrow-back" style={{color: '#197DC8', fontSize: 25}} />
            </TouchableOpacity>
          </Left>

          {/* placeholder */}
          <Body>
            <Item style={{width: 300}}>
                <Input placeholder="Search Twitter" />
            </Item>
          </Body>
          
          <Right />
        </Header>

        <Content style={{backgroundColor: '#EEF0F1'}}>
         
        </Content>

        <AppFooter />
      </Container>
    );
};

export default NewSearchScreen;