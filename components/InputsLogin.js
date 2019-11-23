import React, { Component } from 'react'
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { Input, Icon } from 'react-native-elements';

import {
    inputsContainerLogin,
    logInTextStyle,
    textinputsContainer,
    logInTextinputStyle,
    textinputLogInIconStyle
} from '../assets/css/styles';

export default class InputsLogin extends Component {
    constructor() {
        super()
        this.passInput = React.createRef();
    }

    clearInput() {
        this.passInput.current.clear();
    }
    render() {

        return (
            <View style={inputsContainerLogin}>
               
                <Text selectable={true} style={logInTextStyle}>Log in</Text>
                <View style={textinputsContainer}>
                    <Input
                        selectable={true}
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

            </View>
        )
    }
}

AppRegistry.registerComponent('tooltip', () => tooltip);