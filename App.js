//import required modules
import React, { Component } from 'react';
import { TabNavigator, DrawerNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

//import screens on main screen
import HomeScreen from './src/screens/main/home';
import SearchScreen from './src/screens/main/search';
import NotificationScreen from './src/screens/main/notification';
import MessageScreen from './src/screens/main/message';

//import screens on drawer
import SideBar from './src/screens/drawer/sidebar'; 
import Profile from './src/screens/drawer/profile';
import Lists from './src/screens/drawer/lists';
import Moments from './src/screens/drawer/moments';
import Highlights from './src/screens/drawer/highlights'
import SettingsAndPrivacy from './src/screens/drawer/settingsAndPrivacy';
import HelpCenter from './src/screens/drawer/helpCenter';

//import new screens
import NewSearchScreen from './src/screens/new/searchScreen';

//import component
import TabBarHeaders from './src/components/tabBarHeaders';


//set the tabs on main screen
const MainScreenTabs = TabNavigator({
  Home: { screen: HomeScreen },
  Search: { screen: SearchScreen },
  Notifications: { screen: NotificationScreen }, 
  Messages: { screen: MessageScreen },
},
{ tabBarComponent: props => (<TabBarHeaders{...props} />), 
  tabBarPosition: 'top',
  animationEnabled: true,
  swipeEnabled: false,
  tabBarOptions: {
  activeTintColor: '#197DC8',
  inactiveTintColor: '#747777',
  activeBackgroundColor: '#ffffff',
  inactiveBackgroundColor: '#ffffff',
  showIcon: true,
  showLabel: false,
  },
} );

//set the fields on left navigation drawer
const LeftNavigationDrawer = DrawerNavigator({
    Main: {screen: MainScreenTabs},
    Profile: { screen: Profile},
    Lists: { screen: Lists },
    Moments: { screen: Moments },
    Highlights: { screen: Highlights },
    SettingsAndPrivacy: { screen: SettingsAndPrivacy },
    HelpCenter: { screen: HelpCenter },
    NewSearchScreen: { screen: NewSearchScreen }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

 export default LeftNavigationDrawer;