import { View,Text,StyleSheet,TouchableOpacity,Image } from 'react-native';
import React, { Component } from 'react'

export default class InformationComponent extends Component {
   
    render() {
        const { region } = this.props;
        console.log(region);
    
        return (
          <View style ={styles.container}>
            <Text>InformationComponent </Text>
          </View>
        );
      }
    }

    const styles = StyleSheet.create({
        container: {
          ...StyleSheet.absoluteFillObject,
          height: 400,
          width: 400,
          justifyContent: 'flex-end',
          alignItems: 'center',
        },
        map: {
          ...StyleSheet.absoluteFillObject,
        },
      });
      