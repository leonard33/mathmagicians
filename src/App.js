import React, { Component } from 'react'
import Calculator from './components/Calculator';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <Calculator />
    </div>
    )
  }
}
/*
import Calculator from './components/Calculator';
import './App.css';

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App; */