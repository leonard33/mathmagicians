/* eslint-disable react/button-has-type */
/*eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }]*/
import React, { Component } from 'react';
import './Calculate.css';

const createDigit = () => {
  const digits = [];
  for (let i = 9; i >= 1; i--) {
    digits.push(<button key={i}>{i}</button>);
  }
  return digits;
};

export default class Calculator extends Component {
  render() {
    return (
      <div className="calculate">
        <div className="display"><span>0</span></div>
        <div className="calc-digits">
          <div className="calc-left">
          <div className="operations-top">
          <button>AC</button>
          <button>+/-</button>
          <button>%</button>
        </div>
          <div className="digits">
          {createDigit()}
          <button>0</button>
          <button>.</button>
        </div>
        </div>
          <div className="calc-right">
          <div className="operations-right">
          <button>/</button>
          <button>*</button>
          <button>-</button>
          <button>=</button>
        </div>
        </div>
        </div>
      </div>
    );
  }
}