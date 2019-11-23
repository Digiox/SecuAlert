import { StyleSheet } from 'react-native'



export default externalStyleSheet = StyleSheet.create({
  alertModal: {
    backgroundColor: "#a82e1e",
    width: "100%",
    height: "5%",

  },
  textModal: {
    textAlign: 'center',
    color: "white"
  },
  connectButtonStyleLogIn: {
    height: 35
  },
  connectContainerStyleLogIn: {
    marginBottom: "60%"
  },
  mainContainerLogIn: {
    flex: 1,
    backgroundColor: '#20232A',
    padding: "10%"
  },
  inputsContainerLogin: {
    flex: 1,
    backgroundColor: '#20232A',
    padding: "10%"
  },
  logInTextStyle: {
    fontSize: 30,
    color: "white",
    paddingTop: "50%",
    textAlign: "center"
  },
  textinputsContainer: {
    paddingBottom: '5%'
  },
  logInTextinputStyle: {
    color: 'white'
  },
  textinputLogInIconStyle: {
    paddingRight: '6%'
  },
  //register
  mainRegisterView: {
    paddingTop: '6%',
    flex: 1,
    padding: "10%",
    backgroundColor: '#20232A',
  }
});

const alertModal = externalStyleSheet.alertModal;
const textModal = externalStyleSheet.textModal;
const connectButtonStyleLogIn = externalStyleSheet.connectButtonStyleLogIn;
const connectContainerStyleLogIn = externalStyleSheet.connectContainerStyleLogIn;
const mainContainerLogIn = externalStyleSheet.mainContainerLogIn;
const inputsContainerLogin = externalStyleSheet.inputsContainerLogin;
const logInTextStyle = externalStyleSheet.logInTextStyle;
const textinputsContainer = externalStyleSheet.textinputsContainer;
const logInTextinputStyle = externalStyleSheet.logInTextinputStyle; 
const textinputLogInIconStyle = externalStyleSheet.textinputLogInIconStyle;
const mainRegisterView = externalStyleSheet.mainRegisterView;

export {
  alertModal,
  textModal,
  connectButtonStyleLogIn,
  connectContainerStyleLogIn,
  mainContainerLogIn,
  inputsContainerLogin,
  logInTextStyle,
  textinputsContainer,
  logInTextinputStyle,
  textinputLogInIconStyle,
  mainRegisterView
}