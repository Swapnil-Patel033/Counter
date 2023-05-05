import React, { Component } from 'react'

class Conters extends Component {
  constructor() {
    super()
    this.state = {
      value: 0,
      SubValue: 0
    }
  }
  componentWillUpdate() {
    // console.log(this.state.value)
    let NewValu = this.state.value + 1
    if (NewValu % 5 === 0) {
      this.setState
      (
        {
        SubValue: this.state.SubValue + 7
        }
      )
    }
  }

  //Start Increment 
  increment = () => {
    this.setState
    (
      {
      value: this.state.value + 1
      }
    )
  }
  //End  Increment


  //Start Decrement
  decrement = () => {
    this.setState
    (
      {
      value: this.state.value - 1
      }
    )
  }
  //End Decrement

  render() {
    return (
      <div>
        <h1>This Class Component</h1>
        <h1>Conter:{this.state.value}</h1>
        <h1>Sub Conter:{this.state.SubValue}</h1>
        <button onClick={this.decrement} >decrement</button>
        <button onClick={this.increment} style={{ margin: 20 }}>increment</button>

      </div>
    )
  }
}
export default Conters;