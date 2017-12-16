//import required modules
import React, { Component } from 'react';
import {  Container, Content, View, Text, Left, Right, Body, Header, Title } from 'native-base';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


//define the content of header
const AppHeader = (props) => {
    const {navigation, tabKey} =props;  
    
      return(
        <Header hasTabs style={{backgroundColor: 'white'}}>
          <Left>
            <TouchableOpacity transparent onPress={()=> navigation.navigate("DrawerOpen")}>
              <Image style={styles.image} source={require('../images/profilePic.jpg')} />
            </TouchableOpacity>
          </Left>
          <Body>    
            <Title style={styles.iconColor}> {tabKey} </Title>
          </Body>
          <Right />
        </Header>
      );
};

const styles = StyleSheet.create({
  image: {
    width:40,
    height: 40,
    borderRadius: 40/2,
    alignSelf: 'center'
  },
  iconColor: {
    color: '#000'
  }
});

export default AppHeader;
