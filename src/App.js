import React, { Component } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import CocktailList from './components/CoktailList'
import UpdateForm from './components/UpdateForm'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cocktails: [],
      baseURL: process.env.BASE_URL || 'http://localhost:3003/cocktail',
      showUpdateForm: false,
      cocktailToUpdate: {}
    }
    this.getCocktails = this.getCocktails.bind(this)
    this.handleAddCocktail = this.handleAddCocktail.bind(this)
    this.deleteCocktail = this.deleteCocktail.bind(this)
    this.showUpdateForm = this.showUpdateForm.bind(this)
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
    fetch(this.state.baseURL + '/' + id, {
      method: 'DELETE'
    }).then (response => {
      const findIndex = this.state.cocktails.findIndex(cocktail => cocktail._id === id)
      const fakeCocktails = [...this.state.cocktails]
      fakeCocktails.splice(findIndex, 1)
      this.setState({ cocktails: fakeCocktails })
    })
  }

  showUpdateForm(cocktailToUpdate) {
    this.setState({
      showUpdateForm: true,
      cocktailToUpdate: cocktailToUpdate
    })
  }
  
  render() {
    return (
      <div>
        < Header />
        {this.state.showUpdateForm ? ( 
          < UpdateForm cocktail={this.state.cocktailToUpdate} />
          )  : (
          <div>
          < Form baseURL={this.state.baseURL} addCocktail={this.handleAddCocktail}/>
          < CocktailList allCocktails={this.state.cocktails} delete={this.deleteCocktail} showUpdateForm={this.showUpdateForm}/>
          </div>
        )
        }
      </div>
    )
  }
}