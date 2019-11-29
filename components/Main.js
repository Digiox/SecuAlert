import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MenuButton from "./MenuButton";
import DetailedNotif from './DetailedNotif';
import { connect } from 'react-redux';
import firebase from "firebase";
import registerForPushNotificationsAsync from "../functions/registerForPushNotificationsAsync";
import axios from 'axios';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: []
    }
  }


  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
      } else {
        this.props.navigation.navigate("LogIn")
      }
      registerForPushNotificationsAsync().then(res => {
        console.log("success");
      }).catch(err => {
        console.log(err);
      })
    });

    axios.post('https://agile-everglades-79741.herokuapp.com/getNotifs', { refs: 'cs223-hQZ' })
      .then(res => this.setState({ datas: res.data[res.data.length - 1] }))
  }

  render() {
    const { datas } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header} >
          <MenuButton navigation={this.props.navigation} />
          <Text style={styles.title}>SECU-ALERT</Text>
        </View>
        <DetailedNotif datas={datas} />
      </View>
    )
  }
}


const mapStateToProps = (state) => {
  return {

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