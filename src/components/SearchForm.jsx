import React, { Component } from 'react'
import Cocktail from './Cocktail'
import { Form, Button } from 'react-bootstrap/'

export default class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchResult: [],
            name: '',
            ingredient: '',
            ifSearch: this.props.ifSearch
        }
        this.handleChange = this.handleChange.bind(this)
        this.searchByName = this.searchByName.bind(this)
        this.searchByIngredient = this.searchByIngredient.bind(this)
        this.moreDetails = this.moreDetails.bind(this)
        this.addLocalByName = this.addLocalByName.bind(this)
        this.addLocalByIngre = this.addLocalByIngre.bind(this)
        this.moreDeatilsLocal = this.moreDeatilsLocal.bind(this)
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
            this.props.showSearch()
            this.addLocalByName()
            
        })
        
        
    }


    searchByIngredient(event) {
        event.preventDefault()
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + this.state.ingredient)
        .then(res => res.json())
        .then(data => {
            this.setState({searchResult: data})
            this.props.showSearch()
            this.addLocalByIngre()
            
        })
    }

    addLocalByName() {
        fetch(this.props.baseURL + '/cocktail/findByName', {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.name,
                ingredient: this.state.ingredient
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then (res=> res.json())
        .then(data => {
            const dummyArray = this.state.searchResult.drinks
            data.map(cocktail => {
                dummyArray.push(cocktail)
            })
            this.setState({
                [this.state.searchResult.drinks]: dummyArray,
                ifSearch: true
            })
        })
    }

    addLocalByIngre() {
        fetch(this.props.baseURL + '/cocktail/findByName', {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.name,
                ingredient: this.state.ingredient
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then (res=> res.json())
        .then(data => {
            const dummyArray = this.state.searchResult.drinks
            data.map(cocktail => {
                dummyArray.push(cocktail)
            })
            this.setState({[
                this.state.searchResult.drinks]: dummyArray,
                ifSearch: true
            })
        })
    }

    moreDetails(event) {
        console.log(event.currentTarget)
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + event.target.id)
        .then(res => res.json())
        .then(data => {
            this.setState({searchResult: data})
            this.moreDeatilsLocal(event.target.id)
        })
    }

    moreDeatilsLocal(name) {
        fetch(this.props.baseURL + '/cocktail/findByName', {
            method: 'POST',
            body: JSON.stringify({
                name: name
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then (res=> res.json())
        .then(data => {
            const dummyArray = this.state.searchResult.drinks
            data.map(cocktail => {
                dummyArray.push(cocktail)
            })
            this.setState({
                [this.state.searchResult.drinks]: dummyArray,
                ifSearch: true
            })
        })
    }

    render() {
        return (
            <div>
                <div className="search-form">
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
                            <Form.Label htmlFor='ingredient'>Search by ingredient:</Form.Label>
                            <Form.Control type='text' id='ingredient' placeholder='Type Ingredient Here' value={this.state.ingredient} onChange={this.handleChange}/>
                        </Form.Group>
                        <Button variant='light' type='submit'>
                            Submit
                        </Button>
                    </Form>
                </div>
                {this.state.ifSearch && (

                <div className="search-results">
                    {this.state.searchResult.drinks && (
                        this.state.searchResult.drinks.map(cocktail => {
                            return  (
                                <div>
                                    <Cocktail cocktail={cocktail} delete={this.props.delete} showUpdateForm={this.props.showUpdateForm}/>
                                    <div className="more-details-flex">
                                        <Button onClick={this.moreDetails} id={cocktail.strDrink} variant='info' className="more-details">More Details</Button>
                                    </div>
                                    {/* <p onClick={this.moreDetails} id={cocktail.strDrink} className="more-details">More Details </p> */}
                                </div> 
                            )
                        }
                        )
                    )}
                </div>
                )}
            </div>
        )
    }
}