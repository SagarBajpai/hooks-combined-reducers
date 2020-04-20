import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Toaster from './Components/Screens/Toaster/Toaster'

export default class App extends Component {
  static propTypes = {
    isVisible: PropTypes.bool,
    type: PropTypes.string,
    header: PropTypes.string,
    message: PropTypes.string,
    onClick: PropTypes.func,
  }

  render() {
    const {isVisible, type, header, message, onClick} = this.props

    return (
      <Toaster
        isVisible={isVisible}
        type={type}
        header={header}
        message={message}
        onClick={onClick}
      />
    )
  }
}
