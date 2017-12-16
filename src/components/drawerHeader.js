//import required modules
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Content, View, Text, Header, Title, Left, Right, Body, Item, Input } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';


//define the search screen
const DrawerHeader = (props) => {
    const { navigation, title } = props;
    return (
        <Header style={{backgroundColor:'white'}}>
          <Left>
            <TouchableOpacity transparent onPress={() => navigation.goBack(null)}>
              <Icon name="arrow-back" style={{color: '#197DC8', fontSize: 25}} />
            </TouchableOpacity>
          </Left>
          <Body>
            <Title style={{color: '#000'}}> {title} </Title>
          </Body>
          <Right />
        </Header>
    );
};

export default DrawerHeader;