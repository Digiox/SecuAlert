import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import {
    inputsContainerLogin,
    logInTextStyle,
    textinputsContainer,
    logInTextinputStyle,
    textinputLogInIconStyle
} from '../assets/css/styles';

export default class InputsRegister extends Component {
    render() {
        return (
            <View style={inputsContainerLogin}>
                <Text style={logInTextStyle}>Register</Text>
                <View style={textinputsContainer}>
                    <Input
                        keyboardType={"email-address"}
                        autoCapitalize='none'
                        onChangeText={(text) => this.props.dataExtractor('mail', text)}
                        inputStyle={logInTextinputStyle}
                        placeholder='Email'
                        leftIcon={<Icon
                            iconStyle={textinputLogInIconStyle}
                            name='user'
                            type='font-awesome'
                            size={24}
                            color='white'
                        />}
                    />
                </View>
                <View style={textinputsContainer}>
                    <Input
                        keyboardType={"email-address"}
                        autoCapitalize='none'
                        onChangeText={(text) => this.props.dataExtractor('confirmMail', text)}
                        inputStyle={{ ...logInTextinputStyle, marginLeft: "20%" }}
                        placeholder='Confirm email'
                    />
                </View>
                <View style={textinputsContainer}>
                    <Input
                        autoCapitalize='none'
                        ref={this.passInput}
                        secureTextEntry
                        onChangeText={(text) => this.props.dataExtractor('password', text)}
                        inputStyle={logInTextinputStyle}
                        placeholder='Password'
                        leftIcon={<Icon
                            iconStyle={textinputLogInIconStyle}
                            name='key'
                            type='font-awesome'
                            size={24}
                            color='white'
                        />}
                    />
                </View>
                <View style={textinputsContainer}>
                    <Input
                        autoCapitalize='none'
                        ref={this.passInput}
                        secureTextEntry
                        onChangeText={(text) => this.props.dataExtractor('confirmPassword', text)}
                        inputStyle={{ ...logInTextinputStyle, marginLeft: "20%" }}
                        placeholder='Confirm password'
                    />
                </View>
            </View>
        )
    }
}
