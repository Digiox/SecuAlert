import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { mainRegisterView } from '../assets/css/styles';
import InputsRegister from './InputsRegister'
import { Button } from 'react-native-elements';
import { connectButtonStyleLogIn, connectContainerStyleLogIn, mainContainerLogIn } from '../assets/css/styles';
import AlertModal from './AlertModal';
import firebase from "firebase";

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            isVisible: false,
            errorLoginType: '',
            mail: '',
            password: '',
            confirmMail: '',
            confirmPassword: ''
        }
        this.removeModal = this.removeModal.bind(this)
    }


    dataExtractor(inputName, inputvalue) {
        this.setState({[inputName]: inputvalue})
    }

    removeModal() {
        this.setState({ isVisible: false });
    }

    onPressRegister() {
        const {navigation} = this.props
        const {mail, confirmMail, password, confirmPassword} = this.state
        this.setState({ isLoading: true })
        if (mail !== confirmMail) {
            this.setState({
                isVisible: true,
                errorLoginType: "auth/mail-confirm-wrong"
            })
        }else if (password !== confirmPassword) {

            this.setState({
                isVisible: true,
                errorLoginType: "auth/password-confirm-wrong"
            })
        }else {
            firebase.auth().createUserWithEmailAndPassword(mail, password).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                this.setState({
                    isVisible: true,
                    errorLoginType: errorCode
                })
            }.bind(this));

            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    this.setState({isLoading: false})
                    navigation.navigate("Home");
                } else {

                }
            }.bind(this));
        }
        
    }

    render() {
        const { errorLoginType, isVisible } = this.state;

        return (
            <View style={mainRegisterView}>
                <AlertModal
                    isVisible={isVisible}
                    removeModal={() => this.removeModal}
                    type={errorLoginType}
                />
                <InputsRegister dataExtractor={(inputName, inputValue) => { this.dataExtractor(inputName, inputValue) }} />
                <Button
                    containerStyle={{ ...connectContainerStyleLogIn, marginBottom: "40%" }}
                    buttonStyle={connectButtonStyleLogIn}
                    loading={this.state.isLoading}
                    title="Create my account"
                    onPress={() => {
                        this.onPressRegister();
                    }} />
            </View>
        )
    }
}
