import React, { Component } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import CocktailList from './components/CoktailList'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cocktails: [],
      baseURL: process.env.BASE_URL || 'http://localhost:3003/cocktail'
    }
    this.getCocktails = this.getCocktails.bind(this)
    this.handleAddCocktail = this.handleAddCocktail.bind(this)
  }
  
  componentDidMount() {
    this.getCocktails()
  }


  getCocktails() {
    fetch(this.state.baseURL)
    .then(data => {
      return data.json()
    }).then(parsedData => {
      this.setState({cocktails: parsedData})
    })
  }

  handleAddCocktail(data) {
    this.setState({cocktails: this.state.cocktails.concat(data)})
  }

  //taken from GA w08d05 lesson notes
  deleteCocktail(id) {
    fetch(this.state.baseURL + id, {
      method: 'DELETE'
    }).then (response => {
      const findIndex = this.state.cocktails.findIndex(cocktail => cocktail._id === id)
      const fakeCocktails = [...this.state.cocktails]
      fakeCocktails.splice(findIndex, 1)
      this.setState({ cocktails: fakeCocktails })
    })
  }
  
  render() {
    return (
      <div onClick={this.getCocktails}>
        < Header />
        < Form baseURL={this.state.baseURL} addCocktail={this.handleAddCocktail}/>
        < CocktailList allCocktails={this.state.cocktails}/>
      </div>
    )
  }
}