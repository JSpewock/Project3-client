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
      baseURL: process.env.BASE_URL || 'http://localhost:3003',
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
    fetch(this.state.baseURL + '/cocktail')
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
    fetch(this.state.baseURL + '/cocktail/' + id, {
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
      <div>
        < Header delete={this.deleteCocktail} showUpdateForm={this.showUpdateForm} baseURL={this.state.baseURL} />
        {this.state.showUpdateForm ? ( 
            < UpdateForm cocktail={this.state.cocktailToUpdate} baseURL={this.state.baseURL} toggleUpdateForm={this.toggleUpdateForm} handleUpdateCocktail={this.handleUpdateCocktail} />
          ) : this.state.showCreateForm ? (
            < Form baseURL={this.state.baseURL} addCocktail={this.handleAddCocktail} toggleCreateForm={this.toggleCreateForm}/>
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