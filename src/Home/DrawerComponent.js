import { View,StyleSheet,Text,TouchableOpacity } from 'react-native';
import React, { Component } from 'react'  
import ControlPanel from '../drawer/ControlPanel';
import Drawer from 'react-native-drawer'
import DefaultScreen from '../drawer/DefaultScreen';
import HomeComponent from './HomeComponent'

export default class MyDrawer extends Component{
    state={
        drawerOpen: false,
        drawerDisabled: false,
      };
      closeDrawer = () => {
        this.drawer.close()
      };
      openDrawer = () => {
        console.log(this.drawer)
        this.drawer.open()
      };
      render() {
        var controlPanel = <ControlPanel closeDrawer={() => {
            this.drawer.close()
        }} openDrawer={()=> {this.drawer.open()}} />
        return ( 
      <Drawer
          ref={c => this.drawer = c}
          type="overlay"
          content={controlPanel}
          tapToClose={true}
          openDrawerOffset={0.2} // 20% gap on the right side of drawer
          panCloseMask={0.2}
          closedDrawerOffset={-3}
          styles={drawerStyles}
          tweenHandler={(ratio) => ({
            main: { opacity:(2-ratio)/2 }
          })}
          >
            <HomeComponent closeDrawer={this.closeDrawer} openDrawer={this.openDrawer}/>
          </Drawer>
        )
      }
    }

    const styles = StyleSheet.create({
      container: {
        padding: 20,
        flex: 1,
      }
    })

    const drawerStyles = {
      drawer: {
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 0,
        backgroundColor: 'white'
      }
    }