import { React, useState } from 'react';
import './Calculate.css';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [calc, setCalc] = useState({ total: null, next: null, operations: null });

  // state updating handler
  const updateState = (buttonName) => {
    let temp = {};
    temp = { ...calc };
    setCalc(calculate(temp, buttonName));
  };

  // creating the digits 1-9
  const createDigit = () => {
    const digits = [];
    for (let i = 9; i >= 1; i -= 1) {
    // eslint-disable-next-line no-loop-func
      digits.push(<button type="button" onClick={() => updateState(i.toString())} key={i}>{i}</button>);
    }
    return digits;
  };

  return (
    <div className="calcl-container">
      <div className="description">Let's do some math 	&#33;</div>
      <div className="calculate">
      <div className="display"><span>{calc.next || calc.total || '0'}</span></div>
      <div className="calc-digits">
        <div className="calc-left">
          <div className="operations-top">
            <button type="button" onClick={() => updateState('AC')}>AC</button>
            <button type="button" onClick={() => updateState('+/-')}>+/-</button>
            <button type="button" onClick={() => updateState('%')}>%</button>
          </div>
          <div className="digits">
            {createDigit()}
            <button type="button" onClick={() => updateState('0')}>0</button>
            <button type="button" onClick={() => updateState('.')}>.</button>
          </div>
        </div>
        <div className="calc-right">
          <div className="operations-right">
            <button type="button" onClick={() => updateState('÷')}>/</button>
            <button type="button" onClick={() => updateState('x')}>*</button>
            <button type="button" onClick={() => updateState('+')}>+</button>
            <button type="button" onClick={() => updateState('-')}>-</button>
            <button type="button" onClick={() => updateState('=')}>=</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
