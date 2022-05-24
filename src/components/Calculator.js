import React, { Component } from 'react';
import './Calculate.css';

const createDigit = () => {
  const digits = [];
  for (let i = 9; i >= 1; i -= 1) {
    digits.push(<button key={i}>{i}</button>);
  }
  return digits;
};
export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="calculate">
        <div className="display"><span>0</span></div>
        <div className="calc-digits">
          <div className="calc-left">
            <div className="operations-top">
              <button type='button'>AC</button>
              <button type='button'>+/-</button>
              <button type='button'>%</button>
            </div>
            <div className="digits">
              {createDigit()}
              <button type='button'>0</button>
              <button type='button'>.</button>
            </div>
          </div>
          <div className="calc-right">
            <div className="operations-right">
              <button type='button'>/</button>
              <button type='button'>*</button>
              <button type='button'>+</button>
              <button type='button'>-</button>
              <button type='button'>=</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
