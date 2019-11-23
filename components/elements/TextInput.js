import React, { Component } from 'react'

export default class TextInput extends Component {
    render() {
        return (
            <View style={textinputsContainer}>
            {this.props.leftIcon ? <Input
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
            /> : <Input
            keyboardType={"email-address"}
            autoCapitalize='none'
            onChangeText={(text) => this.props.dataExtractor('mail', text)}
            inputStyle={logInTextinputStyle}
            placeholder='Email'
        /> }
        </View>
        )
    }
}
