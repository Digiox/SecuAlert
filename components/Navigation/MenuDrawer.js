import React, { Component } from 'react'
import { Plateform, Dimensions, View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native"
import { Icon } from 'react-native-elements'
import { persistor } from "../store/configStore"
import firebase from "firebase";

export default class MenuDrawer extends Component {

    navLinks(nav, text) {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate(nav)}>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        )
    }

    logOut() {
        return(
            <TouchableOpacity onPress={() => {
                persistor.purge();
                
                firebase.auth().signOut().then( () => {
                    this.props.navigation.navigate("LogIn");
                }).catch(function (error) {
                    console.log(error);
                    
                    
                });
                }}>
                <Text style={styles.text}>Logout</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <ImageBackground resizeMode='cover' source={require("../../assets/images/secu.png")} style={styles.container}>
                <View style={styles.linksContainerLeft}>
                    {this.navLinks('Home', 'Home')}
                    {this.navLinks('Notifs', 'Notifications')}
                    {this.logOut()}
                </View>
                <View style={styles.settingsWeelRight}>
                    <Icon
                        raised
                        reverse
                        name='cog'
                        type='font-awesome'
                        color='#20232a'
                        onPress={() => this.props.navigation.navigate('Settings')} />
 
                </View>

            </ImageBackground>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: "6%",
        backgroundColor: "#20232A",
        width: '100%',
        height: '100%',
        flex: 1,
        display: "flex",
        flexDirection: "row"
    },
    linksContainerLeft: {

    },
    settingsWeelRight: {
        position: "absolute",
        top: 6,
        right: 0
    },
    text: {
        padding: "2%",
        fontSize: 25,
        color: "white"
    }
});