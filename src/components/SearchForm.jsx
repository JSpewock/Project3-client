import React, { Component } from 'react'
import Cocktail from './Cocktail'

export default class Form extends Component {
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
    }

    render() {
        return (
            <div>
                <p>Use a database to search for favorite cocktails!</p>
                <form onSubmit={this.searchByName}>
                    <label htmlFor="name">
                        Search by cocktail name: 
                        <input type="text" id="name" placeholder='Type Name Here' value={this.state.name} onChange={this.handleChange} />
                        <input type="submit" value="Search by Name" />
                    </label>
                </form>
                    
                <form onSubmit={this.searchByIngredient}>
                    <label htmlFor="ingredient">
                        Search by ingredient: 
                        <input type="text" id="ingredient" placeholder="Type Ingredient Here" value={this.state.ingredient} onChange={this.handleChange}/>
                        <input type="submit" value="Search by Ingredient" />
                    </label>
                </form>

                <div className="search-results">
                    {this.state.searchResult.drinks && (
                        this.state.searchResult.drinks.map(cocktail => {
                            return  (
                                <div>
                                    <p onClick=''>More Details</p>
                                    <Cocktail cocktail={cocktail} delete={this.props.delete} showUpdateForm={this.props.showUpdateForm}/>
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
