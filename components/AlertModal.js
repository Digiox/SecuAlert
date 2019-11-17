import React, { Component } from 'react';
import { Text, View, Modal } from 'react-native';
import { alertModal, textModal } from '../assets/css/styles';
import displayErrorMessage from '../functions/displayErrorMessage'

export default class AlertModal extends Component {


  

  render() {
    console.log("PROPS IN ALERTMODAL", this.props);

    return (
      <Modal visible={this.props.isVisible } onShow={() => {
        setTimeout(
          this.props.removeModal(), 
          5000
        )
      }} transparent={true} animationType="fade">
        <View style={alertModal}>
          <Text style={textModal}>
            {displayErrorMessage(this.props.type)}
          </Text>
        </View>
      </Modal>
    )
  }
}