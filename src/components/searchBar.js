//import required modules
import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Container, Content, Left , Right, Body, View, Text, TextInput, Header, Input, Button } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

//import new screens
import NewSearchScreen from '../screens/new/searchScreen';


//define the contents of search bar
const SearchBar = (props) => {

  const { navigation } = props;
  return (
  <Header searchBar style={{backgroundColor:'white'}}>
    <Left>
      <View style={{flexDirection: 'row'}}>
        {/* back arrow icon */}
        <TouchableOpacity transparent onPress={()=> navigation.navigate("DrawerOpen")}>
          <Image style={styles.image} source={require('../images/profilePic.jpg')} />
        </TouchableOpacity>

        {/* placeholder  */}
        <Button rounded style={styles.searchBarStyle} onPress={()=>navigation.navigate('NewSearchScreen')}>
          <Text style={styles.placeHolderColor}>Search Twitter</Text>
        </Button>
      </View>
    </Left>

    <Right>
      {/* add person icon */}
      <TouchableOpacity transparent>
        <Icon name="person-add" style={styles.iconColor} />
      </TouchableOpacity>
    </Right>
  </Header>
  );
};

const styles = StyleSheet.create({
  image: {
    width:40,
    height: 40,
    borderRadius: 40/2,
  },
  iconColor: {
    color: '#197DC8',
    fontSize: 30
  },
  searchBarStyle: {
    width: 268,
    backgroundColor: '#EEF0F1',
    paddingLeft: 10
  },
  placeHolderColor: {
    color: '#929596'
  }
});


export default SearchBar;