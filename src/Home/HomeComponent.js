import React, { Component } from 'react';
import { View,Text,Dimensions,
    Image,StyleSheet,TouchableOpacity } from 'react-native'

import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';   
import ShipmentList from '../ShipmentList/view/ShipmentListComponent';

const ScreenOne = () => <ShipmentList index="1" />
const ScreenTwo = () => <ShipmentList index="2" />
const initialLayout = {
    height: 100,
    width: Dimensions.get('window').width,
  };
  
export default class HomeComponent extends Component {
    state = {
        index: 0,
        routes: [
          { key: 'first', title: 'First' },
          { key: 'second', title: 'Second' },
        ],
      };



    _handleIndexChange = index => this.setState({ index });
    _renderHeader = props => <TabBar {...props} />;

    _renderScene = SceneMap({
        first: ScreenOne,
        second: ScreenTwo,
      });

    render(){
        return(

             <TabViewAnimated
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderHeader={this._renderHeader}
                    onIndexChange={this._handleIndexChange}
                    initialLayout={initialLayout}
                />
   
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  