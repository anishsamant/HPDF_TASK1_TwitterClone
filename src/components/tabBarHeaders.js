// import rewuired modules
import React, { Component } from 'react';
import { StyleSheet, Platform, TouchableNativeFeedback} from 'react-native';
import { Content, Header, Left, Body, Right, Button, Title, View, Text} from 'native-base';

//import components
import AppHeader from './appHeader';
import SearchBar from './searchBar';


//set custom headers of various tabs on main screen
export default class TabBarHeaders extends Component {
  constructor() {
    super();
    // initialize currentTab
    this.state = {
         currentTab: 'Home',
    };

    this.onButtonPress = this.onButtonPress.bind(this);
 
};

//define the currentTab
onButtonPress(tabKey) {
    this.setState({currentTab: tabKey})
}

//renders the header based on tab selected
render () {
    const { navigation, renderIcon, activeTintColor, inactiveTintColor, jumpToIndex } = this.props;
    const {routes} = navigation.state;
  
    //check which tab is active
    let header=null;
    if (this.state.currentTab=='Search') 
    {
        header=<SearchBar navigation={navigation} />
    }
    else
    {
        header=<AppHeader navigation={navigation} tabKey = {this.state.currentTab}/>;
    }

    return (
      <View>
        {/* display the header */}
        {header}
        <View style={styles.tabbar}>
            {/* Maps through all the routes and shows the tabs for each route as mentioned in the tab navigator */}
            {routes && routes.map((route, index) => {
              const focused = index === navigation.state.index;
              const tintColor = focused ? activeTintColor : inactiveTintColor;
              const tabKey = route.key;
              return (
                
                // show buttons for tabs 
                <TouchableNativeFeedback
                  key={route.key}
                  style={styles.tab}
                  // on pressing of tabs route to that screen and also update state when search tab pressed
                  onPress={()=>{jumpToIndex(index);  this.onButtonPress(tabKey)}}
                  background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                  {/* show the tabbaricon */}
                  <View style={styles.tab}>
                    {renderIcon({
                      route,
                      index,
                      focused,
                      tintColor
                    })}
                  </View>
                </TouchableNativeFeedback>
              );
            })}
        </View>
    
      </View>
    )
}
};

const styles = StyleSheet.create({
    tabbar: {
      height: 45,
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#197DC8',
      backgroundColor: '#fff',
    },
    tab: {
      alignSelf: 'stretch',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',  
    }
});
