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
  argHelper = (string) => string !== '0'

  handler(e) {
    e.preventDefault()
    let arg = e.target.value
    let newValue = calculate(this.state.value, arg)
    console.log(newValue)
    this.setState({
      value: newValue
    })
  }

  render() {
    return (
      <div className="App container">
        <Display value={this.state.value} />
        <Buttons handler={this.handler} />
      </div>
    );
  }
}

export default App;
