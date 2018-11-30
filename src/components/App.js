import React, { Component } from 'react';
import '../css/App.css';
import Buttons from './buttons'
import Display from './display';
import calculate from '../logic/calculate'

class App extends Component {
  //this constructor will ensure that we are passing our props correctly to the child components
  constructor(props) {
    //this calls the constructor of the React.Component with the props arg
    super(props)
    //state must be set in the constructor
    this.state = {
      value: '0'
    }
    //bind your onclick here
    this.handleOnClick = this.handleOnClick.bind(this)
  }


// here is where we handle our click
  handleOnClick(e) {
    //prevent the default event triggers
    e.preventDefault()

    let previousState = this.state.value
    let arg = e.target.value
    //run our calculate function
    let newValue = calculate(previousState, arg)
    //set the new state and re-render our display
    this.setState({
      value: newValue
    })
  }
//render our child components
  render() {
    return (
      <div className="App container">
        <div className="calculator">
          <h5 className="brand">Calculator</h5>
          {/* pass current state as a prop to the display component */}
          <Display value={this.state.value}/>
          {/* pass our onclick to the buttons */}
          <Buttons handleOnClick={this.handleOnClick} />
        </div>
      </div>
    );
  }
}

export default App;
