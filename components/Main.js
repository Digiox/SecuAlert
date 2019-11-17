import React, { Component } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MenuButton from "./MenuButton";
import { connect } from 'react-redux';
import firebase from "firebase";

 
class Main extends Component {
  constructor (props) {
    super(props);
    this.state = {
      datas: ""
    }
  }
 

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
  
        
      console.log("connected user Found");
      
      } else {
        console.log("user is not connected");

        this.props.navigation.navigate("LogIn")
        
      }
    });
    
    // this.props.dispatch({type: "FIRSTNAME", value: "Lyann"})
    // var user = firebase.auth().currentUser;

    // if (user) {
    //   console.log("okay");
      
    // } else {
    //   console.log("user is not connected, redirecting to the LogIn component");
    //   this.props.navigation.navigate("LogIn")
    // }
    
  }
  
   render() {
 
  
    //  console.log("!!!!!!!!!!!!!!!!!"+JSON.parse(this.state.datas));
     return (
      <View style={styles.container}>
      <View style={styles.header} >
      <MenuButton navigation={this.props.navigation} />
        <Text style={styles.title}>SECU-ALERT</Text>
      </View>

      <Text style={styles.text}>HomeScreen</Text>
    </View>
     )
   }
 }
 

const mapStateToProps = (state) => {
  return {
    firstName: state.firstName,
    lastName: state.lastName,
    password: state.password,
    mail: state.email,
    nickName: state.nickName

    // password: state.password,
    // mail: state.mail,
    // nickName: state.nickName,
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#20232A',
    paddingTop: "6%",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    color: "white",
    backgroundColor: "#353a44"
  },
  title: {
    marginRight: "30%",
    textAlign: "center",
    color: "white",
    fontSize: 30
  },
  text: {
    fontSize: 30,
    color: "white",
    paddingTop: "50%",
    textAlign: "center"
  }
});

export default connect(mapStateToProps)(Main)