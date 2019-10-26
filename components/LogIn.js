import React, { Component } from 'react'
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import InputsLogin from './InputsLogin';
import firebase from "firebase";
import { connect } from 'react-redux';


class LogIn extends Component {
    constructor() {
        super();
        this.state = {
            nick: '',
            password: '',
            isLoading: false
        }
    }
    

    extractDatasFromInputs = (inputName, inputValue) => {
        this.setState({ [inputName]: inputValue })
    }
    render() {
        const { dispatch } = this.props;
        return (
            <View style={styles.container}>
                <InputsLogin dataExtractor={(inputName, inputValue) => { this.extractDatasFromInputs(inputName, inputValue) }} />
                <Button
                    loading={this.state.isLoading}
                    title="Connect"
                    onPress={() => {
                        this.setState({ isLoading: true })
                        firebase.database().ref('/users/' + this.state.nick).on('value', res => {
                            console.log(res.val().password, this.state.password)
                            if (res.val().password === parseInt(this.state.password)) {
                                console.log("matching")
                               dispatch({type: "USER",value: {
                                firstName: {
                                    key: "firstName",
                                    val: res.val().firstName
                                },
                                lastName: {
                                    key: "lastName",
                                    val: res.val().lastName
                                },
                                nickName: {
                                    key: "nickName",
                                    val: this.state.nick
                                },
                                password: {
                                    key: "password",
                                    val: res.val().password
                                },
                                email: {
                                    key: "email",
                                    val: res.val().mail
                                }}})
                                this.props.navigation.navigate('Home')
                            }
                        })
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
    }
});

export default connect(mapStateToProps)(LogIn)