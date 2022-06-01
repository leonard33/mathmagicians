import React, { Component } from 'react';
import Calculator from './components/Calculator';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Quote from './components/Quote';
import Home from './components/Home';
import Nav from './components/Nav';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Nav/>
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="quotes" element={<Quote />} />
         <Route path="calculator" element={<Calculator />} />
        </Routes>
      </div>
    );
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
