import {StyleSheet} from 'react-native'



export default  externalStyleSheet = StyleSheet.create({
  alertModal: {
    backgroundColor: "#eb350c",
        width: "100%",
        height: "5%",
        
  },
  textModal: {
    textAlign: 'center'
  }
});

export const alertModal = externalStyleSheet.alertModal;
export const textModal = externalStyleSheet.textModal;
