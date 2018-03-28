import { View,Text,StyleSheet,TouchableOpacity,Image } from 'react-native';
import React, { Component } from 'react'

export default class ProfileComponent extends Component {

    render(){
        return(
            <View>
               
                <Text>Profile</Text>
             </View>   
        )
    }
}
const style = StyleSheet.create({
    header: {
    height: 40,
    backgroundColor: '#FE9A2E',
    flexDirection: 'row',
    marginTop: 20,
    },
    logoHeader:{
        width: 30, height: 20, marginRight:20, alignItems:'center',justifyContent:'center',marginTop:10,marginLeft:10
    },
    titleHeader: {
        alignItems: 'center',
        justifyContent:'center',
        color:'white',
        marginTop:8,
        fontSize: 20,
    }
})