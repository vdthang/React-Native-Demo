/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { connect, Provider } from 'react-redux';
import { Router, Scene,Drawer } from 'react-native-router-flux';
import configureStore from './src/redux/index'

import ShipmentListComponent from './src/ShipmentList/view/ShipmentListComponent'
import ProfileComponent from './src/Profile/view/ProfileComponent'
import InformationComponent from './src/Information/view/InformationComponent'
import HomeComponent from './src/Home/HomeComponent'
import MyDrawer from './src/Home/DrawerComponent'
import ControlPanel from './src/drawer/ControlPanel';
import DetailComponent from './src/detail/DetailComponent';
const store = configureStore()
const RouterWithRedux = connect()(Router);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
        <Scene key='root' hideNavBar={true}>
        <Scene
                    key='homeView'
                    drawer={true}
                    
                    drawerImage={require('./src/images/ic_menu.png')}
                    contentComponent={ControlPanel}
                   >
                  <Scene key='homeViewNormal'
                     hideTabBar={true}
                    >
                    <Scene key="home"  component={HomeComponent} title="Home" />
                    <Scene key="info"  component={InformationComponent} title="Info" />
                    <Scene key="profile"  component={ProfileComponent} title="Profile" />
                  </Scene>  
                </Scene>
                <Scene key="detail"  component={DetailComponent}  />
           </Scene>          
        </RouterWithRedux>
    </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
