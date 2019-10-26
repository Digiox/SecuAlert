import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from "./components/Main";
import DrawerNavigator from "./components/Navigation/DrawerNavigator";
import { Provider } from 'react-redux';
import store from './components/store/configStore';
import { connect } from 'react-redux';
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDUqEXRXyepvQZtDRXDaNu6I9kdLlO4hHI",
  authDomain: "secualert-cd941.firebaseapp.com",
  databaseURL: "https://secualert-cd941.firebaseio.com",
  projectId: "secualert-cd941",
  storageBucket: "secualert-cd941.appspot.com",
  messagingSenderId: "782760178748",
  appId: "1:782760178748:web:9ae6f2cbb70be7cedebf39",
  measurementId: "G-QPNH96LKTE"
};

class App extends Component {
  constructor () {
    super();
    firebase.initializeApp(config)
  }


  render() {
    return (
      <Provider store={store}>
         <DrawerNavigator/>
      </Provider>
     
    )
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


export default App;