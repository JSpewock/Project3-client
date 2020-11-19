import React, { Component } from 'react'
import Header from './components/Header'

const baseURL = process.env.BASE_URL || 'http://localhost:3003/cocktail'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cocktails: []
    }
    this.getCocktails = this.getCocktails.bind(this)
  }
  
  componentDidMount() {
    this.getCocktails()
  }


  getCocktails() {
    fetch(baseURL)
    .then(data => {
      return data.json()
    }).then(parsedData => {
      this.setState({cocktails: parsedData})
    })
  }
  
  render() {
    return (
      <div onClick={this.getCocktails}>
        < Header/>
      </div>
    )
  }
}