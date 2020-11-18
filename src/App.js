import React, { Component } from 'react'
import Header from './components/Header'

const baseURL = process.env.BASE_URL || 'http://localhost:3003/cocktail'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cocktails = []
    }
  }
  
  
  render() {
    return (
      <div>
        < Header />
      </div>
    )
  }
}