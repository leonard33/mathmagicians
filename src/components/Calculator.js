import React, { Component } from 'react';
import './Calculate.css';
import  calculate from '../logic/calculate.js';


// const operation = ['-', '+', '/', '*', '.'];
// console.log(operation);
export default class Calculator extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      // calc: "",
      total: "",
      next: "",
      operations: ""
    };
    this.updateState = this.updateState.bind(this)
    
  }
  /*
  updateState = (value) => { 
    // Changing state 
    /* if((operation.includes(value) && this.calc ==='') || (operation.includes(value) && operation.includes(this.calc.slice(-1)))){
      return;
    } 
    this.setState({calc: this.state.calc + value});
    // this.calculate(this.calc, value);
  } */

// state updating handler
  updateState = (buttonName) => {
    const temp = {...this.state}
    this.setState(calculate(temp, buttonName))
  }

// creating the digits 1-9
  createDigit = () => {
    const digits = [];
    for (let i = 9; i >= 1; i -= 1) {
      // eslint-disable-next-line no-loop-func
      digits.push(<button type="button" onClick={() => this.updateState(i.toString())} key={i}>{i}</button>);
    }
    return digits;
  };
  render() {
    return (
      <div className="calculate">
        <div className="display"><span>{this.state.next|| this.state.total || "0"}</span></div>
        <div className="calc-digits">
          <div className="calc-left">
            <div className="operations-top">
              <button type="button" onClick={() => this.updateState('AC')}>AC</button>
              <button type="button" onClick={() => this.updateState('+/-')}>+/-</button>
              <button type="button" onClick={() => this.updateState('%')}>%</button>
            </div>
            <div className="digits">
              {this.createDigit()}
              <button type="button" onClick={() => this.updateState('0')}>0</button>
              <button type="button" onClick={() => this.updateState('.')}>.</button>
            </div>
          </div>
          <div className="calc-right">
            <div className="operations-right">
              <button type="button" onClick={() => this.updateState('÷')}>/</button>
              <button type="button" onClick={() => this.updateState('x')}>*</button>
              <button type="button" onClick={() => this.updateState('+')}>+</button>
              <button type="button" onClick={() => this.updateState('-')}>-</button>
              <button type="button" onClick={() => this.updateState('=')}>=</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
