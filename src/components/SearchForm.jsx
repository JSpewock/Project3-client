import React, { Component } from 'react'
import Cocktail from './Cocktail'
import { Form, Button } from 'react-bootstrap/'

export default class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchResult: [],
            name: '',
            ingredient: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.searchByName = this.searchByName.bind(this)
        this.searchByIngredient = this.searchByIngredient.bind(this)
        this.moreDetails = this.moreDetails.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.id] : event.target.value})
    }

    searchByName(event) {
        event.preventDefault()
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + this.state.name)
        .then(res => res.json())
        .then(data => {
            this.setState({searchResult: data})
        })
    }

    searchByIngredient(event) {
        event.preventDefault()
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + this.state.ingredient)
        .then(res => res.json())
        .then(data => {
            this.setState({searchResult: data})
        })
    }

    moreDetails(event) {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + event.target.id)
        .then(res => res.json())
        .then(data => {
            this.setState({searchResult: data})
        })
    }

    render() {
        return (
            <div>
            <Form onSubmit={this.searchByName}>
                <Form.Group>
                    <Form.Label htmlFor='name'>Search by cocktail name:</Form.Label>
                    <Form.Control type='text' id='name' placeholder='Type Name Here' value={this.state.name} onChange={this.handleChange}/>
                </Form.Group>
                <Button variant='light' type='submit'>
                    Submit
                </Button>
            </Form>
            <Form onSubmit={this.searchByIngredient}>
                <Form.Group>
                    <Form.Label htmlFor='ingredient'>Search by Ingredient:</Form.Label>
                    <Form.Control type='text' id='ingredient' placeholder='Type Ingredient Here' value={this.state.ingredient} onChange={this.handleChange}/>
                </Form.Group>
                <Button variant='light' type='submit'>
                    Submit
                </Button>
            </Form>
            
            <div className="search-results">
                    {this.state.searchResult.drinks && (
                        this.state.searchResult.drinks.map(cocktail => {
                            return  (
                                <div>
                                    <Cocktail cocktail={cocktail} delete={this.props.delete} showUpdateForm={this.props.showUpdateForm}/>
                                    <p onClick={this.moreDetails} id={cocktail.strDrink} className="more-details">More Details </p>
                                </div> 
                            )
                        }
                        )
                    )}
                </div>
            </div>
        )
    }
}