import React, { Component } from 'react'
import { StyleSheet, Text, View, AsyncStorage, Modal, TouchableHighlight } from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import InputsLogin from './InputsLogin';
import firebase from "firebase";
import { connect } from 'react-redux';
import AlertModal from './AlertModal'

class LogIn extends Component {
    constructor() {
        super();
        this.state = {
            mail: '',
            password: '',

            isLoading: false,
            isVisible: false,
            errorLoginType: ''
        }
        this.onPressConnection = this.onPressConnection.bind(this)
        this.removeModal = this.removeModal.bind(this);
    }
    //extract Datas from the 'InputsLogin.js' component.
    extractDatasFromInputs = (inputName, inputValue) => {
        this.setState({ [inputName]: inputValue })
    }
    //When the user press the 'Connection' button.
    onPressConnection = () => {
        const { dispatch, navigation } = this.props;

        this.setState({ isLoading: true });
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(async () => {
                return firebase.auth().signInWithEmailAndPassword(await this.state.mail, await this.state.password);
            })
            .catch(function (error) {
                this.setState({
                    isVisible: true,
                    errorLoginType: error.code,
                })
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("The log in operation has been aborted due to code: " + errorCode);
                console.log("Message: " + errorMessage);
            }.bind(this));

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log("User is connected");
                navigation.navigate("Home");
            } else {
                console.log("user is not connected");
            }
        });
    }

    removeModal() {
        this.setState({ isVisible: false });
        console.log("removing Modal");
    }

    render() {
        const { errorLoginType, isVisible } = this.state;

        return (
            <View style={styles.container}>

                <AlertModal
                    isVisible={isVisible}
                    removeModal={() => this.removeModal}
                    type={errorLoginType}
                />
                <InputsLogin dataExtractor={(inputName, inputValue) => { this.extractDatasFromInputs(inputName, inputValue) }} />
                <Button
                    style={styles.buttonConnection}
                    loading={this.state.isLoading}
                    title="Connect"
                    onPress={() => {
                        this.onPressConnection();
                    }}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        firstName: state.firstName
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#20232A',
        padding: "10%"
    },
    overlayContainer: {
        backgroundColor: "red",
        width: "100%",
        height: "5%",
    },
    buttonConnection : {
        
    }
});

export default connect(mapStateToProps)(LogIn)