import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Input, Icon } from 'react-native-elements';

export default class InputsLogin extends Component {
    render() {
        
        return (
            <View style={styles.container}>
            <Text style={styles.text}>LogIn</Text>
            <View style={styles.Inputs}>
                <Input
                onChangeText={(text) => this.props.dataExtractor('mail', text)}   
                    inputStyle={{ color: 'white' }}
                    placeholder='Email'
                    leftIcon={<Icon
                        iconStyle={styles.icon}
                        name='user'
                        type='font-awesome'
                        size={24}
                        color='white'
                    />}
                />
            </View>
            <View style={styles.Inputs}>
                <Input
                    secureTextEntry
                    onChangeText={(text) => this.props.dataExtractor('password', text)}   
                    inputStyle={{ color: 'white' }}
                    placeholder='Password'
                    leftIcon={<Icon
                        iconStyle={styles.icon}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#20232A',
        padding: "10%"
    },
    Inputs: {
        paddingBottom: '5%'
    },
    icon: {
        paddingRight: '6%'
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