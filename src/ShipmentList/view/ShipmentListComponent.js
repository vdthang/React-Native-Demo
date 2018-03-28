import { View,Text } from 'react-native';
import React, { Component } from 'react'

export default class ShipmentList extends Component {

    render(){
        return(
            <View style={{flex:1}}>
                <Text>List {this.props.index}</Text>
             </View>   
        )
    }
}
