//import required modules
import React, { Component } from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Container, Content, View, Text, Left, Right, Body, Card, CardItem, Header, Title, Footer, FooterTab, Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

//initialize json object
let profileInfo='';


//define the contents of sidebar
const SideBar = (props) => {
    //define json object
    profileInfo = {
          username: 'anish samant',
          userid: '@anishsamant',
          following: 600,
          followers: 800,
        };

    const { navigation } = props;
    const {username, userid,following,followers} = profileInfo;
    return (
      <Container>
        <Content>
          <Card>
            {/* Account info */}
            <CardItem >
              <View>
                <TouchableOpacity transparent onPress={()=> navigation.navigate("DrawerClose")}>
                  <Thumbnail source={require('../../images/profilePic.jpg')} />
                </TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold'}}>{username}</Text>
                  <Icon name='chevron-down' style={{fontSize: 12, color: '#197DC8', alignSelf: 'center', paddingLeft: 130}}/>
                </View>
                <Text note>{userid}</Text>
                    
                <View style = {{flexDirection: 'row', paddingTop: 10}} >
                  <Text>{following}</Text>
                  <Text note style={{paddingLeft: 7}}>Following </Text>
                  <Text style={{paddingLeft: 10}}>{followers}</Text>
                  <Text note style={{paddingLeft: 7}}>Followers</Text>
                </View>
              </View>
            </CardItem>
           
            {/* Screens info */}
            <CardItem style={styles.cardStyle}>
              <View style={{flexDirection: 'column'}}>
                <TouchableOpacity transparent onPress={()=> navigation.navigate("Profile")}>
                  <View style={{flexDirection: 'row'}}>
                    <Icon style={styles.iconStyle} name='user' />
                    <Text style={{paddingLeft: 25}}>Profile</Text>
                  </View>
                </TouchableOpacity>
                
                <TouchableOpacity transparent onPress={()=> navigation.navigate("Lists")}>
                  <View style={styles.viewStyle}>
                    <Icon style={styles.iconStyle} name='list-ul' />
                    <Text style={{paddingLeft:20}}>Lists</Text>
                  </View>
                </TouchableOpacity>
                
                <TouchableOpacity transparent onPress={()=> navigation.navigate("Moments")}>
                  <View style={styles.viewStyle}>
                    <Icon style={styles.iconStyle} name='flash' />
                    <Text style={{paddingLeft:30}}>Moments</Text>
                  </View>
                </TouchableOpacity>
              
                <TouchableOpacity transparent onPress={()=> navigation.navigate("Highlights")}>
                  <View style={styles.viewStyle}>
                    <Icon style={styles.iconStyle} name='clone' />
                    <Text style={{paddingLeft:20}}>Highlights</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </CardItem>

            {/* settings and help info */}
            <CardItem >
              <View style={{flexDirection: 'column'}}>
                <TouchableOpacity transparent onPress={()=> navigation.navigate("SettingsAndPrivacy")}>
                  <View style={{flexDirection: 'row', paddingTop: 10}}>
                    <Text style={{marginLeft: 5}}>Settings and privacy</Text>
                  </View>
                </TouchableOpacity>
                
                <TouchableOpacity transparent onPress={()=> navigation.navigate("HelpCenter")}>
                  <View style={styles.viewStyle} >
                    <Text style={{marginLeft: 5}}>Help Center</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </CardItem>

          </Card>
        </Content>

        {/* footer */}
        <Footer style={{backgroundColor: '#ffffff'}}>
          <FooterTab style={{backgroundColor: '#ffffff'}}>
            <Left>
              <Icon style={{ marginLeft: 10, color: '#197DC8', fontSize: 20 }} name='moon-o'></Icon>
            </Left>
            <Right>
              <Icon style={{ marginRight: 10, color: '#197DC8', fontSize: 20 }} name='qrcode'></Icon>
            </Right>
          </FooterTab>
        </Footer>
      </Container>
    );
};

const styles = StyleSheet.create({
  cardStyle: {
    elevation: 2,
    borderBottomWidth: 2,
    borderTopWidth: 2
  },
  iconStyle: {
    fontSize: 20,
    marginLeft: 5
  },
  viewStyle: {
    flexDirection: 'row',
    paddingTop: 30
  }
});

export default SideBar;