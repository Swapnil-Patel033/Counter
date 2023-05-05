import './App.css';
import Conters from './Component/ClassConters';
import React, { Component } from 'react'
import FunctionConter from './Component/FunctionConter';

class App extends Component {
  render() {
    return (
      <div style={{display:'flex'}}>
        <Conters/>
        <FunctionConter/>
      </div>
    )
  }
}
export default App;
