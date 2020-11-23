import React, { Component } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import CocktailList from './components/CoktailList'
import UpdateForm from './components/UpdateForm'
import 'bootstrap/dist/css/bootstrap.min.css'

let BASE_URL = ''
if (process.env.BASE_URL) {
  BASE_URL = process.env.BASE_URL
} else {
  BASE_URL = 'http://localhost:3003'
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cocktails: [],
      showUpdateForm: false,
      showCreateForm: false,
      cocktailToUpdate: {}
    }
    this.getCocktails = this.getCocktails.bind(this)
    this.handleAddCocktail = this.handleAddCocktail.bind(this)
    this.deleteCocktail = this.deleteCocktail.bind(this)
    this.showUpdateForm = this.showUpdateForm.bind(this)
    this.toggleUpdateForm = this.toggleUpdateForm.bind(this)
    this.handleUpdateCocktail = this.handleUpdateCocktail.bind(this)
    this.toggleCreateForm = this.toggleCreateForm.bind(this)
  }
  
  componentDidMount() {
    this.getCocktails()
  }


  getCocktails() {
    fetch(BASE_URL + '/cocktail')
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
    fetch(BASE_URL + '/cocktail/' + id, {
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
  
  toggleUpdateForm() {
    this.setState({showUpdateForm : false})
  }

  toggleCreateForm() {
    this.setState({showCreateForm : !this.state.showCreateForm})
  }


  handleUpdateCocktail(data) {
    const findIndex = this.state.cocktails.findIndex(cocktail => cocktail._id === data._id)
    const fakeCocktails = [...this.state.cocktails]
    fakeCocktails[findIndex] = data
    this.setState({cocktails: fakeCocktails})
  }
  
  render() {
    return (
      <div className="container-fluid">
        < Header delete={this.deleteCocktail} showUpdateForm={this.showUpdateForm} BASE_URL={BASE_URL} />
        {this.state.showUpdateForm ? ( 
            < UpdateForm cocktail={this.state.cocktailToUpdate} BASE_URL={BASE_URL} toggleUpdateForm={this.toggleUpdateForm} handleUpdateCocktail={this.handleUpdateCocktail} />
          ) : this.state.showCreateForm ? (
            < Form BASE_URL={BASE_URL} addCocktail={this.handleAddCocktail} toggleCreateForm={this.toggleCreateForm}/>
          ) : (
          <div>
            <button onClick={this.toggleCreateForm}>create</button>
            < CocktailList allCocktails={this.state.cocktails} delete={this.deleteCocktail} showUpdateForm={this.showUpdateForm}/>
          </div>
        )
        }
      </div>
    )
  }
}