import React, { Component } from 'react'

export default class Cocktail extends Component {
    render() {
        return (
            <div id={this.props.cocktail.strDrink} key={this.props.cocktail._id}>
                <h1>{this.props.cocktail.strDrink}</h1>
                <img src={this.props.cocktail.strDrinkThumb} />
            </div>
        )
    }
}
