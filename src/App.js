import React, { Component } from 'react'
import Display from './Display'

class App extends Component {
  
  state = {
    id: 0,
    rec: [
    {
      id: 1,
      product_name : 'Milk',
      price: 85,
      quantity: 1 
    },
    {
      id: 2,
      product_name : 'Eggs',
      price: 125,
      quantity: 2
    },
    {
      id: 3,
      product_name : 'Rice',
      price: 45,
      quantity: 5 
    },
    {
      id: 4,
      product_name : 'Water',
      price: 32,
      quantity: 3
    }
  ]}

  render() {
    return (
      <div>
        <Display d={this.state.rec} />
      </div>
    )
  }
}

export default App