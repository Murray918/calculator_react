import React, { Component } from 'react';
import '../css/App.css';
import Buttons from './buttons'
import Display from './display';
import calculate from '../logic/calculate'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '0'
    }
    this.handler = this.handler.bind(this)
  }

  handler(e) {
    e.preventDefault()
    console.log(e.target)
    let arg = e.target.value
    console.log('the arg is : ',arg)
    let newValue = calculate(this.state.value, arg)
    console.log(newValue)
    this.setState({
      value: newValue
    })
  }

  render() {
    return (
      <div className="App container">
        <div className="calculator">
        <h5 className="brand">Calculator</h5>
          <Display value={this.state.value} />
          <Buttons handler={this.handler} />
        </div>
      </div>
    );
  }
}

export default App;
