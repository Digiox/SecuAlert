import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import InputsLogin from './InputsLogin';
import firebase from "firebase";
import { connect } from 'react-redux';
import { connectButtonStyleLogIn, connectContainerStyleLogIn, mainContainerLogIn } from '../assets/css/styles';
import AlertModal from './AlertModal'

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mail: '',
            password: '',

            isLoading: false,
            isVisible: false,
            errorLoginType: ''
        }
        this.inputs = React.createRef();
        this.onPressConnection = this.onPressConnection.bind(this);
        this.removeModal = this.removeModal.bind(this);
    }

    extractDatasFromInputs = (inputName, inputValue) => {
        this.setState({ [inputName]: inputValue })
    }
   
    onPressConnection = () => {
        const { navigation } = this.props;

        this.setState({ isLoading: true });
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(async () => {
                return firebase.auth().signInWithEmailAndPassword(await this.state.mail, await this.state.password);
            })
            .catch(function (error) {
                this.inputs.current.clearInput()
                
                this.setState({
                    isVisible: true,
                    isLoading: false,
                    errorLoginType: error.code,
                })
                const errorCode = error.code;
                const errorMessage = error.message;
            }.bind(this));

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                this.inputs.current.clearInput()
                
                this.setState({isLoading: false})
                navigation.navigate("Home");
            }
        }.bind(this));
    }

    removeModal() {
        this.setState({ isVisible: false });
    }

    render() {
        const { errorLoginType, isVisible } = this.state;
        
        

        return (
            <View style={mainContainerLogIn}>

                <AlertModal
                    isVisible={isVisible}
                    removeModal={() => this.removeModal}
                    type={errorLoginType}
                />
                <InputsLogin ref={this.inputs} dataExtractor={(inputName, inputValue) => { this.extractDatasFromInputs(inputName, inputValue) }} />
                <Button
                    containerStyle={connectContainerStyleLogIn}
                    buttonStyle={connectButtonStyleLogIn}
                    loading={this.state.isLoading}
                    title="Connect"
                    onPress={() => {
                        this.onPressConnection();
                    }}
                />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                <Text style={{color: 'white', textAlign: 'center'}}>Not registered yet ?</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        firstName: state.firstName
    }
}



export default connect(mapStateToProps)(LogIn)