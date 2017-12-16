import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Item, Input, Button, Text, View } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

import DrawerHeader from '../../components/drawerHeader';


//under construction
export default class HelpCenter extends Component {
  render() {
    const { navigation } = this.props;    
    return (
      <Container>
        <DrawerHeader navigation={navigation} title={'Help Center'} />
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}> Under Construction </Text>
        </View>
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