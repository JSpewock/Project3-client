import React, { Component } from 'react'
import Header from './components/Header'
import CreateForm from './components/CreateForm'
import CocktailList from './components/CoktailList'
import UpdateForm from './components/UpdateForm'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import SearchForm from './components/SearchForm'
import Footer from './components/Footer'

// information on react bootstrap taken from the react bootstrap docs https://react-bootstrap.github.io/components/cards/

let BASE_URL = ''
if (process.env.REACT_APP_BASE_URL) {
  BASE_URL = process.env.REACT_APP_BASE_URL
} else {
  BASE_URL = 'http://localhost:3003'
}
// console.log(process.env.BASE_URL)

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cocktails: [],
      showUpdateForm: false,
      showCreateForm: false,
      cocktailToUpdate: {},
      showSearch: false
    }
    this.getCocktails = this.getCocktails.bind(this)
    this.handleAddCocktail = this.handleAddCocktail.bind(this)
    this.deleteCocktail = this.deleteCocktail.bind(this)
    this.showUpdateForm = this.showUpdateForm.bind(this)
    this.toggleUpdateForm = this.toggleUpdateForm.bind(this)
    this.handleUpdateCocktail = this.handleUpdateCocktail.bind(this)
    this.toggleCreateForm = this.toggleCreateForm.bind(this)
    this.toggleShowSearch = this.toggleShowSearch.bind(this)
  }
  
  componentDidMount() {
    this.getCocktails()
    console.log(process.env)
    console.log(BASE_URL)
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
      ifSearch: false,
      cocktailToUpdate: cocktailToUpdate
    })
  }
  
  toggleUpdateForm() {
    this.setState({showUpdateForm : false})
  }

  toggleCreateForm() {
    this.setState({
      showCreateForm : !this.state.showCreateForm,
      ifSearch: false
    })
  }


  handleUpdateCocktail(data) {
    const findIndex = this.state.cocktails.findIndex(cocktail => cocktail._id === data._id)
    const fakeCocktails = [...this.state.cocktails]
    fakeCocktails[findIndex] = data
    this.setState({cocktails: fakeCocktails})
  }

  toggleShowSearch() {
    this.setState({showSearch: true})
  }

  
  render() {
    return (
      <div className="container-fluid">
        <div className="header">
        < Header delete={this.deleteCocktail} showUpdateForm={this.showUpdateForm} baseURL={BASE_URL} ifSearch={this.state.ifSearch}/>
        </div>
        {this.state.showUpdateForm ? ( 
            < UpdateForm cocktail={this.state.cocktailToUpdate} baseURL={BASE_URL} toggleUpdateForm={this.toggleUpdateForm} handleUpdateCocktail={this.handleUpdateCocktail} />
          ) : this.state.showCreateForm ? (
            < CreateForm baseURL={BASE_URL} addCocktail={this.handleAddCocktail} toggleCreateForm={this.toggleCreateForm}/>
          ) : (
          <div className="main-list">
            <SearchForm delete={this.deleteCocktail} showUpdateForm={this.showUpdateForm} baseURL={BASE_URL} showSearch={this.toggleShowSearch} />
              <Button onClick={this.toggleCreateForm} variant='info' class="newCocktail">Add a New Cocktail</Button>
              {this.state.showSearch ? (
                null
              ) : (
                <div> 
                  < CocktailList allCocktails={this.state.cocktails} delete={this.deleteCocktail} showUpdateForm={this.showUpdateForm}/>
                </div>
              )}
          </div>
          )
          }
        <Footer />
      </div>
    )
    
  }
}