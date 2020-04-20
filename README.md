# react-mini-toaster

>  React-Mini-Toaster allow you to add notification to your app with ease.

[![NPM](https://img.shields.io/npm/v/react-mini-toaster.svg)](https://www.npmjs.com/package/react-mini-toaster) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Project Demo
![](media/Toaster-Success-Example.gif)
![](media/Toaster-Error-Example.gif)

## Install

```bash
npm install --save react-mini-toaster
```

## Usage
```jsx
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
```

## License

MIT © [sagarbajpai](https://github.com/sagarbajpai)
