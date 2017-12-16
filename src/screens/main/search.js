//import required modules
import React, { Component } from 'react';
import {StyleSheet, Image} from 'react-native';
import { Container, Content, View, Text, Left, Right, Body} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

//import components
import AppFooter from '../../components/appFooter';


//define the search tab on main screens
export default class SearchScreen extends Component  {
 static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="search" style={{color: tintColor, fontSize: 20}} />
  ),
}
render() {
  
    return (
      <Container>
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}> Click the search bar </Text>
        </View>

        <AppFooter />
      </Container>
      
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#EEF0F1',    
    alignItems: 'center', 
    justifyContent: 'center',
    flex: 1
  },
  textStyle: {
    fontWeight: 'bold',
    color: '#3D5460',
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center'
  }
});