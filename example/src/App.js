import React, { Component } from 'react'

import Toaster from 'react-mini-toaster'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isVisible: true
    }
  }

  handleOnClick=()=>{
    this.setState({
      isVisible: false
    })
  }
  render () {
    const { isVisible } = this.state;
    return (
      <div>
        <Toaster 
          type={"error"}
          header={"Error"}
          message={"Server is not responding"}
          isVisible={isVisible}
          onClick={this.handleOnClick} 
        />
      </div>
    )
  }
}
