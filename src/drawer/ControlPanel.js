
  import React, { Component } from 'react'
  import { PropTypes,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View } from 'react-native'
import { Actions } from 'react-native-router-flux';
  
  export default class ControlPanel extends Component {
 
  
    render() {
      let {closeDrawer,openDrawer} = this.props
      console.log(openDrawer)
      return (
        <ScrollView style={styles.container}>
      
         <TouchableOpacity style={styles.button} onPress={()=>{Actions.home({openDrawer: this.props.openDrawer,closeDrawer:closeDrawer})}}>
            <Text>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>{Actions.info({openDrawer: this.props.openDrawer,closeDrawer:closeDrawer})}}>
            <Text>Info</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>{Actions.profile({openDrawer: openDrawer,closeDrawer:closeDrawer})}}>
            <Text>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={closeDrawer}>
            <Text>Close Drawer</Text>
          </TouchableOpacity>
        </ScrollView>
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#e1e1e1',
    },
    controlText: {
      color: 'white',
    },
    button: {
      borderWidth: 1,
      borderColor: 'black',
      padding: 10,
    }
  })