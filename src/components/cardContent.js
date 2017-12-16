//import required modules
import React, { Component } from 'react';
import { Container, Content, View, Left, Body, Button, Text, Thumbnail, Card, CardItem } from 'native-base';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { TabNavigator, DrawerNavigator, StackNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/EvilIcons';


//define the card contents
const CardContent = (props) => {

    const { dp, contentPic, name, handle, lastSeen, content, comments, retweets, likes } = props;
    return(
      <Card>
        {/* top of card content */}
        <CardItem>
          <Left>
            <Thumbnail source={require('../images/federerDp.jpg')} />
            <Body style ={{flexDirection: 'row'}}>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.nameText}> {name} </Text>
                  <Icon name="check" style={{fontSize: 20, color: '#197DC8', alignSelf: 'center'}}/>
                  <Text note> {handle} </Text>
                  <Text note> {lastSeen} </Text>
                </View>
                <Text style={styles.contentText}> {content} </Text>
              </View>
              <Icon name='chevron-down' style={styles.iconStyle}/>              
            </Body>
          </Left>
        </CardItem>

        {/* main body picture */}
        <CardItem>
            <Body>
              <Image source={require('../images/federerContent.jpg')} style={{height: 170, width: 260, alignSelf:'flex-end' }}/>
            </Body>
        </CardItem>

        {/* bottom of card content */}
        <CardItem>
          <Left />
          <Body>
          <TouchableOpacity transparent>
          <View style={{flexDirection: 'row'}}>
            <Icon name="comment" style={styles.iconStyle} />
            <Text style={styles.textStyle}> {comments} </Text>
            </View>
          </TouchableOpacity>
          </Body>

          <Body>
          <TouchableOpacity transparent>
          <View style={{flexDirection: 'row'}}>
              <Icon name="retweet" style={styles.iconStyle} />
              <Text style={styles.textStyle} > {retweets} </Text>
            </View>
          </TouchableOpacity>
          </Body>

          <Body>
          <TouchableOpacity transparent>
          <View style={{flexDirection: 'row'}}>
            <Icon name="heart" style={styles.iconStyle} />
            <Text style={styles.textStyle}> {likes} </Text>
            </View>
          </TouchableOpacity>
          </Body>

          <Body>
          <TouchableOpacity transparent>
          <View style={{flexDirection: 'row'}}>
            <Icon name="envelope" style={styles.iconStyle} />
            </View>
          </TouchableOpacity>
          </Body>


        </CardItem>
      </Card>
    );
};


const styles = {
    textStyle: {
      color: '#747777',
      fontSize: 11,
      alignSelf: 'center'
    },
    iconStyle: {
        color: "#747777",
        fontSize: 25,
        fontWeight: 'bold',
    },
    nameText: {
      fontSize: 15,
      fontWeight: 'bold',
    },
    contentText: {
      color: '#2B2D2E'
    }
};

export default CardContent;