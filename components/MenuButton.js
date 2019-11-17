import React, { Component } from 'react'
import { Icon } from 'react-native-elements'

export default class MenuButton extends Component {
    render() {
        return (
            <Icon
  raised
  reverse
  name='bars'
  type='font-awesome'
  color='#20232a'
  onPress={() => this.props.navigation.toggleDrawer()} />
        )
    }
}
